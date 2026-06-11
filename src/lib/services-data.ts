import {
  Cloud,
  Code2,
  Search,
  Boxes,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "saas",
    title: "SaaS Platforms",
    tagline: "Multi-tenant software that scales with your business.",
    description:
      "We design and ship subscription-ready SaaS products — from billing and auth to admin dashboards and analytics — built on modern, secure infrastructure.",
    icon: Cloud,
    benefits: ["Stripe/Paddle billing", "Role-based access", "Tenant isolation", "Analytics-ready"],
  },
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Fast, accessible websites and web apps.",
    description:
      "Marketing sites, portals, e-commerce, and bespoke web apps engineered for performance, SEO, and conversion.",
    icon: Code2,
    benefits: ["Sub-second loads", "Mobile-first", "SEO-ready", "CMS-friendly"],
  },
  {
    slug: "seo",
    title: "SEO & Growth",
    tagline: "Rank higher. Convert more.",
    description:
      "Technical SEO, content strategy, and conversion-rate optimization that turns search traffic into qualified leads.",
    icon: Search,
    benefits: ["Technical audits", "Keyword research", "On-page optimization", "Reporting"],
  },
  {
    slug: "blockchain",
    title: "Blockchain Solutions",
    tagline: "Smart contracts and Web3 integrations.",
    description:
      "Token launches, smart-contract audits, NFT marketplaces, and Web3 integrations engineered for security and compliance.",
    icon: Boxes,
    benefits: ["Smart contracts", "Wallet integration", "On-chain audits", "DeFi tooling"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    tagline: "Native-quality apps for iOS and Android.",
    description:
      "Cross-platform mobile apps with native performance — from MVPs to production-grade fintech and logistics apps.",
    icon: Smartphone,
    benefits: ["iOS & Android", "Offline support", "Push notifications", "App Store launch"],
  },
];
