import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Dashboard } from "@/components/Dashboard";
import { AdvisorVerification } from "@/components/AdvisorVerification";
import { SocialMediaMonitor } from "@/components/SocialMediaMonitor";
import { AnnouncementAnalyzer } from "@/components/AnnouncementAnalyzer";
import { FakeAppDetector } from "@/components/FakeAppDetector";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "advisor-verification":
        return <AdvisorVerification />;
      case "social-monitor":
        return <SocialMediaMonitor />;
      case "announcement-analyzer":
        return <AnnouncementAnalyzer />;
      case "app-detector":
        return <FakeAppDetector />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 md:ml-80">
        {renderContent()}
      </div>
    </div>
  );
};

export default Index;
