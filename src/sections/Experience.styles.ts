import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: 100px 20px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
`;

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 60px;
  letter-spacing: -0.02em;
`;

export const Timeline = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e5e7eb;
    transform: translateX(-50%);
  }
`;

export const ExperienceItem = styled.div<{ isLeft: boolean }>`
  display: flex;
  margin-bottom: 40px;
  position: relative;

  ${(props) =>
    props.isLeft
      ? `
      flex-direction: row;
    `
      : `
      flex-direction: row-reverse;
    `}
`;

export const ExperienceContent = styled.div<{ isLeft: boolean }>`
  flex: 1;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  position: relative;

  ${(props) =>
    props.isLeft
      ? `
      margin-right: 40px;
    `
      : `
      margin-left: 40px;
    `}

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    ${(props) =>
      props.isLeft
        ? `
        right: -16px;
        border-left-color: white;
      `
        : `
        left: -16px;
        border-right-color: white;
      `}
    transform: translateY(-50%);
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ExperienceTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 4px;
`;

export const Company = styled.p`
  color: ${(props) => props.theme.colors.textAccent};
  font-weight: 500;
  margin-bottom: 4px;
  font-size: 0.9rem;
`;

export const Duration = styled.p`
  color: #6b7280;
  font-size: 0.8rem;
  margin-bottom: 12px;
`;

export const Description = styled.p`
  color: #374151;
  line-height: 1.6;
  font-size: 0.9rem;
`;
