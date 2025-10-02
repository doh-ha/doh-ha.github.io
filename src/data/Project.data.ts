export interface ProjectItemData {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export const projects: ProjectItemData[] = [
  {
    title: "포트폴리오 웹사이트",
    description: "React와 TypeScript를 사용하여 만든 반응형 포트폴리오 웹사이트입니다. 모던한 디자인과 부드러운 애니메이션을 적용했습니다.",
    tech: ["React", "TypeScript", "Styled Components"],
    link: "#",
  },
  {
    title: "할일 관리 앱",
    description: "사용자 친화적인 인터페이스로 일정을 효율적으로 관리할 수 있는 웹 애플리케이션입니다.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "날씨 정보 앱",
    description: "실시간 날씨 정보를 제공하는 모바일 친화적인 웹 애플리케이션입니다.",
    tech: ["React", "API", "CSS3"],
    link: "#",
  },
];
