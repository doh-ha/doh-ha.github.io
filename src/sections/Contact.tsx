import React from "react";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  padding: 100px 20px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

const Container = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 20px;
  letter-spacing: -0.02em;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 60px;
  line-height: 1.6;
  font-weight: 400;
`;

const ContactCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
`;

const ContactItem = styled.div`
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

const ContactIcon = styled.div`
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

const ContactLabel = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 6px;
`;

const ContactValue = styled.p`
  color: #6b7280;
  font-size: 0.85rem;
`;

const ContactButton = styled.a`
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

const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <Container>
        <Title>Contact</Title>
        <Subtitle>함께 일하고 싶으시다면 언제든 연락주세요!</Subtitle>
        <ContactCard>
          <ContactGrid>
            <ContactItem>
              <ContactIcon>📧</ContactIcon>
              <ContactLabel>Email</ContactLabel>
              <ContactValue>hayeon@example.com</ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactIcon>📱</ContactIcon>
              <ContactLabel>Phone</ContactLabel>
              <ContactValue>010-1234-5678</ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactIcon>💼</ContactIcon>
              <ContactLabel>LinkedIn</ContactLabel>
              <ContactValue>linkedin.com/in/hayeon</ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactIcon>🐙</ContactIcon>
              <ContactLabel>GitHub</ContactLabel>
              <ContactValue>github.com/hayeon</ContactValue>
            </ContactItem>
          </ContactGrid>
          <ContactButton href="mailto:hayeon@example.com">이메일로 연락하기</ContactButton>
        </ContactCard>
      </Container>
    </Section>
  );
};

export default Contact;
