import styled from "styled-components";
import { Section as BaseSection } from "../../styles/styled-components";

export const Section = styled(BaseSection)`
  background: ${({ theme }) => theme.colors.backgroundWhite};
`;

export const NewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const NewsItemRow = styled.div`
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr);
  column-gap: ${({ theme }) => theme.spacing.lg};
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    row-gap: ${({ theme }) => theme.spacing.xs};
  }
`;

export const NewsDate = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textAccent};
  white-space: nowrap;
  padding-top: 2px;
`;

export const NewsText = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
`;

export const MoreRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const MoreLink = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: underline;
  text-underline-offset: 3px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const BackLink = styled.a`
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: underline;
  text-underline-offset: 3px;
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
