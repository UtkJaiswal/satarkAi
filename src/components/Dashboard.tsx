import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  XCircle,
  Eye,
  FileText,
  Smartphone,
  MessageSquare
} from "lucide-react";

export const Dashboard = () => {
  const alertStats = {
    total: 847,
    critical: 23,
    medium: 156,
    resolved: 668
  };

  const recentAlerts = [
    {
      id: 1,
      type: "Fake Advisor",
      description: "Unregistered advisor promoting guaranteed 40% returns",
      risk: "critical",
      platform: "WhatsApp",
      timestamp: "2 min ago"
    },
    {
      id: 2,
      type: "Deepfake Video",
      description: "Fabricated CEO announcement about merger",
      risk: "critical",
      platform: "YouTube",
      timestamp: "15 min ago"
    },
    {
      id: 3,
      type: "Pump & Dump",
      description: "Coordinated buying pattern detected in ABC Ltd",
      risk: "medium",
      platform: "Telegram",
      timestamp: "1 hour ago"
    },
    {
      id: 4,
      type: "Fake App",
      description: "Trading app mimicking legitimate broker interface",
      risk: "critical",
      platform: "Play Store",
      timestamp: "2 hours ago"
    }
  ];

  const verificationStats = [
    { label: "Advisors Verified", value: 12847, trend: "+5.2%" },
    { label: "Apps Analyzed", value: 3421, trend: "+12.1%" },
    { label: "Announcements Checked", value: 1893, trend: "+8.7%" },
    { label: "Social Posts Monitored", value: 89654, trend: "+23.4%" }
  ];

  return (
    <div className="min-h-screen bg-background p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-security bg-clip-text text-transparent">
            Fraud Prevention Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Real-time monitoring and prevention of securities market fraud
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="security" size="lg">
            <Shield className="w-5 h-5" />
            Generate Report
          </Button>
          <Button variant="outline" size="lg">
            <Eye className="w-5 h-5" />
            Monitor Live
          </Button>
        </div>
      </div>

      {/* Alert Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="border-destructive/20 bg-gradient-to-br from-destructive/5 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-destructive">{alertStats.critical}</div>
            <p className="text-xs text-muted-foreground">Requires immediate action</p>
          </CardContent>
        </Card>

        <Card className="border-warning/20 bg-gradient-to-br from-warning/5 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medium Risk</CardTitle>
            <AlertTriangle className="h-4 w-4 text-warning" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{alertStats.medium}</div>
            <p className="text-xs text-muted-foreground">Under investigation</p>
          </CardContent>
        </Card>

        <Card className="border-success/20 bg-gradient-to-br from-success/5 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resolved</CardTitle>
            <CheckCircle className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">{alertStats.resolved}</div>
            <p className="text-xs text-muted-foreground">Successfully handled</p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Detected</CardTitle>
            <Shield className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{alertStats.total}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Alerts */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              Recent Fraud Alerts
            </CardTitle>
            <CardDescription>Latest detected fraudulent activities</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentAlerts.map((alert) => (
              <div 
                key={alert.id} 
                className="flex items-center justify-between p-4 border border-card-border rounded-lg hover:shadow-card transition-all duration-200"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant={alert.risk === "critical" ? "critical" : "warning"}>
                      {alert.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{alert.platform}</span>
                  </div>
                  <p className="text-sm font-medium mb-1">{alert.description}</p>
                  <p className="text-xs text-muted-foreground">{alert.timestamp}</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant={alert.risk === "critical" ? "alert" : "outline"} 
                    size="sm"
                  >
                    {alert.risk === "critical" ? <XCircle className="w-4 h-4" /> : <CheckCircle className="w-4 h-4" />}
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Essential fraud prevention tools</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="security" className="w-full justify-start" size="lg">
              <Users className="w-5 h-5" />
              Verify Advisor
            </Button>
            <Button variant="outline" className="w-full justify-start" size="lg">
              <MessageSquare className="w-5 h-5" />
              Monitor Social Media
            </Button>
            <Button variant="outline" className="w-full justify-start" size="lg">
              <FileText className="w-5 h-5" />
              Check Announcements
            </Button>
            <Button variant="outline" className="w-full justify-start" size="lg">
              <Smartphone className="w-5 h-5" />
              Scan Apps
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Verification Statistics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-success" />
            Verification Statistics
          </CardTitle>
          <CardDescription>Platform performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {verificationStats.map((stat, index) => (
              <div key={index} className="text-center space-y-2">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value.toLocaleString()}</p>
                <div className="flex items-center justify-center gap-1">
                  <TrendingUp className="w-3 h-3 text-success" />
                  <span className="text-xs text-success font-medium">{stat.trend}</span>
                </div>
                <Progress value={75 + index * 5} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};