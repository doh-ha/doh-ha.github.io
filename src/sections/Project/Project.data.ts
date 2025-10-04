export interface ProjectItemData {
  title: string;
  description: string;
  tech: string[];
  link: string;
  imageUrl?: string;
  imageSize?: "small" | "medium" | "large";
  achievements?: string[];
}

export const projects: ProjectItemData[] = [
  {
    title: "Book Nook",
    description: "React와 TypeScript를 사용하여 만든 반응형 포트폴리오 웹사이트입니다. 모던한 디자인과 부드러운 애니메이션을 적용했습니다.",
    tech: ["Python", "Selenium", "BeautifulSoup"],
    link: "#",
    imageUrl: "/img/BookNookLogo.png",
    imageSize: "medium",
  },
  {
    title: "Foodie Buddy",
    description: "음식 추천 및 리뷰 플랫폼으로, 사용자의 취향에 맞는 맛집을 추천하고 리뷰를 공유할 수 있는 웹 애플리케이션입니다.",
    tech: ["React Native", "TypeScript"],
    link: "#",
    imageUrl: "/img/FoodieBuddyLogo.png",
    imageSize: "large",
    achievements: ["🏅 Korea Tourism Data Lab Competition", "🏅 Engineering Capstone Design Contest", "🏅 Graduation Project Contest"],
  },
  {
    title: "Shopping Mall Review Ratings Classification Project",
    description: "음식 추천 및 리뷰 플랫폼으로, 사용자의 취향에 맞는 맛집을 추천하고 리뷰를 공유할 수 있는 웹 애플리케이션입니다.",
    tech: ["Python", "Pandas", "Numpy", "Scikit-learn"],
    link: "#",
    imageUrl: "/img/ReviewRating.jpg",
    imageSize: "large",
    achievements: ["🏅 Outstanding Project"],
  },
  {
    title: "History Run",
    description: "실시간 날씨 정보를 제공하는 모바일 친화적인 웹 애플리케이션입니다.",
    tech: ["Unity"],
    link: "#",
    imageUrl: "/img/HistoryRunLogo.png",
    imageSize: "medium",
    achievements: ["🏅 Outstanding Project"],
  },
  {
    title: "SSK",
    description: "Private Tutoring Management Service",
    tech: ["React Native", "TypeScript"],
    link: "#",
    imageUrl: "/img/SSK.png",
    imageSize: "large",
  },
  {
    title: "Steady Day",
    description: "Private Tutoring Management Service",
    tech: ["React", "JavaScript", "TypeScript", "Styled Components"],
    link: "#",
    imageUrl: "/img/SteadyDayLogo.png",
    imageSize: "medium",
  },
  {
    title: "Kiosk Ally",
    description: "Private Tutoring Management Service",
    tech: ["Figma"],
    link: "#",
    imageUrl: "/img/KioskAlly2.png",
    imageSize: "large",
    achievements: ["🏅 A+ Grade"],
  },
];
