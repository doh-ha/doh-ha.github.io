export interface PublicationLink {
  url: string;
  label: string;
}

export interface PublicationItem {
  title: string;
  authors: string;
  venue: string;
  highlightName?: string;
  links?: PublicationLink[];
  awards?: string[];
}

export const publications: PublicationItem[] = [
  {
    title: "STEPwise: Diagnosing Students’ MathProblem-Solving Skills via LLM-Generated Stepwise Sub-Question",
    authors: "Yoonsu Kim, Hayeon Doh, Eunhye Kim, Jinho Son, Juho Kim",
    venue: "AIED 2026\n Interactivity Track",
    highlightName: "Hayeon Doh",
    links: [
      { url: "https://yoonsu0816.github.io/assets/files/AIED_stepwise.pdf", label: "PDF" },
      { url: "https://www.youtube.com/watch?v=cyquqLOIEoo&feature=youtu.be", label: "Demo" },
    ],
  },
  {
    title: "Benchmarking Large Language Models for Diagnosing Students Cognitive Skills from Handwritten Math Work",
    authors: "Yoonsu Kim, Hyoungwook Jin, Hayeon Doh, Eunhye Kim, Dongyun Jung, Seungju Kim, Kiyoon Choi, Jinho Son, Juho Kim",
    venue: "Under Review",
    highlightName: "Hayeon Doh",
    links: [{ url: "https://arxiv.org/abs/2504.00843", label: "PDF" }],
  },
  {
    title: "PromptFlow: Supporting Novice Prompt Engineering Through Structured and Visual Scaffolding",
    authors: "Hayeon Doh",
    venue: "CHI 2026\nStudent Research Competition",
    highlightName: "Hayeon Doh",
    awards: ["🏅 2nd Place"],
    links: [{ url: "https://dl.acm.org/doi/full/10.1145/3772363.3799168", label: "PDF" }],
  },
];
