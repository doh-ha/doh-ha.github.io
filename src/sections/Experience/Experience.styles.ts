import styled from "styled-components";
export { SectionContainer } from "../../styles/section";

export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  width: 100%;
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ExperienceItem = styled.div<{ isLeft: boolean }>`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  column-gap: ${({ theme }) => theme.spacing.lg};
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const OrgColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding-top: 16px;
  padding-left: 24px;
  min-width: 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 6px;
    top: 0;
    bottom: -${({ theme }) => theme.spacing.md};
    width: 1.5px;
    background: ${({ theme }) => theme.colors.gray200};
  }

  &::after {
    content: "";
    position: absolute;
    left: 0px;
    top: 20px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.backgroundWhite};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    padding-top: 0;
    padding-left: 0;

    &::before { display: none; }
    &::after { display: none; }
  }
`;

export const OrgLabel = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
`;

export const OrgDescription = styled.p<{ $visible: boolean }>`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
  white-space: pre-line;
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  display: ${({ $visible }) => ($visible ? "block" : "none")};
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

export const ExperienceContent = styled.button<{ isLeft: boolean; $expanded: boolean }>`
  background: ${({ theme, $expanded }) => ($expanded ? theme.colors.backgroundGray : theme.colors.backgroundWhite)};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  position: relative;
  width: 100%;
  text-align: left;
  cursor: pointer;
  font: inherit;
  color: inherit;
  min-width: 0;
  transition: background ${({ theme }) => theme.transitions.fast}, border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundGray};
    border-color: ${({ theme }) => theme.colors.borderColor};
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 6px;

  @media (max-width: 768px) {
    position: static;
    top: auto;
    right: auto;
    margin-top: 8px;
    margin-bottom: 12px;
    justify-content: flex-start;
  }
`;

export const Tag = styled.span<{ variant: "cs" | "edu" }>`
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({ variant, theme }) => {
    switch (variant) {
      case "cs":
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
  font-size: 0.8rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
`;

export const RoleTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
`;

export const RolePeriod = styled.span`
  display: block;
  margin-top: 2px;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
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


export const Duration = styled.p`
  color: #6b7280;
  font-size: 0.8rem;
  margin: 4px 0 12px;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  white-space: pre-line;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const ExpandHint = styled.p`
  text-align: right;
  margin: -8px 0 ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray400};
`;

export const RoleBlock = styled.div`
  &:not(:first-child) {
    margin-top: 12px;
  }
`;

// Responsive line-break helpers
export const MobileOnlyBr = styled.br`
  display: none;
  @media (max-width: 768px) {
    display: inline;
  }
`;

export const SmallMobileOnlyBr = styled.br`
  display: none;
  @media (max-width: 480px) {
    display: inline;
  }
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.7fr;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  justify-content: flex-end;
  padding-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 4px 14px;
  border-radius: 9999px;
  border: 1px solid ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.gray200)};
  background: ${({ theme, active }) => (active ? theme.colors.primary : "transparent")};
  color: ${({ theme, active }) => (active ? "white" : theme.colors.textSecondary)};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme, active }) => (active ? theme.colors.primary : theme.colors.backgroundLight)};
    color: ${({ theme, active }) => (active ? "white" : theme.colors.primary)};
  }
`;
