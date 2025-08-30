import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Search,
  Building,
  Calendar,
  TrendingUp,
  Eye,
  Flag,
  ExternalLink,
  BarChart3
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AnnouncementAnalyzer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  // Dummy data for corporate announcements
  const recentAnnouncements = [
    {
      id: 1,
      company: "ABC Industries Ltd",
      title: "Merger with Global Tech Giant - 500% Value Increase Expected",
      exchange: "BSE",
      timestamp: "2 hours ago",
      credibilityScore: 15,
      status: "highly_suspicious",
      redFlags: [
        "No counterparty disclosure",
        "Unrealistic valuation claims", 
        "Missing regulatory approvals",
        "Historical performance mismatch"
      ],
      verificationChecks: {
        counterPartyDisclosure: false,
        regulatoryApproval: false,
        historicalConsistency: false,
        marketAlignment: false
      },
      marketImpact: {
        priceChange: "+45%",
        volume: "892% above average",
        suspiciousActivity: true
      }
    },
    {
      id: 2,
      company: "XYZ Corporation",
      title: "Acquisition of Mining Rights in Rare Earth Metals",
      exchange: "NSE",
      timestamp: "1 day ago", 
      credibilityScore: 78,
      status: "verified",
      redFlags: [],
      verificationChecks: {
        counterPartyDisclosure: true,
        regulatoryApproval: true,
        historicalConsistency: true,
        marketAlignment: true
      },
      marketImpact: {
        priceChange: "+12%",
        volume: "34% above average",
        suspiciousActivity: false
      }
    },
    {
      id: 3,
      company: "Quick Gains Ltd",
      title: "Revolutionary AI Technology Patent - Disrupting Multiple Industries",
      exchange: "BSE",
      timestamp: "3 hours ago",
      credibilityScore: 25,
      status: "suspicious",
      redFlags: [
        "Vague technology claims",
        "No patent number provided",
        "Company has no tech background",
        "Similar false claims in past"
      ],
      verificationChecks: {
        counterPartyDisclosure: false,
        regulatoryApproval: true,
        historicalConsistency: false,
        marketAlignment: false
      },
      marketImpact: {
        priceChange: "+78%",
        volume: "567% above average", 
        suspiciousActivity: true
      }
    }
  ];

  const handleAnalyze = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Search Required",
        description: "Please enter a company name or announcement to analyze",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      toast({
        title: "Analysis Complete",
        description: "Corporate announcement has been analyzed for authenticity",
      });
    }, 3000);
  };

  const getStatusBadge = (status: string, score: number) => {
    switch (status) {
      case "verified":
        return <Badge variant="verified"><CheckCircle className="w-3 h-3" /> Verified ({score}%)</Badge>;
      case "highly_suspicious":
        return <Badge variant="critical"><AlertTriangle className="w-3 h-3" /> Highly Suspicious ({score}%)</Badge>;
      case "suspicious":
        return <Badge variant="warning"><AlertTriangle className="w-3 h-3" /> Suspicious ({score}%)</Badge>;
      default:
        return <Badge variant="secondary">Under Review ({score}%)</Badge>;
    }
  };

  const getCredibilityColor = (score: number) => {
    if (score >= 70) return "success";
    if (score >= 40) return "warning";
    return "destructive";
  };

  return (
    <div className="space-y-6">
      {/* Analysis Tool */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            Corporate Announcement Analyzer
          </CardTitle>
          <CardDescription>
            Verify authenticity of corporate announcements and detect market manipulation
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="announcement-search">Company or Announcement</Label>
              <Input
                id="announcement-search"
                placeholder="Enter company name or announcement title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
                className="mt-1"
              />
            </div>
            <div className="flex items-end">
              <Button 
                variant="security" 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <Progress value={60} className="w-4 h-4" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    Analyze
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recent Announcements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            Recent Announcements Analysis
          </CardTitle>
          <CardDescription>Latest corporate announcements and their credibility scores</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {recentAnnouncements.map((announcement) => (
            <div key={announcement.id} className="border border-card-border rounded-lg p-6 space-y-4">
              
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Building className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">{announcement.company}</span>
                    <Badge variant="outline">{announcement.exchange}</Badge>
                    {getStatusBadge(announcement.status, announcement.credibilityScore)}
                  </div>
                  <h3 className="font-semibold text-lg">{announcement.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {announcement.timestamp}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold mb-1">
                    <span className={`text-${getCredibilityColor(announcement.credibilityScore)}`}>
                      {announcement.credibilityScore}%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Credibility Score</p>
                </div>
              </div>

              {/* Verification Checks */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  {announcement.verificationChecks.counterPartyDisclosure ? 
                    <CheckCircle className="w-4 h-4 text-success" /> : 
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                  }
                  <span className="text-sm">Counterparty Disclosure</span>
                </div>
                <div className="flex items-center gap-2">
                  {announcement.verificationChecks.regulatoryApproval ? 
                    <CheckCircle className="w-4 h-4 text-success" /> : 
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                  }
                  <span className="text-sm">Regulatory Approval</span>
                </div>
                <div className="flex items-center gap-2">
                  {announcement.verificationChecks.historicalConsistency ? 
                    <CheckCircle className="w-4 h-4 text-success" /> : 
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                  }
                  <span className="text-sm">Historical Consistency</span>
                </div>
                <div className="flex items-center gap-2">
                  {announcement.verificationChecks.marketAlignment ? 
                    <CheckCircle className="w-4 h-4 text-success" /> : 
                    <AlertTriangle className="w-4 h-4 text-destructive" />
                  }
                  <span className="text-sm">Market Alignment</span>
                </div>
              </div>

              {/* Market Impact */}
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-medium mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Market Impact Analysis
                </h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Price Change: </span>
                    <span className={`font-bold ${
                      announcement.marketImpact.priceChange.startsWith('+') ? 'text-success' : 'text-destructive'
                    }`}>
                      {announcement.marketImpact.priceChange}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Volume: </span>
                    <span className="font-medium">{announcement.marketImpact.volume}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Suspicious Activity: </span>
                    <span className={`font-medium ${
                      announcement.marketImpact.suspiciousActivity ? 'text-destructive' : 'text-success'
                    }`}>
                      {announcement.marketImpact.suspiciousActivity ? 'Detected' : 'None'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Red Flags */}
              {announcement.redFlags.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-destructive flex items-center gap-2">
                    <Flag className="w-4 h-4" />
                    Red Flags Detected
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {announcement.redFlags.map((flag, index) => (
                      <Badge key={index} variant="critical" className="text-xs">
                        {flag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Credibility Score Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Credibility Assessment</span>
                  <span className={`font-bold text-${getCredibilityColor(announcement.credibilityScore)}`}>
                    {announcement.credibilityScore}%
                  </span>
                </div>
                <Progress 
                  value={announcement.credibilityScore} 
                  className={`h-3 [&>div]:bg-${getCredibilityColor(announcement.credibilityScore)}`}
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-card-border">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-3 h-3" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-3 h-3" />
                    Exchange Filing
                  </Button>
                </div>
                {announcement.status === 'highly_suspicious' && (
                  <Button variant="alert" size="sm">
                    <Flag className="w-3 h-3" />
                    Report to SEBI
                  </Button>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Analysis Methodology */}
      <Card>
        <CardHeader>
          <CardTitle>Verification Methodology</CardTitle>
          <CardDescription>How we analyze corporate announcements for authenticity</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium">Automated Checks</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Cross-reference with regulatory filings
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Verify counterparty disclosures
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Analyze historical performance patterns
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Market reaction anomaly detection
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Risk Indicators</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  Unrealistic valuation claims
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  Missing regulatory approvals
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  Inconsistent with company history
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-warning mt-0.5 flex-shrink-0" />
                  Abnormal trading patterns
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};