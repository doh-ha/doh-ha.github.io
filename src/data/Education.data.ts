export interface EducationItemData {
  school: string;
  degree: string;
  period: string;
  details?: string;
}

export const educations: EducationItemData[] = [
  {
    school: "하연대학교",
    degree: "컴퓨터공학 학사",
    period: "2018.03 - 2022.02",
    details: "알고리즘, 웹 개발, HCI 관련 과목 이수. 학부 연구생 활동.",
  },
  {
    school: "모던코딩 부트캠프",
    degree: "프론트엔드 트랙",
    period: "2022.07 - 2022.12",
    details: "React/TypeScript 기반 프로젝트 중심 학습.",
  },
];
