import chairmanPhoto from "@/assets/chairman.jpg.asset.json";

export type TeamMember = {
  name: string;
  role: string;
  group: "board" | "directors" | "team";
  bio: string;
  initials: string;
  photo?: string;
};



export const team: TeamMember[] = [
  {
    name: "McHenry Isemede",
    role: "Chairman of the Board",
    group: "board",
    bio: "Provides strategic governance and oversight — guiding Xtratech's long-term vision across fintech and digital products.",
    initials: "MI",
  },
  {
    name: "Adama N. Jeffrey",
    role: "Managing Director & Co-founder",
    group: "directors",
    bio: "Leads our core banking and agency banking practice. Deep expertise in CBN regulations, MFB operations, and risk.",
    initials: "ANJ",
  },
  {
    name: "Osatare C. Imaguezegie",
    role: "Co-founder & Director of Technology",
    group: "directors",
    bio: "Owns engineering excellence across our platforms — architecture, security, and the delivery cadence our clients rely on.",
    initials: "OCI",
  },
  {
    name: "Oparaocha U. Justine",
    role: "Co-founder & Director of Operations",
    group: "directors",
    bio: "Builds the partnerships, channels, and customer relationships that take our products to market across Africa.",
    initials: "OUJ",
  },
];
