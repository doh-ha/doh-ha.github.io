export interface ProjectItemData {
  title: string;
  description: string;
  tech: string[];
  link: string;
  imageUrl?: string;
  imageSize?: "small" | "medium" | "large";
  achievements?: string[];
  roles?: string[];
}

export const projects: ProjectItemData[] = [
  {
    title: "Book Nook",
    description: "Large-Print Book Search and Recommendation Service",
    tech: ["Python", "Selenium", "BeautifulSoup"],
    link: "#",
    imageUrl: "/img/BookNookLogo.png",
    imageSize: "medium",
    roles: ["AI Engineer", "Product Manager"],
  },
  {
    title: "Foodie Buddy",
    description: "Generative AI–Powered Chat Application Providing Personalized Korean Cuisine Information for Foreigners with Dietary Restrictions",
    tech: ["React Native", "TypeScript"],
    link: "#",
    imageUrl: "/img/FoodieBuddyLogo.png",
    imageSize: "large",
    achievements: ["🏅 Korea Tourism Data Lab Competition", "🏅 Engineering Capstone Design Contest", "🏅 Graduation Project Contest"],
    roles: ["Frontend Developer", "Product Manager", "UI/UX Designer"],
  },
  {
    title: "Shopping Mall Review Ratings Classification Project",
    description: "Rating Prediction Project Using Various Machine Learning Models Based on E-Commerce Review Texts",
    tech: ["Python", "Pandas", "Numpy", "Scikit-learn"],
    link: "#",
    imageUrl: "/img/ReviewRating.jpg",
    imageSize: "large",
    achievements: ["🏅 Outstanding Project"],
    roles: ["AI Engineer"],
  },
  {
    title: "History Run",
    description: "Interactive Historical Tourism Game",
    tech: ["Unity"],
    link: "#",
    imageUrl: "/img/HistoryRunLogo.png",
    imageSize: "medium",
    achievements: ["🏅 Outstanding Project"],
    roles: ["Unity Developer", "Product Manager"],
  },
  {
    title: "SSK",
    description: "Private Tutoring Management Service",
    tech: ["React Native", "TypeScript"],
    link: "#",
    imageUrl: "/img/SSK.png",
    imageSize: "large",
    roles: ["Frontend Developer", "Product Manager"],
  },
  {
    title: "Steady Day",
    description: "Study Group Management Website",
    tech: ["React", "JavaScript", "TypeScript", "Styled Components"],
    link: "#",
    imageUrl: "/img/SteadyDayLogo.png",
    imageSize: "medium",
    roles: ["Frontend Developer", "Product Manager"],
  },
  {
    title: "Kiosk Ally",
    description: "Kiosk Education Application for the Elderly",
    tech: ["Figma"],
    link: "#",
    imageUrl: "/img/KioskAlly2.png",
    imageSize: "large",
    achievements: ["🏅 A+ Grade"],
    roles: ["Product Manager", "UI/UX Designer"],
  },
];
