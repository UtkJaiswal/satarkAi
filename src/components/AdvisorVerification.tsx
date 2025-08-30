import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import {
  Search,
  Shield,
  AlertTriangle,
  CheckCircle,
  XCircle,
  User,
  FileText,
  Calendar,
  Building
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AdvisorVerification = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState<any>(null);
  const { toast } = useToast();

  // Dummy data for demonstration
  const dummyAdvisors = [
    {
      id: "IA017523",
      name: "Mohan Kumar",
      registration: "INA000017523",
      firm: "1 FINANCE PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management", "Wealth Management"],
      riskScore: 28,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA017231",
      name: "ALISHA",
      registration: "INA000017231",
      firm: "21G INVESTMENT ADVISERS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 45,
      complaints: 1,
      yearsExperience: 2
    },
    {
      id: "IA000365",
      name: "29K INVESTMENT ADVISERS PRIVATE LTD",
      registration: "INA200000365",
      firm: "29K INVESTMENT ADVISERS PRIVATE LTD",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning", "Retirement Planning"],
      riskScore: 18,
      complaints: 0,
      yearsExperience: 11
    },
    {
      id: "IA000888",
      name: "Rupam Nagvekar",
      registration: "INA000000888",
      firm: "360 ONE INVESTMENT ADVISER AND TRUSTEE SERVICES LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management", "Tax Advisory"],
      riskScore: 22,
      complaints: 0,
      yearsExperience: 11
    },
    {
      id: "IA020794",
      name: "Ketan Sarda",
      registration: "INA000020794",
      firm: "3Q FINANCIAL SERVICES LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 33,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA002536",
      name: "S Venkatraman",
      registration: "INA200002536",
      firm: "6 SIGMA WEALTH ADVISORS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research", "Financial Planning"],
      riskScore: 16,
      complaints: 2,
      yearsExperience: 10
    },
    {
      id: "IA008291",
      name: "Rajesh Rao",
      registration: "INA200008291",
      firm: "90-10 FINANCIAL PLANNERS PVT LTD",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 41,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA016454",
      name: "AARTI MOHAN",
      registration: "INA000016454",
      firm: "AARTI MOHAN (PROPRIETOR : AURION ADVISORS)",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 25,
      complaints: 0,
      yearsExperience: 3
    },
    {
      id: "IA005050",
      name: "Mahesh Parasuraman",
      registration: "INA100005050",
      firm: "AAUM INVESTMENT ADVISERS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 19,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "SC10001",
      name: "Shyamkant Joshi",
      registration: "INAIFSC10001",
      firm: "AAVISHKAAR INVESTMENT ADVISERS IFSC PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 38,
      complaints: 1,
      yearsExperience: 5
    },
    {
      id: "IA015729",
      name: "Shivam Pandey",
      registration: "INA000015729",
      firm: "ABAKKUS ASSET MANAGER PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 29,
      complaints: 0,
      yearsExperience: 4
    },
    {
      id: "IA015285",
      name: "Amit Banerjee",
      registration: "INA100015285",
      firm: "ABANS COMMODITIES INDIA PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research", "Wealth Management"],
      riskScore: 48,
      complaints: 3,
      yearsExperience: 4
    },
    {
      id: "IA006703",
      name: "Abhijit Talukdar",
      registration: "INA000006703",
      firm: "ABHIJIT TALUKDAR",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning", "Retirement Planning"],
      riskScore: 15,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA016029",
      name: "Abhishake Mathur",
      registration: "INA000016029",
      firm: "ABHISHAKE MATHUR",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 31,
      complaints: 0,
      yearsExperience: 4
    },
    {
      id: "IA004047",
      name: "ABHISHEK AGARWAL",
      registration: "INA000004047",
      firm: "ABHISHEK AGARWAL",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Tax Advisory"],
      riskScore: 27,
      complaints: 1,
      yearsExperience: 9
    },
    {
      id: "IA018258",
      name: "Abhishek Goel",
      registration: "INA000018258",
      firm: "ABHISHEK GOEL PROPRIETOR PRIMEDIN INVESTMENT ADVISER",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 40,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA008045",
      name: "Abhishek Kumar",
      registration: "INA100008045",
      firm: "ABHISHEK KUMAR",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 21,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA019442",
      name: "Abhishek Phore",
      registration: "INA000019442",
      firm: "ABHISHEK PHORE - PROPRIETOR CONTROL WEALTH ADVISERS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Portfolio Management"],
      riskScore: 35,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA019594",
      name: "ABRAHAM CHERIAN",
      registration: "INA000019594",
      firm: "ABRAHAM CHERIAN PROPRIETOR 360 WEALTH ADVICE",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 18,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA000910",
      name: "ABUBAKR SIDDIQUE. A.G.",
      registration: "INA200000910",
      firm: "ABUBAKR SIDDIQUE. A.G.",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 24,
      complaints: 1,
      yearsExperience: 11
    },
    {
      id: "IA015774",
      name: "Umang Parekh",
      registration: "INA000015774",
      firm: "ACCELPRU INVESTMENT ADVISORS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management", "Equity Research"],
      riskScore: 43,
      complaints: 2,
      yearsExperience: 4
    },
    {
      id: "IA017718",
      name: "ACME INVESTMENT ADVISORS PRIVATE LIMITED",
      registration: "INA000017718",
      firm: "ACME INVESTMENT ADVISORS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 30,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA003957",
      name: "Dinesh Nanik Vaswani",
      registration: "INA000003957",
      firm: "ACUITAS CAPITAL ADVISORS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research", "Tax Advisory"],
      riskScore: 17,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA005515",
      name: "ADARSH AGRAWAL PROP. REGROW INVESTMENT",
      registration: "INA000005515",
      firm: "ADARSH AGRAWAL PROP. REGROW INVESTMENT",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 49,
      complaints: 1,
      yearsExperience: 9
    },
    {
      id: "IA019789",
      name: "ADARSH NIMBORKAR",
      registration: "INA000019789",
      firm: "ADARSH NIMBORKAR",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Financial Planning"],
      riskScore: 26,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA006651",
      name: "Swapnil Bhaskar",
      registration: "INA000006651",
      firm: "ALPHAFRONT FINSERV PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 34,
      complaints: 0,
      yearsExperience: 4
    },
    {
      id: "IA018470",
      name: "ALPHAGREP ADVISORS PRIVATE LIMITED",
      registration: "INA000018470",
      firm: "ALPHAGREP ADVISORS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 42,
      complaints: 1,
      yearsExperience: 1
    },
    {
      id: "IA009481",
      name: "GAUTAMI MORE",
      registration: "INA000009481",
      firm: "ALPHANITI FINTECH PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management", "Wealth Management"],
      riskScore: 20,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA015747",
      name: "Sagar Lele",
      registration: "INA000015747",
      firm: "ALPHAWARE ADVISORY SERVICES PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory"],
      riskScore: 36,
      complaints: 0,
      yearsExperience: 4
    },
    {
      id: "IA014706",
      name: "Kunal Moktan",
      registration: "INA200014706",
      firm: "ALTINVEST CAPITAL ADVISORS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 15,
      complaints: 0,
      yearsExperience: 5
    },
    {
      id: "IA004871",
      name: "AM INVESTMENT ADVISORS AND ASSOCIATES",
      registration: "INA100004871",
      firm: "AM INVESTMENT ADVISORS AND ASSOCIATES",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management", "Equity Research"],
      riskScore: 47,
      complaints: 2,
      yearsExperience: 9
    },
    {
      id: "IA020730",
      name: "Aman Shah",
      registration: "INA000020730",
      firm: "AMAN RAKESH SHAH",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 32,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA015507",
      name: "Piyush Kabra",
      registration: "INA000015507",
      firm: "AMICA INVESTMENT ADVISERS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Financial Planning"],
      riskScore: 23,
      complaints: 0,
      yearsExperience: 4
    },
    {
      id: "IA020767",
      name: "AMIT A MEHRA",
      registration: "INA000020767",
      firm: "AMIT A MEHRA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 39,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA007745",
      name: "AMIT SACHDEVA",
      registration: "INA100007745",
      firm: "AMIT GURUH SACHDEVA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory"],
      riskScore: 28,
      complaints: 1,
      yearsExperience: 8
    },
    {
      id: "IA000051",
      name: "AMIT KUKREJA",
      registration: "INA100000051",
      firm: "AMIT KUKREJA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 19,
      complaints: 0,
      yearsExperience: 12
    },
    {
      id: "IA007924",
      name: "AMIT MALVIYA. Proprieter MONEYPLANT INVESTMENT ADVISORY",
      registration: "INA000007924",
      firm: "AMIT MALVIYA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Financial Planning"],
      riskScore: 44,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA019646",
      name: "Amit Ghag",
      registration: "INA000019646",
      firm: "AMIT VINAYAK GHAG",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 21,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA010779",
      name: "AKHAND TRIPATHI",
      registration: "INA000010779",
      firm: "AMPLE INVESTMENT ADVISER",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 37,
      complaints: 0,
      yearsExperience: 7
    },
    {
      id: "IA005846",
      name: "ANAND D NANAVATI (PROPRIETOR OF ARYA ADVISORY SERVICE)",
      registration: "INA000005846",
      firm: "ANAND D NANAVATI (PROPRIETOR OF ARYA ADVISORY SERVICE)",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 16,
      complaints: 2,
      yearsExperience: 8
    },
    {
      id: "IA018878",
      name: "Ananya Roy",
      registration: "INA000018878",
      firm: "ANANYA ROY - PROPRIETOR OF CREDIBULL CAPITAL",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 46,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA019804",
      name: "Nipun Doshi",
      registration: "INA000019804",
      firm: "ANGEL ONE INVESTMENT MANAGERS & ADVISORS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research", "Portfolio Management"],
      riskScore: 25,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA008172",
      name: "Bineet Jha",
      registration: "INA000008172",
      firm: "ANGEL ONE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 33,
      complaints: 1,
      yearsExperience: 8
    },
    {
      id: "IA018346",
      name: "Aniket Likhite",
      registration: "INA000018346",
      firm: "ANIKET ARUN LIKHITE",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 20,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA018799",
      name: "ANIMESH PODDAR",
      registration: "INA000018799",
      firm: "ANIMESH PODDAR",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 48,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA014070",
      name: "Anirudh Krishna",
      registration: "INA200014070",
      firm: "ANIRUDH KRISHNA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 27,
      complaints: 0,
      yearsExperience: 5
    },
    {
      id: "IA012568",
      name: "Mukesh Sinha",
      registration: "INA200012568",
      firm: "ANKHONIA ADVISORS PVT. LTD.",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 18,
      complaints: 1,
      yearsExperience: 6
    },
    {
      id: "IA015090",
      name: "Ankit Banga",
      registration: "INA100015090",
      firm: "ANKIT BANGA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 41,
      complaints: 0,
      yearsExperience: 4
    },
    {
      id: "IA007757",
      name: "Ankit Shah",
      registration: "INA000007757",
      firm: "ANKIT SHAH - PROPRIETOR OF WHITE EQUITY",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 34,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA004853",
      name: "ANKUR CHOUDHARY",
      registration: "INA300004853",
      firm: "ANKUR CHOUDHARY",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 23,
      complaints: 2,
      yearsExperience: 9
    },
    {
      id: "IA007492",
      name: "ANKUR JAIN",
      registration: "INA000007492",
      firm: "ANKUR JAIN PROPRIETOR WINWAY RESEARCH",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research", "Tax Advisory"],
      riskScore: 39,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA019318",
      name: "Ankur Maheshwari",
      registration: "INA000019318",
      firm: "ANKUR MAHESHWARI",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 29,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA019813",
      name: "Ankur Shah",
      registration: "INA000019813",
      firm: "ANKUR VIPUL SHAH PROPRIETOR QUASAR CAPITAL INVESTMENT ADVISORS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 19,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA009278",
      name: "ANKUSH SANODIYA Proprietor DELIGHT FINANCIAL SERVICES",
      registration: "INA000009278",
      firm: "ANKUSH SANODIYA PROPRIE TOR OF DELIGHT FINANCIAL SERVICES",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 47,
      complaints: 1,
      yearsExperience: 7
    },
    {
      id: "IA005622",
      name: "ANMOL GUPTA",
      registration: "INA000005622",
      firm: "ANMOL GUPTA PROP. SEVEN PROSPER FINANCIAL PLANNERS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 31,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA018090",
      name: "Anshul Khare",
      registration: "INA000018090",
      firm: "ANSHUL KHARE PROPRIETOR OF INERTIA EQUITIES FOR WEALTH",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 22,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA019035",
      name: "Meet Rachchh",
      registration: "INA000019035",
      firm: "ANUBHUTI ADVISORS LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 36,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA020961",
      name: "Anudeep Yadav",
      registration: "INA000020961",
      firm: "ANUDEEP YADAV",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 45,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA009959",
      name: "ANUGYA SINGH",
      registration: "INA000009959",
      firm: "ANUGYA SINGH",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 17,
      complaints: 2,
      yearsExperience: 7
    },
    {
      id: "IA010439",
      name: "Anup Kalra",
      registration: "INA100010439",
      firm: "ANUP KALRA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 38,
      complaints: 0,
      yearsExperience: 7
    },
    {
      id: "IA020402",
      name: "Anushree Agarwal",
      registration: "INA000020402",
      firm: "ANUSHREE AGARWAL",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 26,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA016126",
      name: "Priyesh Karia",
      registration: "INA000016126",
      firm: "ANUVITT FINTECH PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 20,
      complaints: 1,
      yearsExperience: 4
    },
    {
      id: "IA016719",
      name: "Shlok Srivastav",
      registration: "INA000016719",
      firm: "APPRECIATE INVESTMENT ADVISORY PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 43,
      complaints: 0,
      yearsExperience: 3
    },
    {
      id: "IA017657",
      name: "Vikrant Gupta",
      registration: "INA000017657",
      firm: "APRICUS WEALTH INVESTMENT MANAGERS LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 30,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA019831",
      name: "Dwaitin Dave",
      registration: "INA000019831",
      firm: "ARDEKO ASSET MANAGEMENT PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 24,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA014614",
      name: "DINESH AGARWAL",
      registration: "INA000014614",
      firm: "ARETE SECURITIES LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 49,
      complaints: 1,
      yearsExperience: 5
    },
    {
      id: "IA005166",
      name: "AREVUK ADVISORY SERVICES PVT. LTD.",
      registration: "INA200005166",
      firm: "AREVUK ADVISORY SERVICES PVT. LTD.",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 16,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA020776",
      name: "AJITKUMAR SINGH CHAUHAN",
      registration: "INA000020776",
      firm: "ARIGAMONEY INDIA PVT. LTD.",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 35,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA011609",
      name: "ARIJIT MAZUMDAR",
      registration: "INA300011609",
      firm: "ARIJIT MAZUMDAR",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 28,
      complaints: 0,
      yearsExperience: 6
    },
    {
      id: "IA012723",
      name: "Arijit Sen",
      registration: "INA300012723",
      firm: "ARIJIT SEN",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 19,
      complaints: 1,
      yearsExperience: 6
    },
    {
      id: "IA020493",
      name: "ARJUN K A",
      registration: "INA000020493",
      firm: "ARJUN K A PROPRIETOR SUKRUTHI",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 42,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA009564",
      name: "Arjun L",
      registration: "INA200009564",
      firm: "ARJUN L",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 21,
      complaints: 0,
      yearsExperience: 7
    },
    {
      id: "IA001927",
      name: "HEMANT KUMAR BENIWAL",
      registration: "INA100001927",
      firm: "ARK PRIMARY ADVISORS PVT. LTD",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 37,
      complaints: 0,
      yearsExperience: 11
    },
    {
      id: "IA000175",
      name: "Vivek Pai",
      registration: "INA200000175",
      firm: "AROHA CAPITAL PRIVATE LTD",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 46,
      complaints: 2,
      yearsExperience: 11
    },
    {
      id: "IA014055",
      name: "Arpit Goel",
      registration: "INA100014055",
      firm: "ARPIT GOEL",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 15,
      complaints: 0,
      yearsExperience: 5
    },
    {
      id: "IA012652",
      name: "Arpit Jain",
      registration: "INA000012652",
      firm: "ARPIT JAIN (PROPRIETOR, DUVERA CAPITAL ADVISORS)",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 36,
      complaints: 0,
      yearsExperience: 6
    },
    {
      id: "IA015473",
      name: "Amol Jain",
      registration: "INA000015473",
      firm: "ARPWOOD PARTNERS INVESTMENT ADVISORS LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 29,
      complaints: 0,
      yearsExperience: 4
    },
    {
      id: "IA019451",
      name: "Krishnan Venkatachalam",
      registration: "INA000019451",
      firm: "ARTHAVIDHI INVESTMENT ADVISORS LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 23,
      complaints: 1,
      yearsExperience: 1
    },
    {
      id: "IA020712",
      name: "Himanjal Brahmbhatt",
      registration: "INA000020712",
      firm: "ARTHVRUKSH CAPITAL MANAGEMENT LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 40,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA015279",
      name: "GAURAV ARORA",
      registration: "INA000015279",
      firm: "ARTHYA WEALTH AND INVESTMENTS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 18,
      complaints: 0,
      yearsExperience: 4
    },
    {
      id: "IA013621",
      name: "ARTI ARORA",
      registration: "INA100013621",
      firm: "ARTI ARORA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 32,
      complaints: 0,
      yearsExperience: 6
    },
    {
      id: "IA008604",
      name: "ARUL VALAN LAWRENCE",
      registration: "INA000008604",
      firm: "ARUL VALAN LAWRENCE",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 49,
      complaints: 2,
      yearsExperience: 7
    },
    {
      id: "IA016555",
      name: "ARUN MANTRI",
      registration: "INA200016555",
      firm: "ARUN KUMAR MANTRI",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 17,
      complaints: 0,
      yearsExperience: 3
    },
    {
      id: "IA017499",
      name: "Arun Mathur",
      registration: "INA000017499",
      firm: "ARUN MATHUR PROPRIETOR OF DHANTRIPTI FINANCIAL PLANNERS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 34,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA020590",
      name: "Arun Ramabhadran",
      registration: "INA000020590",
      firm: "ARUN RAMABHADRAN",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 26,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA011015",
      name: "ARVIND TULALWAR",
      registration: "INA000011015",
      firm: "ARVIND BAJRANGRAO TULALWAR",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 21,
      complaints: 1,
      yearsExperience: 7
    },
    {
      id: "IA019725",
      name: "Arvind Khandelwal",
      registration: "INA000019725",
      firm: "ARVIND KHANDELWAL",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 44,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA016922",
      name: "ANUJ MEHTA",
      registration: "INA000016922",
      firm: "ARVO WEALTH ADVISORS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 31,
      complaints: 0,
      yearsExperience: 3
    },
    {
      id: "IA018018",
      name: "Anubhav Srivastava",
      registration: "INA000018018",
      firm: "ARYZEN CAPITAL ADVISORS LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 20,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA007645",
      name: "Subhasis Majumder",
      registration: "INA200007645",
      firm: "ASCENT CAPITAL ADVISORS INDIA PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 48,
      complaints: 3,
      yearsExperience: 8
    },
    {
      id: "IA017064",
      name: "PRAKASH LOHANA",
      registration: "INA000017064",
      firm: "ASCENT FINANCIAL SOLUTIONS PVT LTD",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 16,
      complaints: 0,
      yearsExperience: 3
    },
    {
      id: "IA012279",
      name: "Aseem Gupta",
      registration: "INA100012279",
      firm: "ASEEM SEN GUPTA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 39,
      complaints: 0,
      yearsExperience: 6
    },
    {
      id: "IA010323",
      name: "Ashim Sharma",
      registration: "INA100010323",
      firm: "ASHIM SHARMA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 27,
      complaints: 0,
      yearsExperience: 7
    },
    {
      id: "IA020943",
      name: "ASHISH CHAUDHARY",
      registration: "INA000020943",
      firm: "ASHISH CHAUDHARY",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 22,
      complaints: 1,
      yearsExperience: 0
    },
    {
      id: "IA017763",
      name: "Ashish Khetan",
      registration: "INA000017763",
      firm: "ASHISH KHETAN- PROPRIETOR OF MEERAJ ADVISORS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 43,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA001974",
      name: "ASHIWANI KUMAR SINGH",
      registration: "INA300001974",
      firm: "ASHIWANI KUMAR SINGH",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 30,
      complaints: 0,
      yearsExperience: 11
    },
    {
      id: "IA006846",
      name: "Anila Goyal",
      registration: "INA000006846",
      firm: "ASHMORE INVESTMENT MANAGEMENT INDIA LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 25,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA020068",
      name: "SANDEEP VERMA",
      registration: "INA000020068",
      firm: "ASHUTOSH FINANCIAL SERVICES PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 47,
      complaints: 2,
      yearsExperience: 0
    },
    {
      id: "IA019974",
      name: "Ashutosh Gupta",
      registration: "INA000019974",
      firm: "ASHUTOSH KUMAR GUPTA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 15,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA019150",
      name: "Ashwin Ramakrishnan",
      registration: "INA000019150",
      firm: "ASHWIN RAMAKRISHNAN",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 36,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA020536",
      name: "GAURIK SHAH",
      registration: "INA000020536",
      firm: "ASK LONG-SHORT FUND MANAGERS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 28,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA000532",
      name: "Nipun Doshi",
      registration: "INA000000532",
      firm: "ASK WEALTH ADVISORS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 18,
      complaints: 1,
      yearsExperience: 2
    },
    {
      id: "IA015671",
      name: "SIVAKUMAR PULLOT",
      registration: "INA200015671",
      firm: "ASSETZ PREMIER WEALTH ADVISORY PVT LTD",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 41,
      complaints: 0,
      yearsExperience: 4
    },
    {
      id: "IA000276",
      name: "Arun Bhal",
      registration: "INA000000276",
      firm: "ASTEYA INVESTMENT MANAGERS LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 33,
      complaints: 0,
      yearsExperience: 11
    },
    {
      id: "IA010557",
      name: "Nilesh Borana",
      registration: "INA000010557",
      firm: "ATHENA INVESTMENT ADVISERS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 22,
      complaints: 0,
      yearsExperience: 7
    },
    {
      id: "IA016977",
      name: "Atul Gupta",
      registration: "INA000016977",
      firm: "ATUL GUPTA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 39,
      complaints: 0,
      yearsExperience: 3
    },
    {
      id: "IA004245",
      name: "ATUL MISHRA",
      registration: "INA000004245",
      firm: "ATUL MISHRA (PROPRIETOR - AMIGOS FINSERV)",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 26,
      complaints: 1,
      yearsExperience: 9
    },
    {
      id: "IA015881",
      name: "Subhabrata Mitra",
      registration: "INA300015881",
      firm: "AUGMENTA RESEARCH PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 45,
      complaints: 0,
      yearsExperience: 4
    },
    {
      id: "IA018434",
      name: "Nikhil Kabra",
      registration: "INA000018434",
      firm: "AUROSTARINVESTMENT ADVISORY PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 19,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA018188",
      name: "Sonia Jain",
      registration: "INA000018188",
      firm: "AURUM SOFTWARES AND SOLUTIONS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 30,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA015686",
      name: "Hitesh Jain",
      registration: "INA000015686",
      firm: "AVAGRAH CAPITAL ADVISORS LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 24,
      complaints: 2,
      yearsExperience: 4
    },
    {
      id: "IA004814",
      name: "AVEEK MITRA",
      registration: "INA100004814",
      firm: "AVEEK MITRA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 47,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA006527",
      name: "Kartik Kini",
      registration: "INA000006527",
      firm: "AVENDUS WEALTH MANAGEMENT PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 16,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA011125",
      name: "AVINASH LUTHRIA",
      registration: "INA200011125",
      firm: "AVINASH KHATOO LUTHRIA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 35,
      complaints: 0,
      yearsExperience: 7
    },
    {
      id: "IA000615",
      name: "ANAND SHAHA",
      registration: "INA000000615",
      firm: "AXIS SECURITIES LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 28,
      complaints: 1,
      yearsExperience: 11
    },
    {
      id: "IA004385",
      name: "AYUSH BHARGAVA PROPRIETOR BHARGAVA FINANCIAL PLANNERS",
      registration: "INA000004385",
      firm: "AYUSH BHARGAVA PROPRIETOR BHARGAVA FINANCIAL PLANNERS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 42,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA020475",
      name: "Ayush Sharma",
      registration: "INA000020475",
      firm: "AYUSH SHARMA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 20,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA019707",
      name: "AYUSHI CHAUKSEY",
      registration: "INA000019707",
      firm: "AYUSHI CHAUKSEY ADVISER PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 37,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA013651",
      name: "AYUSMAN DAS",
      registration: "INA000013651",
      firm: "AYUSMAN DAS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 15,
      complaints: 2,
      yearsExperience: 6
    },
    {
      id: "IA005390",
      name: "BADAL BHARTI PROPRIETOR RESEARCH PANEL INVESTMENT ADVISERS",
      registration: "INA000005390",
      firm: "BADAL BHARTI PROPRIETOR RESEARCH PANEL INVESTMENT ADVISERS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 46,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA001398",
      name: "Reena Kumari",
      registration: "INA100001398",
      firm: "BAJAJ CAPITAL INVESTMENT ADVISERS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 31,
      complaints: 0,
      yearsExperience: 11
    },
    {
      id: "IA016083",
      name: "BAJAJ FINSERV DIRECT LIMITED",
      registration: "INA000016083",
      firm: "BAJAJ FINSERV DIRECT LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 49,
      complaints: 1,
      yearsExperience: 4
    },
    {
      id: "IA019008",
      name: "Banafshe Pashootanizadeh",
      registration: "INA000019008",
      firm: "BANAFSHE PASHOOTANIZADEH",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 18,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA006898",
      name: "Neeraj Gugnani",
      registration: "INA100006898",
      firm: "BANAYANTREE SERVICES LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 36,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA000391",
      name: "Arunima Basu",
      registration: "INA000000391",
      firm: "BARCLAYS SECURITIES (INDIA) PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 25,
      complaints: 0,
      yearsExperience: 11
    },
    {
      id: "IA018498",
      name: "Basant Maheshwari",
      registration: "INA000018498",
      firm: "BASANT MAHESHWARI WEALTH ADVISERS LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 20,
      complaints: 1,
      yearsExperience: 1
    },
    {
      id: "IA019053",
      name: "Basavaraj Tonagatti",
      registration: "INA000019053",
      firm: "BASUNIVESH FEE ONLY FINANCIAL PLANNERS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 43,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA005141",
      name: "BESTPALS RESEARCH & ADVISORY LLP",
      registration: "INA200005141",
      firm: "BESTPALS RESEARCH & ADVISORY LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 30,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA017392",
      name: "Manoj Varyani",
      registration: "INA000017392",
      firm: "BESTWAY SMART FINANCIAL PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 24,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA005109",
      name: "BHARAT JAIN",
      registration: "INA200005109",
      firm: "BHARAT JAIN (PROPRIETOR OF MANTHAN RESEARCH AND ADVISORY)",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 47,
      complaints: 2,
      yearsExperience: 9
    },
    {
      id: "IA018568",
      name: "Nehul Malhotra",
      registration: "INA000018568",
      firm: "BHARATAGE INNOVATIONS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 15,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA012316",
      name: "Bhargav Bujarbaruah",
      registration: "INA300012316",
      firm: "BHARGAV BUJARBARUAH",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 38,
      complaints: 0,
      yearsExperience: 6
    },
    {
      id: "IA004657",
      name: "Anita Bhargava",
      registration: "INA100004657",
      firm: "BHAROSA TECHNOSERVE PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 28,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA005564",
      name: "Anil Bhambhani",
      registration: "INA000005564",
      firm: "BIA INVESTMENT ADVISORS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 18,
      complaints: 1,
      yearsExperience: 8
    },
    {
      id: "IA019123",
      name: "SUMAN KUMAR",
      registration: "INA000019123",
      firm: "BIGMANS CONSULTANT & MARKETING PVT. LTD.",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 41,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA008614",
      name: "Biswarup Sinha Ray",
      registration: "INA300008614",
      firm: "BISWARUP SINHA RAY",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 33,
      complaints: 0,
      yearsExperience: 7
    },
    {
      id: "IA003833",
      name: "BLUE OCEAN FINANCIAL SERVICES PRIVATE LIMITED",
      registration: "INA000003833",
      firm: "BLUE OCEAN FINANCIAL SERVICES PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 22,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA020192",
      name: "Akshay Bommena",
      registration: "INA000020192",
      firm: "BLUESTRIDES FINANCIAL SERVICES PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 39,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA018461",
      name: "Bodeddula Reddy",
      registration: "INA000018461",
      firm: "BODEDDULA SIVA PRASAD REDDY",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 26,
      complaints: 1,
      yearsExperience: 1
    },
    {
      id: "IA018300",
      name: "BHAVANAND KUMAR MISHRA",
      registration: "INA000018300",
      firm: "BON4EQUI GLOBAL CONSULTING PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 45,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA014648",
      name: "Sonaal Kohli",
      registration: "INA100014648",
      firm: "BOWHEAD INVESTMENT ADVISORS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 19,
      complaints: 0,
      yearsExperience: 5
    },
    {
      id: "IA019433",
      name: "BR FIDUCIARY INVESTMENT ADVISORY LLP",
      registration: "INA000019433",
      firm: "BR FIDUCIARY INVESTMENT ADVISORY LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 30,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA016363",
      name: "RAJEEV RANJAN",
      registration: "INA100016363",
      firm: "BRIGHTER MIND EQUITY ADVISOR PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 24,
      complaints: 2,
      yearsExperience: 3
    },
    {
      id: "IA004492",
      name: "BRIJESH C PARIKH (PROPRIETOR OF PLANETWEALTH FINANCIAL ADVISORS)",
      registration: "INA000004492",
      firm: "BRIJESH C PARIKH (PROPRIETOR OF PLANETWEALTH FINANCIAL ADVISORS)",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 47,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA008592",
      name: "Brijesh Vappala",
      registration: "INA200008592",
      firm: "BRIJESH VAPPALA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 16,
      complaints: 0,
      yearsExperience: 7
    },
    {
      id: "IA012674",
      name: "Neha Sharma",
      registration: "INA200012674",
      firm: "BUGLEROCK BHUVI INVESTMENT ADVISERS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 35,
      complaints: 0,
      yearsExperience: 6
    },
    {
      id: "IA019257",
      name: "Maya Devi Agrawal",
      registration: "INA000019257",
      firm: "BULLSSTRATEGY ADVISORY PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 28,
      complaints: 1,
      yearsExperience: 1
    },
    {
      id: "IA016995",
      name: "Mayuri Jangid",
      registration: "INA000016995",
      firm: "BUOYANT CAPITAL PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 42,
      complaints: 0,
      yearsExperience: 3
    },
    {
      id: "IA019479",
      name: "CANDOUR ASSET MANAGEMENT LLP",
      registration: "INA000019479",
      firm: "CANDOUR ASSET MANAGEMENT LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 20,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA015151",
      name: "Amit Jeffrey",
      registration: "INA100015151",
      firm: "CANDURA INVESTMENT ADVISORS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 37,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA017365",
      name: "CAPITAL LEAGUE LLP",
      registration: "INA000017365",
      firm: "CAPITAL LEAGUE LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 15,
      complaints: 2,
      yearsExperience: 2
    },
    {
      id: "IA017444",
      name: "Vishal Shah",
      registration: "INA000017444",
      firm: "CARE PORTFOLIO MANAGERS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 46,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA017162",
      name: "Utkarsh Choudhary",
      registration: "INA300017162",
      firm: "CASHVISORY PVT. LTD.",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 31,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA000753",
      name: "VISWANATHA PRASAD",
      registration: "INA200000753",
      firm: "CASPIAN IMPACT INVESTMENT ADVISER PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 49,
      complaints: 1,
      yearsExperience: 11
    },
    {
      id: "IA020253",
      name: "Vaibhavi Rao",
      registration: "INA000020253",
      firm: "CASTLEGATE CAPITAL SERVICES PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 18,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA005457",
      name: "Nilesh Bajaj",
      registration: "INA000005457",
      firm: "CEDRUS CONSULTANTS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 36,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA018559",
      name: "Arpita Hegde",
      registration: "INA000018559",
      firm: "CENTRICITY ADVISORY SERVICES PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 25,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA001761",
      name: "Akshay Vora",
      registration: "INA000001761",
      firm: "CENTRUM INVESTMENT ADVISORS LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 20,
      complaints: 1,
      yearsExperience: 11
    },
    {
      id: "IA015385",
      name: "Munish Randev",
      registration: "INA000015385",
      firm: "CERVIN FAMILY OFFICE & ADVISORS PVT. LTD.",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 43,
      complaints: 0,
      yearsExperience: 4
    },
    {
      id: "IA020633",
      name: "Rajeshkumar Guruswamy",
      registration: "INA000020633",
      firm: "CETTLX SERVICES PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 30,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA004533",
      name: "CHADHA INVESTMENT CONSULTANT PRIVATE LIMITED",
      registration: "INA100004533",
      firm: "CHADHA INVESTMENT CONSULTANT PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 24,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA019266",
      name: "Challa Teja",
      registration: "INA000019266",
      firm: "CHALLA SURYA TEJA - PROPRIETOR OF EMPIRAI RESEARCH AND ADVISORY",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 47,
      complaints: 2,
      yearsExperience: 1
    },
    {
      id: "IA008251",
      name: "Chandan Singh Padiyar",
      registration: "INA000008251",
      firm: "CHANDAN SINGH PADIYAR",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 15,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA017851",
      name: "Chander P Chellani",
      registration: "INA000017851",
      firm: "CHANDER P CHELLANI - PROPRIETOR IDA WEALTH",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 38,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA011784",
      name: "Chandrakant Kanase",
      registration: "INA100011784",
      firm: "CHANDRAKANT KANASE",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 28,
      complaints: 0,
      yearsExperience: 6
    },
    {
      id: "IA016843",
      name: "Pinkal Vishvesh",
      registration: "INA000016843",
      firm: "CHASE ALPHA PARTNERS LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 18,
      complaints: 1,
      yearsExperience: 3
    },
    {
      id: "IA019354",
      name: "Dasharathbhai Chavod",
      registration: "INA000019354",
      firm: "CHAVOD DASHARATHBHAI NARSANGABHAI",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 41,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA006594",
      name: "CHEKURI SUBBARAJU",
      registration: "INA200006594",
      firm: "CHEKURI SUBBARAJU",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 33,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA014724",
      name: "CHETHAN DHRUVA",
      registration: "INA200014724",
      firm: "CHETHAN DHRUVA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 22,
      complaints: 0,
      yearsExperience: 5
    },
    {
      id: "IA006837",
      name: "Chinmay Kelkar",
      registration: "INA000006837",
      firm: "CHINMAY HARSHAD KELKAR",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 39,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA018221",
      name: "Chintan Madhvani",
      registration: "INA000018221",
      firm: "CHINTAN SHANTILAL MADHVANI PROPRIETOR BE WEALTH WISE",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 26,
      complaints: 1,
      yearsExperience: 2
    },
    {
      id: "IA004294",
      name: "CHIRAG GOKANI",
      registration: "INA000004294",
      firm: "CHIRAG GOKANI (PROPRIETOR OF WEALTHWIZ ADVISORS)",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 45,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA008084",
      name: "CHIRAG GANDHI",
      registration: "INA000008084",
      firm: "CHIRAG V GANDHI",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 19,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA001348",
      name: "CHIRATAE VENTURES INDIA ADVISORS PRIVATE LIMITED",
      registration: "INA200001348",
      firm: "CHIRATAE VENTURES INDIA ADVISORS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 30,
      complaints: 0,
      yearsExperience: 11
    },
    {
      id: "IA003973",
      name: "CHITRANJAN SINGH CHOUHAN",
      registration: "INA000003973",
      firm: "CHITRANJAN SINGH CHOUHAN PROPRIETOR WEALTH RESEARCH FINANCIAL SERVICES",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 24,
      complaints: 2,
      yearsExperience: 9
    },
    {
      id: "IA016782",
      name: "MUKUL AGARWAL",
      registration: "INA000016782",
      firm: "CIRCLE WEALTH ADVISORS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 47,
      complaints: 0,
      yearsExperience: 3
    },
    {
      id: "IA016348",
      name: "Jeni Chaudhary",
      registration: "INA000016348",
      firm: "CITRUS ADVISORS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 16,
      complaints: 0,
      yearsExperience: 3
    },
    {
      id: "IA020846",
      name: "Prakashkumar Mavani",
      registration: "INA000020846",
      firm: "CKREDENCE WEALTH MANAGEMENT PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 35,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA020439",
      name: "Adithya V V",
      registration: "INA000020439",
      firm: "CLEARSHARP TECHNOLOGY PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 28,
      complaints: 1,
      yearsExperience: 0
    },
    {
      id: "IA014879",
      name: "Sachin KAPOOR",
      registration: "INA100014879",
      firm: "CLOVEK WEALTH MANAGEMENT PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 42,
      complaints: 0,
      yearsExperience: 5
    },
    {
      id: "IA018382",
      name: "Rohit Prakash",
      registration: "INA000018382",
      firm: "COINWISE RESEARCH PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 20,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA017198",
      name: "Surbhi Sarda",
      registration: "INA000017198",
      firm: "COMPOUND EVERYDAY CAPITAL MANAGEMENT LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 37,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA011219",
      name: "Rakesh Pujara",
      registration: "INA000011219",
      firm: "COMPOUNDING WEALTH ADVISORS LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 15,
      complaints: 2,
      yearsExperience: 7
    },
    {
      id: "IA018337",
      name: "Hemantkumar Desai",
      registration: "INA000018337",
      firm: "CONCEPT INVESTWELL PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 46,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA018249",
      name: "Sourabh Kumar",
      registration: "INA000018249",
      firm: "CORPCARE INVESTMENT ADVISORY PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 31,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA014061",
      name: "CREAEGIS INVESTMENT ADVISERS PRIVATE LIMITED",
      registration: "INA200014061",
      firm: "CREAEGIS INVESTMENT ADVISERS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 49,
      complaints: 1,
      yearsExperience: 5
    },
    {
      id: "IA017480",
      name: "Pratibha Jain",
      registration: "INA000017480",
      firm: "CREDCAP CONSULTANTS LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 18,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA019859",
      name: "Harshal Gosarani",
      registration: "INA000019859",
      firm: "CREDENT ASSET MANAGEMENT SERVICES PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 36,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA019372",
      name: "Pravin Kurundwad",
      registration: "INA000019372",
      firm: "CREDIT SUISSE SECURITIES INDIA PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 25,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA020907",
      name: "Zuhaib Khan",
      registration: "INA000020907",
      firm: "CREST CAPITAL MANAGEMENT PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 20,
      complaints: 1,
      yearsExperience: 0
    },
    {
      id: "IA020624",
      name: "Nilesh Borana",
      registration: "INA000020624",
      firm: "CUBERA ASSET ADVISORS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 43,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA020004",
      name: "HARDIK THAKKAR",
      registration: "INA000020004",
      firm: "CUSP MONEY ADVISORS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 30,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA008267",
      name: "Jayanta Kumar Basu",
      registration: "INA100008267",
      firm: "CX ADVISORS LLP",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 24,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA008006",
      name: "MRUNMAY DAS",
      registration: "INA200008006",
      firm: "D C INVESTMENT ADVISORS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 47,
      complaints: 2,
      yearsExperience: 8
    },
    {
      id: "IA012874",
      name: "Siva Thiravidamony",
      registration: "INA000012874",
      firm: "DALTON INVESTMENT ADVISORY SERVICES PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 15,
      complaints: 0,
      yearsExperience: 6
    },
    {
      id: "IA016701",
      name: "Aditi Nundy",
      registration: "INA300016701",
      firm: "DAYCO SECURITIES PVT LTD",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 38,
      complaints: 0,
      yearsExperience: 3
    },
    {
      id: "IA020262",
      name: "Deep Dhanecha",
      registration: "INA000020262",
      firm: "DEEP BHAVESH DHANECHA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 28,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA004450",
      name: "DEEP KANDPAL PROP. RESEARCH INN INVESTMENT ADVISOR",
      registration: "INA000004450",
      firm: "DEEP KANDPAL PROP. RESEARCH INN INVESTMENT ADVISOR",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 18,
      complaints: 1,
      yearsExperience: 9
    },
    {
      id: "IA017709",
      name: "DEEPAK AGARWAL",
      registration: "INA000017709",
      firm: "DEEPAK KUMAR AGARWAL",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 41,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA005309",
      name: "DEEPAK KUMAR PANDEY PROPRIETOR ABR VENTURE FINANCIAL SERVICES",
      registration: "INA000005309",
      firm: "DEEPAK KUMAR PANDEY PROPRIETOR ABR VENTURE FINANCIAL SERVICES",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 33,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA017347",
      name: "Deepak Motwani",
      registration: "INA000017347",
      firm: "DEEPAK MOTWANI (PROPRIETOR: MARQUEE INVESTMENT MANAGERS)",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 22,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA008862",
      name: "DEEPAK OSTWAL",
      registration: "INA000008862",
      firm: "DEEPAK OSTWAL PROPRIETOR OF CAPITAL WAYS INVESTMENT ADVISER",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 39,
      complaints: 0,
      yearsExperience: 7
    },
    {
      id: "IA003279",
      name: "DEEPAK PARNAMI",
      registration: "INA100003279",
      firm: "DEEPAK PARNAMI",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 26,
      complaints: 1,
      yearsExperience: 10
    },
    {
      id: "IA016384",
      name: "Deepesh JAIN",
      registration: "INA000016384",
      firm: "DEEPESH JAIN",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 45,
      complaints: 0,
      yearsExperience: 3
    },
    {
      id: "IA002719",
      name: "DEEPESH RAGHAW",
      registration: "INA100002719",
      firm: "DEEPESH RAGHAW",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 19,
      complaints: 0,
      yearsExperience: 10
    },
    {
      id: "IA016603",
      name: "Pravin Budhauliya",
      registration: "INA000016603",
      firm: "DEGREE 212 INVESTMENT SERVICES & IMF PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 30,
      complaints: 0,
      yearsExperience: 3
    },
    {
      id: "IA005241",
      name: "DEV ASHISH",
      registration: "INA100005241",
      firm: "DEV ASHISH",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 24,
      complaints: 2,
      yearsExperience: 9
    },
    {
      id: "IA018531",
      name: "DEVAGNAYA R SHAH",
      registration: "INA000018531",
      firm: "DEVAGNAYA R SHAH",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 47,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA004039",
      name: "DEVENDRA KUMAR BAIRATHI",
      registration: "INA000004039",
      firm: "DEVENDRA KUMAR BAIRATHI",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 16,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA018601",
      name: "DEVENDRA KUMAR CHAUDHARY",
      registration: "INA000018601",
      firm: "DEVENDRA KUMAR CHAUDHARY-PROPRIETOR-TRADE MANIACS INVESTMENT ADVISOR",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 35,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA013493",
      name: "DEVENDRA TRIPATHI",
      registration: "INA000013493",
      firm: "DEVENDRA TRIPATHI SOLE PROPRIETOR STOCK BULL INVESTMENT ADVISORY SERVICES",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 28,
      complaints: 1,
      yearsExperience: 6
    },
    {
      id: "IA002693",
      name: "STUART IAN GITSHAM",
      registration: "INA100002693",
      firm: "DEVERE GROUP INVESTMENT ADVISORS PVT LTD",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 42,
      complaints: 0,
      yearsExperience: 10
    },
    {
      id: "IA017888",
      name: "DEVRAJ DHAGAT",
      registration: "INA000017888",
      firm: "DEVRAJ DHAGAT",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 20,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA004864",
      name: "DHARMENDRA PATIDAR PROPRIETOR MARKET ERA",
      registration: "INA000004864",
      firm: "DHARMENDRA PATIDAR PROPRIETOR MARKET ERA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 37,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA019071",
      name: "Dhilip Krishna SS",
      registration: "INA000019071",
      firm: "DHILIP KRISHNA SS PROPRIETOR OF APTA INVESTMENT ADVISORS",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 15,
      complaints: 2,
      yearsExperience: 1
    },
    {
      id: "IA019017",
      name: "Dhruvin Bhanushali",
      registration: "INA000019017",
      firm: "DHRUVIN JAGDISH BHANUSHALI",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 46,
      complaints: 0,
      yearsExperience: 1
    },
    {
      id: "IA005835",
      name: "DIBYAJIT SAHA",
      registration: "INA300005835",
      firm: "DIBYAJIT SAHA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 31,
      complaints: 0,
      yearsExperience: 8
    },
    {
      id: "IA002239",
      name: "Dilshad Billimoria",
      registration: "INA200002239",
      firm: "DILZER CONSULTANTS PRIVATE LTD",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Equity Research"],
      riskScore: 49,
      complaints: 1,
      yearsExperience: 10
    },
    {
      id: "IA003395",
      name: "Dinesh Da Costa",
      registration: "INA000003395",
      firm: "DINESH DA COSTA (PROPRIETOR ZARA INVESTMENT ADVISORY)",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Tax Advisory", "Financial Planning"],
      riskScore: 18,
      complaints: 0,
      yearsExperience: 10
    },
    {
      id: "IA013855",
      name: "DIPEN DOSHI",
      registration: "INA000013855",
      firm: "DIPEN DEEPAK DOSHI (SOLE PROPRIETOR OF FOCUS INVESTING)",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning"],
      riskScore: 36,
      complaints: 0,
      yearsExperience: 6
    },
    {
      id: "IA020101",
      name: "Viplab Dasgupta",
      registration: "INA000020101",
      firm: "DOLAT FINSERV PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Portfolio Management"],
      riskScore: 25,
      complaints: 0,
      yearsExperience: 0
    },
    {
      id: "IA012625",
      name: "SANDESH KEDIA",
      registration: "INA000012625",
      firm: "DR SANDESH RATANLAL KEDIA",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management", "Equity Research"],
      riskScore: 20,
      complaints: 1,
      yearsExperience: 6
    },
    {
      id: "IA003684",
      name: "VISHWAS SHARAD PHADKE",
      registration: "INA000003684",
      firm: "DR. VISHWAS SHARAD PHADKE",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Financial Planning"],
      riskScore: 43,
      complaints: 0,
      yearsExperience: 9
    },
    {
      id: "IA017903",
      name: "Maulik Trivedi",
      registration: "INA000017903",
      firm: "DRCHOKSEY FINSERV PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Retirement Planning", "Portfolio Management"],
      riskScore: 30,
      complaints: 0,
      yearsExperience: 2
    },
    {
      id: "IA018841",
      name: "Ajit Kumar",
      registration: "INA000018841",
      firm: "DREAMPLUG ADVISORY SOLUTIONS PRIVATE LIMITED",
      status: "verified",
      licenseExpiry: "Perpetual",
      specializations: ["Wealth Management"],
      riskScore: 24,
      complaints: 0,
      yearsExperience: 1
    }
  ];

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      toast({
        title: "Search Required",
        description: "Please enter an advisor name or registration number",
        variant: "destructive"
      });
      return;
    }

    setIsSearching(true);

    // Simulate API call
    setTimeout(() => {
      const result = dummyAdvisors.find(advisor =>
        advisor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        advisor.registration.toLowerCase().includes(searchQuery.toLowerCase()) ||
        advisor.firm.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResult(result || null);
      setIsSearching(false);

      if (!result) {
        toast({
          title: "No Results",
          description: "No advisor found matching your search criteria",
          variant: "destructive"
        });
      }
    }, 2000);
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge variant="verified"><CheckCircle className="w-3 h-3" /> Verified</Badge>;
      case "fraudulent":
        return <Badge variant="critical"><XCircle className="w-3 h-3" /> Fraudulent</Badge>;
      default:
        return <Badge variant="warning"><AlertTriangle className="w-3 h-3" /> Unknown</Badge>;
    }
  };

  const getRiskColor = (score: number) => {
    if (score <= 30) return "success";
    if (score <= 60) return "warning";
    return "destructive";
  };

  return (
    <div className="space-y-6">
      {/* Search Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            Advisor Verification System
          </CardTitle>
          <CardDescription>
            Verify investment advisor credentials against SEBI database
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <Label htmlFor="search">Advisor Name or Registration Number</Label>
              <Input
                id="search"
                placeholder="Enter advisor name, registration number, or firm name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="mt-1"
              />
            </div>
            <div className="flex items-end">
              <Button
                variant="security"
                onClick={handleSearch}
                disabled={isSearching}
                size="lg"
              >
                {isSearching ? (
                  <>
                    <Progress value={50} className="w-4 h-4" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    Verify
                  </>
                )}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      {searchResult && (
        <Card className={`border-2 ${searchResult.status === 'verified' ? 'border-success/30' :
            searchResult.status === 'fraudulent' ? 'border-destructive/30' :
              'border-warning/30'
          }`}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-3">
                  <User className="w-5 h-5" />
                  {searchResult.name}
                  {getStatusBadge(searchResult.status)}
                </CardTitle>
                <CardDescription>{searchResult.firm}</CardDescription>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold mb-1">
                  <span className={`text-${getRiskColor(searchResult.riskScore)}`}>
                    {searchResult.riskScore}%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Risk Score</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">

            {/* Registration Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Registration Details
                </Label>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="font-mono text-sm">{searchResult.registration}</p>
                  {searchResult.licenseExpiry && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Expires: {new Date(searchResult.licenseExpiry).toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  Firm Information
                </Label>
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium">{searchResult.firm}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {searchResult.yearsExperience} years experience
                  </p>
                </div>
              </div>
            </div>

            {/* Specializations */}
            <div>
              <Label className="mb-2 block">Specializations</Label>
              <div className="flex flex-wrap gap-2">
                {searchResult.specializations.map((spec: string, index: number) => (
                  <Badge
                    key={index}
                    variant={searchResult.status === 'fraudulent' ? 'critical' : 'secondary'}
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Risk Assessment */}
            <div className="space-y-3">
              <Label>Risk Assessment</Label>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Overall Risk Score</span>
                  <span className={`font-bold text-${getRiskColor(searchResult.riskScore)}`}>
                    {searchResult.riskScore}%
                  </span>
                </div>
                <Progress
                  value={searchResult.riskScore}
                  className={`h-3 [&>div]:bg-${getRiskColor(searchResult.riskScore)}`}
                />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Complaints: </span>
                    <span className={`font-medium ${searchResult.complaints > 5 ? 'text-destructive' : 'text-success'}`}>
                      {searchResult.complaints}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">License Status: </span>
                    <span className={`font-medium ${searchResult.status === 'verified' ? 'text-success' : 'text-destructive'
                      }`}>
                      {searchResult.status === 'verified' ? 'Active' : 'Invalid'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Warning Messages */}
            {searchResult.status === 'fraudulent' && (
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="flex items-center gap-2 text-destructive font-medium mb-2">
                  <AlertTriangle className="w-5 h-5" />
                  FRAUD ALERT
                </div>
                <p className="text-sm">
                  This entity is flagged as fraudulent. Do not invest or share personal information.
                  Report any interaction to SEBI immediately.
                </p>
              </div>
            )}

            {searchResult.status === 'verified' && searchResult.riskScore > 50 && (
              <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-center gap-2 text-warning font-medium mb-2">
                  <AlertTriangle className="w-5 h-5" />
                  CAUTION ADVISED
                </div>
                <p className="text-sm">
                  While verified, this advisor has a higher risk profile. Exercise caution and verify all claims.
                </p>
              </div>
            )}

          </CardContent>
        </Card>
      )}

      {/* Quick Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Verification Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              Always verify advisor registration with SEBI before investing
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              Be wary of advisors promising guaranteed high returns
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              Check license expiry dates and complaint history
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              Report suspicious advisors to protect other investors
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};