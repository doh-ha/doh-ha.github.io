export interface PublicationItem {
  title: string;
  authors: string;
  status: string;
  highlightName?: string;
  link?: string;
}

export const publications: PublicationItem[] = [
  {
    title: "Diagnosing Problem-Solving Skills through LLM-Generated Stepwise Sub-Questions at Scale",
    authors: "Yoonsu Kim, Hayeon Doh, Eunhye Kim, Jinho Son, and Juho Kim",
    status: "Under Review",
    highlightName: "Hayeon Doh",
  },
  {
    title: "Benchmarking Large Language Models for Diagnosing Students Cognitive Skills from Handwritten Math Work",
    authors: "Yoonsu Kim, Hyoungwook Jin, Hayeon Doh, Eunhye Kim, Dongyun Jung, Seungju Kim, Kiyoon Choi, Jinho Son, and Juho Kim",
    status: "Under Review",
    highlightName: "Hayeon Doh",
    // TODO: 실제 arXiv ID로 교체하세요.
    link: "https://arxiv.org/abs/2504.00843",
  },
  {
    title: "PromptFlow: Supporting Novice Prompt Engineering Through Structured and Visual Scaffolding",
    authors: "Hayeon Doh",
    status: "CHI 2026 Student Research Competition",
    highlightName: "Hayeon Doh",
  },
];
