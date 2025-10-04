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
  tags?: string[];
}

export const experiences: ExperienceItemData[] = [
  {
    organization: "KIXLAB @KAIST",
    orgDescription: "KAIST Interaction Lab (Prof. Juho Kim)",
    duration: "Jun 2025 - Present",
    tags: ["CSE", "EDU"],
    roles: [
      {
        title: "HCI Research Intern",
        description: "Research on LLM-based Diagnosis System of Math Problem Solving Skills",
      },
    ],
  },
  {
    organization: "Teaching Practice",
    orgDescription: "Jinseon Girls' Middle School",
    duration: "May 2025",
    tags: ["CSE", "EDU"],
    roles: [
      {
        title: "Information Science Teacher",
        description: "Research on LLM-based Diagnosis System of Math Problem Solving Skills",
      },
    ],
  },
  {
    organization: "HCIL @EWHA",
    orgDescription: "Human-Computer Interaction Lab \n (Prof. Uran Oh)",
    duration: "Jan 2025 - Present",
    tags: ["CSE"],
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
    duration: "Sep 2024 - Jun 2025",
    tags: ["CSE"],
    roles: [
      {
        title: "AI Member",
        description: "Participated in AI study sessions and worked on AI projects.",
      },
      {
        title: "DevRel Core Member",
        description:
          "Managed the club's Notion page, organized Part Exchange Sessions, MT and supported IT events such as Devfest 2024:Responsible AI in Action, co-hosted by GDG Pangyo, GDGoC Yonsei, and GDGoC Ewha.",
      },
    ],
  },
  {
    organization: "Ewha Womans University Elementary School",
    orgDescription: "",
    duration: "Mar 2024 - Jul 2024",
    tags: ["CSE", "EDU"],
    roles: [
      {
        title: "Teaching Assistant",
        description: "Assisted regular computer classes for 3rd. 4th and 5th grade students using Scratch, Tinkercad, and Makey Makey.",
      },
    ],
  },
  {
    organization: "EURON",
    orgDescription: "Ewha AI & Data Analysis Club",
    duration: "Mar 2024 - Sep 2024",
    tags: ["CSE"],
    roles: [
      {
        title: "ML Member",
        description: "Participated in ML study sessions by delivering lectures to peers and worked on AI projects.",
      },
      {
        title: "PR Team Executive",
        description: "Managed the club's Notion page and supported the planning of the Homecoming Day event.",
      },
    ],
  },

  {
    organization: "EFUB",
    orgDescription: "Ewha Web Development Carrer Club",
    duration: "Mar 2022- Dec 2022",
    tags: ["CSE"],
    roles: [
      {
        title: "Frontend Developer",
        description: "Developed Frontend development skills through seminars and projects.",
      },
    ],
  },
  {
    organization: "Spring Light",
    orgDescription: "Yonsei, Ewha, Sogang University Education Voluntering Club",
    duration: "Mar 2021- Feb 2022",
    tags: ["EDU"],
    roles: [
      {
        title: "Tutoring Volunteer",
        description: "Tutored Mathematics and English to middle school students.",
      },
      {
        title: "PR Team Executive",
        description: "Designed club promotional materials and participated in overall club operations.",
      },
    ],
  },
];
