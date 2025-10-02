import React from "react";
import { Section, Container, Title, Subtitle, ContactCard, ContactGrid, ContactItem, ContactIcon, ContactLabel, ContactValue, ContactButton } from "./Contact.styles";
import { contacts } from "../data/Contact.data";

const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <Container>
        <Title>Contact</Title>
        <Subtitle>함께 일하고 싶으시다면 언제든 연락주세요!</Subtitle>
        <ContactCard>
          <ContactGrid>
            {contacts.map((c, idx) => (
              <ContactItem key={idx}>
                <ContactIcon>{c.icon}</ContactIcon>
                <ContactLabel>{c.label}</ContactLabel>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer" style={{ color: "#6b7280", fontSize: "0.85rem", textDecoration: "none" }}>
                    {c.value}
                  </a>
                ) : (
                  <ContactValue>{c.value}</ContactValue>
                )}
              </ContactItem>
            ))}
          </ContactGrid>
          <ContactButton href="mailto:hayeon@example.com">이메일로 연락하기</ContactButton>
        </ContactCard>
      </Container>
    </Section>
  );
};

export default Contact;
