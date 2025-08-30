import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  MessageSquare, 
  AlertTriangle, 
  TrendingUp, 
  Eye, 
  Flag,
  Play,
  Users,
  Share,
  ThumbsDown,
  ExternalLink
} from "lucide-react";

export const SocialMediaMonitor = () => {
  const [isScanning, setIsScanning] = useState(false);

  // Dummy data for social media monitoring
  const suspiciousContent = [
    {
      id: 1,
      platform: "WhatsApp",
      type: "Group Message",
      content: "🚨 URGENT: Buy XYZ stock NOW! 500% guaranteed returns in 30 days! Limited time offer. DM for details.",
      author: "Investment_Guru_2024",
      groupName: "Quick Money Making Tips",
      members: 847,
      riskScore: 95,
      timestamp: "5 min ago",
      flags: ["Guaranteed Returns", "Urgency Tactics", "Unregistered Advisor"],
      engagement: { likes: 23, shares: 156, comments: 78 }
    },
    {
      id: 2,
      platform: "Telegram",
      type: "Channel Post",
      content: "BREAKING: CEO of ABC Ltd announces merger with global giant! Stock will 10x. Buy immediately before announcement!",
      author: "Market_Insider_News",
      groupName: "Exclusive Stock Tips",
      members: 2341,
      riskScore: 88,
      timestamp: "1 hour ago",
      flags: ["False News", "Market Manipulation", "Pump & Dump"],
      engagement: { likes: 145, shares: 234, comments: 89 }
    },
    {
      id: 3,
      platform: "YouTube",
      type: "Video",
      content: "How I Made ₹1 Crore in 1 Month - Secret Stock Formula Revealed! [LIVE TRADING PROOF]",
      author: "MoneyMaker_Expert",
      groupName: null,
      members: null,
      riskScore: 78,
      timestamp: "3 hours ago",
      flags: ["Unrealistic Claims", "No Disclaimer", "Fake Credentials"],
      engagement: { likes: 892, shares: 445, comments: 234 }
    },
    {
      id: 4,
      platform: "Instagram",
      type: "Story",
      content: "Screenshots of my trading app showing ₹50L profit today! Follow my signals for guaranteed success!",
      author: "trading_prince_mumbai",
      groupName: null,
      members: null,
      riskScore: 85,
      timestamp: "6 hours ago",
      flags: ["Fake Screenshots", "Signal Service", "No SEBI Registration"],
      engagement: { likes: 567, shares: 123, comments: 45 }
    }
  ];

  const platformStats = [
    { platform: "WhatsApp", alerts: 156, groups: 89, risk: "high" },
    { platform: "Telegram", alerts: 234, groups: 67, risk: "critical" },
    { platform: "YouTube", alerts: 78, groups: null, risk: "medium" },
    { platform: "Instagram", alerts: 134, groups: null, risk: "high" },
    { platform: "Facebook", alerts: 98, groups: 34, risk: "medium" },
    { platform: "Twitter/X", alerts: 187, groups: null, risk: "high" }
  ];

  const handleScanAll = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  const getPlatformIcon = (platform: string) => {
    return <MessageSquare className="w-4 h-4" />;
  };

  const getRiskBadge = (score: number) => {
    if (score >= 80) return <Badge variant="critical">Critical</Badge>;
    if (score >= 60) return <Badge variant="warning">High</Badge>;
    return <Badge variant="secondary">Medium</Badge>;
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "critical": return "destructive";
      case "high": return "warning";
      default: return "secondary";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Social Media Fraud Monitor
              </CardTitle>
              <CardDescription>
                Real-time monitoring of suspicious investment content across social platforms
              </CardDescription>
            </div>
            <Button 
              variant="security" 
              onClick={handleScanAll}
              disabled={isScanning}
              size="lg"
            >
              {isScanning ? (
                <>
                  <Progress value={66} className="w-4 h-4" />
                  Scanning...
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  Scan All Platforms
                </>
              )}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Platform Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-success" />
            Platform Overview
          </CardTitle>
          <CardDescription>Fraud detection statistics by platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {platformStats.map((stat, index) => (
              <div key={index} className="text-center p-4 border border-card-border rounded-lg">
                <div className="flex items-center justify-center mb-2">
                  {getPlatformIcon(stat.platform)}
                </div>
                <p className="font-medium text-sm mb-1">{stat.platform}</p>
                <p className="text-2xl font-bold mb-1">{stat.alerts}</p>
                <Badge variant={getRiskColor(stat.risk)} className="text-xs">
                  {stat.risk.toUpperCase()}
                </Badge>
                {stat.groups && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.groups} groups monitored
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Suspicious Content Feed */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            Flagged Content
          </CardTitle>
          <CardDescription>Recently detected suspicious investment content</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {suspiciousContent.map((content) => (
            <div 
              key={content.id}
              className="border border-card-border rounded-lg p-4 space-y-3 hover:shadow-card transition-all duration-200"
            >
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {getPlatformIcon(content.platform)}
                    <span className="font-medium text-sm">{content.platform}</span>
                  </div>
                  <Badge variant="outline">{content.type}</Badge>
                  {getRiskBadge(content.riskScore)}
                </div>
                <div className="text-xs text-muted-foreground">{content.timestamp}</div>
              </div>

              {/* Author & Group Info */}
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  <span className="font-medium">{content.author}</span>
                </div>
                {content.groupName && (
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">in</span>
                    <span className="font-medium">{content.groupName}</span>
                    <span className="text-muted-foreground">({content.members} members)</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="bg-muted p-3 rounded border-l-4 border-l-destructive">
                <p className="text-sm">{content.content}</p>
              </div>

              {/* Flags */}
              <div className="flex flex-wrap gap-2">
                {content.flags.map((flag, index) => (
                  <Badge key={index} variant="critical" className="text-xs">
                    <Flag className="w-3 h-3 mr-1" />
                    {flag}
                  </Badge>
                ))}
              </div>

              {/* Engagement & Actions */}
              <div className="flex items-center justify-between pt-2 border-t border-card-border">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{content.engagement.likes} likes</span>
                  <span>{content.engagement.shares} shares</span>
                  <span>{content.engagement.comments} comments</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-3 h-3" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="w-3 h-3" />
                    Report
                  </Button>
                  <Button variant="alert" size="sm">
                    <ThumbsDown className="w-3 h-3" />
                    Block
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Detection Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Detection Parameters</CardTitle>
          <CardDescription>Current monitoring criteria and thresholds</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium">Risk Indicators</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-3 h-3 text-destructive" />
                  Guaranteed return promises (&gt;15%)
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-3 h-3 text-warning" />
                  Urgency language (limited time, act now)
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-3 h-3 text-warning" />
                  Unverified credentials
                </li>
                <li className="flex items-center gap-2">
                  <AlertTriangle className="w-3 h-3 text-warning" />
                  Fake proof screenshots
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Monitoring Scope</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <MessageSquare className="w-3 h-3 text-primary" />
                  Public groups and channels
                </li>
                <li className="flex items-center gap-2">
                  <Play className="w-3 h-3 text-primary" />
                  Investment-related videos
                </li>
                <li className="flex items-center gap-2">
                  <Share className="w-3 h-3 text-primary" />
                  Viral financial content
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-3 h-3 text-primary" />
                  Influencer promotions
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};