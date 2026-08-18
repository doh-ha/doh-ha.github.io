import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  width: 100%;
`;

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.875rem; /* ~30px */
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  margin-bottom: 28px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Block = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 0.7fr;
  column-gap: ${({ theme }) => theme.spacing.lg};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LeftColumn = styled(Column)`
  padding-top: 16px;
  min-width: 0;
`;

export const RightColumn = styled(Column)`
  padding-left: 0;
  min-width: 0;
  gap: 0;
`;

export const School = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  margin: 0;
`;

export const Degree = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const DegreeGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const HighlightSubTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  overflow-wrap: anywhere;
`;

export const ExpandHint = styled.p`
  text-align: right;
  margin: -8px 0 ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: ${({ theme }) => theme.colors.gray400};
`;

export const EducationCard = styled.div<{ $expanded: boolean }>`
  background: ${({ theme, $expanded }) => ($expanded ? theme.colors.backgroundGray : theme.colors.backgroundWhite)};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray200};
  cursor: pointer;
  transition: background ${({ theme }) => theme.transitions.fast}, border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.backgroundGray};
    border-color: ${({ theme }) => theme.colors.borderColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const DegreeItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Meta = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-top: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const Period = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  margin: 0;
`;

export const Location = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
  margin: 0;
`;

export const Details = styled.ul`
  margin: ${({ theme }) => theme.spacing.xs} 0 0;
  padding-left: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};

  li {
    margin: 2px 0;
  }
`;

export const InlineLink = styled.a`
  color: ${({ theme }) => theme.colors.textPrimary};
  text-decoration: underline;
  text-underline-offset: 3px;
  text-decoration-color: ${({ theme }) => theme.colors.borderColor};
  transition:
    color 0.2s ease,
    text-decoration-color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Divider = styled.hr`
  display: none;
`;
