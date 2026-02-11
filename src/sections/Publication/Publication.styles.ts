import styled from "styled-components";
import { Section as BaseSection } from "../../styles/styled-components";

export const Section = styled(BaseSection)`
  background: ${({ theme }) => theme.colors.backgroundWhite};
`;

export const PublicationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const PublicationItemRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  column-gap: ${({ theme }) => theme.spacing.lg};
  row-gap: ${({ theme }) => theme.spacing.xs};
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    row-gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const PublicationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Authors = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const HighlightAuthor = styled.span`
  text-decoration: underline;
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Status = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  white-space: nowrap;
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  align-self: flex-start;
  border-radius: 9999px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  white-space: nowrap;
  margin-left: ${({ theme }) => theme.spacing.sm};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.backgroundWhite};
  }
`;

