export interface ExperienceItemData {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export const experiences: ExperienceItemData[] = [
  {
    title: "프론트엔드 개발자",
    company: "테크 스타트업",
    duration: "2023.01 - 현재",
    description: "React와 TypeScript를 활용한 웹 애플리케이션 개발 및 사용자 경험 개선에 기여했습니다.",
  },
  {
    title: "웹 개발 인턴",
    company: "디지털 에이전시",
    duration: "2022.06 - 2022.12",
    description: "다양한 클라이언트 프로젝트에 참여하며 실무 경험을 쌓았습니다.",
  },
  {
    title: "프리랜서 개발자",
    company: "자유계약",
    duration: "2021.03 - 2022.05",
    description: "소규모 프로젝트를 통해 독립적인 개발 능력을 향상시켰습니다.",
  },
];
