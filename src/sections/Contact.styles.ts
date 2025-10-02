import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  padding: 100px 20px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 60px;
  line-height: 1.6;
  font-weight: 400;
`;

export const ContactCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #2563eb;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  font-size: 20px;
  color: white;
`;

export const ContactLabel = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 6px;
`;

export const ContactValue = styled.p`
  color: #6b7280;
  font-size: 0.85rem;
`;

export const ContactButton = styled.a`
  display: inline-block;
  background: #2563eb;
  color: white;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background: #1d4ed8;
  }
`;
