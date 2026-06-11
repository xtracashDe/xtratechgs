export type TeamMember = {
  name: string;
  role: string;
  group: "board" | "directors" | "team";
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Chairman",
    role: "Chairman of the Board",
    group: "board",
    bio: "Provides strategic governance and oversight — guiding Xtratech's long-term vision across fintech and digital products.",
    initials: "CH",
  },
  {
    name: "Co-founder & Director",
    role: "Director — Banking & Compliance",
    group: "directors",
    bio: "Leads our core banking and agency banking practice. Deep expertise in CBN regulations, MFB operations, and risk.",
    initials: "D1",
  },
  {
    name: "Co-founder & Director",
    role: "Director — Engineering",
    group: "directors",
    bio: "Owns engineering excellence across our platforms — architecture, security, and the delivery cadence our clients rely on.",
    initials: "D2",
  },
  {
    name: "Co-founder & Director",
    role: "Director — Growth & Partnerships",
    group: "directors",
    bio: "Builds the partnerships, channels, and customer relationships that take our products to market across Africa.",
    initials: "D3",
  },
  {
    name: "Product Lead",
    role: "Head of Product",
    group: "team",
    bio: "Translates customer problems into shipped product — across core banking, agency banking, and digital experiences.",
    initials: "PL",
  },
  {
    name: "Engineering Lead",
    role: "Head of Engineering",
    group: "team",
    bio: "Runs day-to-day engineering — squads, code quality, infrastructure, and reliability across all client deployments.",
    initials: "EL",
  },
  {
    name: "Operations Lead",
    role: "Head of Operations & Support",
    group: "team",
    bio: "Keeps the lights on for every customer — onboarding, support, settlement reconciliation, and SLA management.",
    initials: "OL",
  },
];
