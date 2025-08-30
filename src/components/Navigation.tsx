import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  Shield, 
  Users, 
  MessageSquare, 
  FileText, 
  Smartphone,
  AlertTriangle,
  Menu,
  X
} from "lucide-react";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: BarChart3,
      description: "Overview & Analytics",
      alerts: 23
    },
    {
      id: "advisor-verification",
      label: "Advisor Verification",
      icon: Users,
      description: "Verify Credentials",
      alerts: 0
    },
    {
      id: "social-monitor",
      label: "Social Media Monitor",
      icon: MessageSquare,
      description: "Track Suspicious Content",
      alerts: 156
    },
    {
      id: "announcement-analyzer",
      label: "Announcement Analyzer",
      icon: FileText,
      description: "Corporate Disclosures",
      alerts: 12
    },
    {
      id: "app-detector",
      label: "Fake App Detector",
      icon: Smartphone,
      description: "Identify Fraudulent Apps",
      alerts: 67
    }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="security"
          size="icon"
          onClick={toggleMobileMenu}
          className="shadow-security"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <div className={`
        fixed left-0 top-0 h-full w-80 bg-card border-r border-card-border z-50 transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:z-auto
      `}>
        <div className="p-6 space-y-6">
          
          {/* Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-security rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-lg">SatarkAI</h2>
                <p className="text-xs text-muted-foreground">Investor Protection Platform</p>
              </div>
            </div>
          </div>

          {/* Alert Summary */}
          <Card className="bg-gradient-to-br from-destructive/5 to-warning/5 border-destructive/20">
            <CardContent className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <span className="font-medium text-sm">Active Alerts</span>
              </div>
              <div className="text-2xl font-bold text-destructive mb-1">258</div>
              <p className="text-xs text-muted-foreground">Requiring immediate attention</p>
            </CardContent>
          </Card>

          {/* Navigation Items */}
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "security" : "ghost"}
                  className={`
                    w-full justify-start h-auto p-4 text-left
                    ${isActive ? 'shadow-security' : 'hover:bg-accent'}
                  `}
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="flex items-start gap-3 w-full">
                    <IconComponent className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium text-sm truncate">{item.label}</span>
                        {item.alerts > 0 && (
                          <Badge 
                            variant={item.alerts > 50 ? "critical" : "warning"}
                            className="text-xs px-2 py-0.5"
                          >
                            {item.alerts}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Button>
              );
            })}
          </nav>

          {/* Footer Information */}
          <div className="pt-6 border-t border-card-border">
            <div className="space-y-3 text-xs text-muted-foreground">
              <div className="flex items-center justify-between">
                <span>Platform Status</span>
                <Badge variant="verified">Online</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Last Update</span>
                <span>2 min ago</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Data Sources</span>
                <span>5 Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};