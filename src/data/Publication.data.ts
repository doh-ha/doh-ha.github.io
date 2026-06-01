export interface PublicationLink {
  url: string;
  label: string;
}

export interface PublicationItem {
  title: string;
  authors: string;
  venue: string;
  highlightName?: string;
  link?: PublicationLink;
  awards?: string[];
}

export const publications: PublicationItem[] = [
  {
    title: "Diagnosing Problem-Solving Skills through LLM-Generated Stepwise Sub-Questions at Scale",
    authors: "Yoonsu Kim, Hayeon Doh, Eunhye Kim, Jinho Son, and Juho Kim",
    venue: "Under Review",
    highlightName: "Hayeon Doh",
  },
  {
    title: "Benchmarking Large Language Models for Diagnosing Students Cognitive Skills from Handwritten Math Work",
    authors: "Yoonsu Kim, Hyoungwook Jin, Hayeon Doh, Eunhye Kim, Dongyun Jung, Seungju Kim, Kiyoon Choi, Jinho Son, and Juho Kim",
    venue: "Under Review",
    highlightName: "Hayeon Doh",
    link: { url: "https://arxiv.org/abs/2504.00843", label: "arXiv" },
  },
  {
    title: "PromptFlow: Supporting Novice Prompt Engineering Through Structured and Visual Scaffolding",
    authors: "Hayeon Doh",
    venue: "CHI 2026\nStudent Research Competition",
    highlightName: "Hayeon Doh",
    awards: ["🏅 2nd Place"],
    link: { url: "https://dl.acm.org/doi/full/10.1145/3772363.3799168", label: "ACM DL" },
  },
];
