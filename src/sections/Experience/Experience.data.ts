export interface ExperienceRole {
  title: string;
  description: string;
}

export interface ExperienceItemData {
  organization: string;
  orgDescription?: string;
  duration: string;
  roles: ExperienceRole[];
  logoUrl?: string;
}

export const experiences: ExperienceItemData[] = [
  {
    organization: "KIXLAB @KAIST",
    orgDescription: "KAIST Interaction Lab (Prof. Juho Kim)",
    duration: "Jun 2025 - Present",
    roles: [
      {
        title: "HCI Research Intern",
        description: "Research on LLM-based Diagnosis System of Math Problem Solving Skills",
      },
    ],
  },
  {
    organization: "HCIL @EWHA",
    orgDescription: "Human-Computer Interaction Lab (Prof. Uran Oh)",
    duration: "2022.06 - 2022.12",
    roles: [
      {
        title: "HCI Research Intern",
        description: "Research on Designing AI Prompt Engineering in Educational Contexts",
      },
    ],
  },
  {
    organization: "GDGoC",
    orgDescription: "Google Developers Group on Campus",
    duration: "2021.03 - 2022.05",
    roles: [
      {
        title: "AI Member",
        description: "Participated in AI study sessions and worked on AI projects.",
      },
      {
        title: "DevRel Core Member",
        description:
          "Managed the club’s Notion page, organized Part Exchange Sessions, MT and supported IT events such as Devfest 2024:Responsible AI in Action, co-hosted by GDG Pangyo, GDGoC Yonsei, and GDGoC Ewha.",
      },
    ],
  },
  {
    organization: "EURON",
    orgDescription: "Ewha AI & Data Analysis Club",
    duration: "2021.03 - 2022.05",
    roles: [
      {
        title: "ML Member",
        description: "Participated in ML study sessions by delivering lectures to peers and worked on AI projects.",
      },
      {
        title: "PR Team Executive",
        description: "Managed the club’s Notion page and supported the planning of the Homecoming Day event.",
      },
    ],
  },

  {
    organization: "EFUB",
    orgDescription: "Ewha Web Development Carrer Club",
    duration: "2021.03 - 2022.05",
    roles: [
      {
        title: "Frontend Developer",
        description: "Developed Frontend development skills through seminars and projects.",
      },
    ],
  },
];
