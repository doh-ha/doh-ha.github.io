import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: 100px 20px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fafafa;
`;

export const Timeline = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 24px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: #e5e7eb;
    transform: none;
  }
`;

export const ExperienceItem = styled.div<{ isLeft: boolean }>`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr; /* 4:6 ratio */
  column-gap: 24px;
  margin-bottom: 40px;
  position: relative;
  padding-left: 24px; /* space for timeline line */
`;

export const OrgColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  padding-top: 20px; /* align with first line of card text */
`;

export const OrgLabel = styled.h3`
  font-size: 1.125rem; /* smaller */
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  align-self: start; /* align with first line of card */
  line-height: 1.3;
  padding-left: 20px; /* keep text clear from timeline dot */
`;

export const OrgDescription = styled.p`
  font-size: 0.9rem;
  color: #4b5563; /* neutral caption */
  margin: 2px 0 0;
  padding-left: 20px; /* align with label start */
  white-space: pre-line;
`;

export const OrgLogo = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  margin-left: 20px; /* align with OrgLabel text start */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ExperienceContent = styled.div<{ isLeft: boolean }>`
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  position: relative;
`;

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 6px;
`;

export const Tag = styled.span<{ variant: "cse" | "edu" }>`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({ variant, theme }) => {
    switch (variant) {
      case "cse":
        return `
          background: ${theme.colors.primary};
          color: white;
        `;
      case "edu":
        return `
          background: ${theme.colors.supportGreen};
          color: white;
        `;
      default:
        return `
          background: ${theme.colors.gray200};
          color: ${theme.colors.textSecondary};
        `;
    }
  }}
`;

export const CardHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 12px;
  margin-bottom: 8px;
`;

export const Organization = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`;

export const RoleTitle = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin: 2px 0 0;
  font-size: 0.95rem;
`;

export const LogoSlot = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TimelineDot = styled.div`
  position: absolute;
  left: 24px;
  top: 34px; /* align with first line of card text */
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Duration = styled.p`
  color: #6b7280;
  font-size: 0.8rem;
  margin: 4px 0 12px;
`;

export const Description = styled.p`
  color: #374151;
  line-height: 1.6;
  font-size: 0.9rem;
  white-space: pre-line;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.7fr;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
