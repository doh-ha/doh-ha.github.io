import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: 100px 20px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.backgroundGray};
`;

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing["3xl"]};
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
    background: ${({ theme }) => theme.colors.borderColor};
    transform: translateX(-50%);
  }
`;

export const Item = styled.div<{ isLeft: boolean }>`
  display: flex;
  margin-bottom: 32px;
  position: relative;

  ${(props) => (props.isLeft ? "flex-direction: row;" : "flex-direction: row-reverse;")}
`;

export const Card = styled.div<{ isLeft: boolean }>`
  flex: 1;
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  position: relative;

  ${(props) => (props.isLeft ? "margin-right: 40px;" : "margin-left: 40px;")}

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    ${(props) => (props.isLeft ? "right: -16px; border-left-color: #fff;" : "left: -16px; border-right-color: #fff;")}
    transform: translateY(-50%);
  }
`;

export const Dot = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.backgroundWhite};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const School = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 4px;
`;

export const Degree = styled.p`
  color: ${({ theme }) => theme.colors.textAccent};
  font-weight: 500;
  margin-bottom: 6px;
`;

export const Period = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.9rem;
  margin-bottom: 12px;
`;

export const Details = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
  line-height: 1.6;
  font-size: 0.95rem;
`;
