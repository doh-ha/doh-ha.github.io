import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: 80px 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundWhite};
`;

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 1.875rem; /* ~30px */
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: right;
  margin-bottom: 28px;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Block = styled.div`
  padding: 0;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const School = styled.h3`
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 0;
`;

export const Degree = styled.h3`
  font-size: 1.25rem; /* 20px */
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textAccent};
  margin: 0;
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
  font-size: 0.975rem; /* ~15.6px */
  font-weight: 600;
  margin: 0;
`;

export const Location = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.975rem;
  font-weight: 600;
  margin: 0;
`;

export const Details = styled.ul`
  margin: 10px 0 0;
  padding-left: 1rem;
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.7;
  font-size: 0.95rem; /* ~15px */

  li::marker {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
