import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { 
  Smartphone, 
  AlertTriangle, 
  Shield, 
  Search,
  Star,
  Download,
  Calendar,
  Flag,
  Eye,
  ExternalLink,
  Users,
  CheckCircle,
  XCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const FakeAppDetector = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const { toast } = useToast();

  // Dummy data for fake trading apps
  const suspiciousApps = [
    {
      id: 1,
      name: "QuickTrade Pro",
      developer: "FastMoney Solutions",
      platform: "Google Play",
      icon: "📱",
      rating: 4.8,
      downloads: "10K+",
      dateAdded: "2024-01-15",
      riskScore: 95,
      status: "fraudulent",
      redFlags: [
        "Mimics legitimate broker UI",
        "Fake user reviews",
        "No SEBI registration",
        "Promises guaranteed returns",
        "Requests bank details upfront"
      ],
      legitimateAppMimicked: "Zerodha Kite",
      reportsCount: 89,
      characteristics: {
        fakeReviews: true,
        misleadingPermissions: true,
        unregisteredEntity: true,
        suspiciousPayments: true
      }
    },
    {
      id: 2,
      name: "InvestSmart Mobile",
      developer: "Global Trading Inc",
      platform: "App Store",
      icon: "📊",
      rating: 4.9,
      downloads: "5K+",
      dateAdded: "2024-02-03",
      riskScore: 88,
      status: "highly_suspicious",
      redFlags: [
        "Similar name to legitimate app",
        "Unrealistic return promises",
        "No customer support",
        "Hidden fees structure"
      ],
      legitimateAppMimicked: "InvestWise",
      reportsCount: 67,
      characteristics: {
        fakeReviews: true,
        misleadingPermissions: false,
        unregisteredEntity: true,
        suspiciousPayments: true
      }
    },
    {
      id: 3,
      name: "CryptoGain Express",
      developer: "Digital Assets Pro",
      platform: "APK Direct",
      icon: "₿",
      rating: 4.7,
      downloads: "2K+",
      dateAdded: "2024-01-28",
      riskScore: 92,
      status: "fraudulent",
      redFlags: [
        "Not on official app stores",
        "Requests excessive permissions",
        "No company verification",
        "Suspicious crypto mining claims"
      ],
      legitimateAppMimicked: "CoinDCX",
      reportsCount: 156,
      characteristics: {
        fakeReviews: true,
        misleadingPermissions: true,
        unregisteredEntity: true,
        suspiciousPayments: true
      }
    }
  ];

  const appStoreStats = [
    { store: "Google Play", flagged: 156, active: 23, risk: "critical" },
    { store: "App Store", flagged: 89, active: 12, risk: "high" },
    { store: "APK Sites", flagged: 234, active: 45, risk: "critical" },
    { store: "Third Party", flagged: 78, active: 18, risk: "high" }
  ];

  const handleScan = () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Search Required",
        description: "Please enter an app name or developer to scan",
        variant: "destructive"
      });
      return;
    }

    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
      toast({
        title: "Scan Complete",
        description: "App security analysis completed",
      });
    }, 3000);
  };

  const getStatusBadge = (status: string, score: number) => {
    switch (status) {
      case "fraudulent":
        return <Badge variant="critical"><XCircle className="w-3 h-3" /> Fraudulent ({score}%)</Badge>;
      case "highly_suspicious":
        return <Badge variant="warning"><AlertTriangle className="w-3 h-3" /> Highly Suspicious ({score}%)</Badge>;
      case "verified":
        return <Badge variant="verified"><CheckCircle className="w-3 h-3" /> Verified ({score}%)</Badge>;
      default:
        return <Badge variant="secondary">Under Review ({score}%)</Badge>;
    }
  };

  const getRiskColor = (score: number) => {
    if (score >= 80) return "destructive";
    if (score >= 60) return "warning";
    return "success";
  };

  return (
    <div className="space-y-6">
      {/* App Scanner */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-primary" />
            Fake Trading App Detector
          </CardTitle>
          <CardDescription>
            Identify fraudulent trading applications and protect investors
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="app-search">App Name or Developer</Label>
              <Input
                id="app-search"
                placeholder="Enter app name or developer name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleScan()}
                className="mt-1"
              />
            </div>
            <div className="flex items-end">
              <Button 
                variant="security" 
                onClick={handleScan}
                disabled={isScanning}
                size="lg"
              >
                {isScanning ? (
                  <>
                    <Progress value={70} className="w-4 h-4" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    Scan App
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* App Store Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            App Store Monitoring
          </CardTitle>
          <CardDescription>Fake app detection across different platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {appStoreStats.map((stat, index) => (
              <div key={index} className="text-center p-4 border border-card-border rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  <Smartphone className="w-5 h-5" />
                </div>
                <p className="font-medium text-sm mb-2">{stat.store}</p>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-destructive">{stat.flagged}</p>
                  <p className="text-xs text-muted-foreground">Total Flagged</p>
                  <p className="text-sm font-medium text-warning">{stat.active}</p>
                  <p className="text-xs text-muted-foreground">Currently Active</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Suspicious Apps List */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            Detected Fraudulent Apps
          </CardTitle>
          <CardDescription>Recently identified fake trading applications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {suspiciousApps.map((app) => (
            <div key={app.id} className="border border-card-border rounded-lg p-6 space-y-4">
              
              {/* App Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{app.icon}</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{app.name}</h3>
                      {getStatusBadge(app.status, app.riskScore)}
                    </div>
                    <p className="text-sm text-muted-foreground">by {app.developer}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        <span>{app.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Download className="w-3 h-3" />
                        <span>{app.downloads}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(app.dateAdded).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Badge variant="outline">{app.platform}</Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold mb-1">
                    <span className={`text-${getRiskColor(app.riskScore)}`}>
                      {app.riskScore}%
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Risk Score</p>
                </div>
              </div>

              {/* Mimicked App Warning */}
              {app.legitimateAppMimicked && (
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                  <div className="flex items-center gap-2 text-destructive font-medium mb-1">
                    <AlertTriangle className="w-4 h-4" />
                    IMPERSONATION ALERT
                  </div>
                  <p className="text-sm">
                    This app appears to mimic <strong>{app.legitimateAppMimicked}</strong>
                  </p>
                </div>
              )}

              {/* Red Flags */}
              <div className="space-y-2">
                <h4 className="font-medium text-destructive flex items-center gap-2">
                  <Flag className="w-4 h-4" />
                  Red Flags Detected ({app.redFlags.length})
                </h4>
                <div className="flex flex-wrap gap-2">
                  {app.redFlags.map((flag, index) => (
                    <Badge key={index} variant="critical" className="text-xs">
                      {flag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Characteristics Analysis */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  {app.characteristics.fakeReviews ? 
                    <XCircle className="w-4 h-4 text-destructive" /> : 
                    <CheckCircle className="w-4 h-4 text-success" />
                  }
                  <span className="text-sm">Fake Reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  {app.characteristics.misleadingPermissions ? 
                    <XCircle className="w-4 h-4 text-destructive" /> : 
                    <CheckCircle className="w-4 h-4 text-success" />
                  }
                  <span className="text-sm">Excessive Permissions</span>
                </div>
                <div className="flex items-center gap-2">
                  {app.characteristics.unregisteredEntity ? 
                    <XCircle className="w-4 h-4 text-destructive" /> : 
                    <CheckCircle className="w-4 h-4 text-success" />
                  }
                  <span className="text-sm">Unregistered Entity</span>
                </div>
                <div className="flex items-center gap-2">
                  {app.characteristics.suspiciousPayments ? 
                    <XCircle className="w-4 h-4 text-destructive" /> : 
                    <CheckCircle className="w-4 h-4 text-success" />
                  }
                  <span className="text-sm">Suspicious Payments</span>
                </div>
              </div>

              {/* Risk Score Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Risk Assessment</span>
                  <span className={`font-bold text-${getRiskColor(app.riskScore)}`}>
                    {app.riskScore}% Risk
                  </span>
                </div>
                <Progress 
                  value={app.riskScore} 
                  className={`h-3 [&>div]:bg-${getRiskColor(app.riskScore)}`}
                />
              </div>

              {/* Reports & Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-card-border">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    <span>{app.reportsCount} user reports</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-3 h-3" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-3 h-3" />
                    App Store
                  </Button>
                  <Button variant="alert" size="sm">
                    <Flag className="w-3 h-3" />
                    Report
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Detection Guidelines */}
      <Card>
        <CardHeader>
          <CardTitle>App Safety Guidelines</CardTitle>
          <CardDescription>How to identify legitimate vs fraudulent trading apps</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium text-success">Legitimate App Indicators</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  SEBI registered broker/entity
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Clear terms and conditions
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Transparent fee structure
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Customer support available
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                  Regular security updates
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium text-destructive">Red Flag Indicators</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  Promises of guaranteed returns
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  Requests bank details upfront
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  No customer verification
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  Mimics established apps
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                  Available only on APK sites
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};