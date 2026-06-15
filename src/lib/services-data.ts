import {
  Cloud,
  Code2,
  Search,
  Boxes,
  Smartphone,
  Landmark,
  Building2,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  category: "fintech" | "digital";
};

export const services: Service[] = [
  // ───────── Fintech practice ─────────
  {
    slug: "core-banking",
    title: "Core Banking Software (BaaS)",
    tagline: "The operating system for modern banks and MFBs.",
    description:
      "End-to-end core banking platform covering customer onboarding, deposits, loans, ledger, GL and regulatory reporting — built for microfinance banks, fintechs, and digital-only banks.",
    icon: Landmark,
    benefits: ["KYC & onboarding", "Loans & deposits", "GL & reporting", "CBN-ready"],
    category: "fintech",
  },
  {
    slug: "agency-banking",
    title: "Agency Banking",
    tagline: "Reach last-mile customers through an agent network.",
    description:
      "Turnkey agency banking suite: agent app, super-agent dashboard, commissions engine, BVN/NIN verification, cash-in/cash-out, bills, transfers, and full settlement.",
    icon: Building2,
    benefits: ["Agent & super-agent", "BVN/NIN", "Commissions engine", "Settlement"],
    category: "fintech",
  },
  {
    slug: "digital-payments",
    title: "Digital Payments & Wallets",
    tagline: "Wallets, transfers, bill payments, virtual accounts.",
    description:
      "Consumer and merchant wallet products, NIP transfers, virtual account issuance, bills and airtime — integrated with the payment switches and processors you already use.",
    icon: Wallet,
    benefits: ["Wallets", "NIP transfers", "Virtual accounts", "Bills & airtime"],
    category: "fintech",
  },

  // ───────── Digital products practice ─────────
  {
    slug: "saas",
    title: "SaaS Platforms",
    tagline: "Multi-tenant software that scales with your business.",
    description:
      "We design and ship subscription-ready SaaS products — from billing and auth to admin dashboards and analytics — built on modern, secure infrastructure.",
    icon: Cloud,
    benefits: ["Stripe/Paddle billing", "Role-based access", "Tenant isolation", "Analytics-ready"],
    category: "digital",
  },
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Fast, accessible websites and web apps.",
    description:
      "Marketing sites, portals, e-commerce, and bespoke web apps engineered for performance, SEO, and conversion.",
    icon: Code2,
    benefits: ["Sub-second loads", "Mobile-first", "SEO-ready", "CMS-friendly"],
    category: "digital",
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    tagline: "Native-quality apps for iOS and Android.",
    description:
      "Cross-platform mobile apps with native performance — from MVPs to production-grade fintech and logistics apps.",
    icon: Smartphone,
    benefits: ["iOS & Android", "Offline support", "Push notifications", "App Store launch"],
    category: "digital",
  },
  {
    slug: "blockchain",
    title: "Blockchain Solutions",
    tagline: "Smart contracts and Web3 integrations.",
    description:
      "Token launches, smart-contract audits, NFT marketplaces, and Web3 integrations engineered for security and compliance.",
    icon: Boxes,
    benefits: ["Smart contracts", "Wallet integration", "On-chain audits", "DeFi tooling"],
    category: "digital",
  },
  {
    slug: "seo",
    title: "SEO & Growth",
    tagline: "Rank higher. Convert more.",
    description:
      "Technical SEO, content strategy, and conversion-rate optimization that turns search traffic into qualified leads.",
    icon: Search,
    benefits: ["Technical audits", "Keyword research", "On-page optimization", "Reporting"],
    category: "digital",
  },
];

export const fintechServices = services.filter((s) => s.category === "fintech");
export const digitalServices = services.filter((s) => s.category === "digital");
