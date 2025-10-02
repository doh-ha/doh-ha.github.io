import React from "react";
import styled from "styled-components";
import { Section, Container, Title, Subtitle, Card } from "../styles/styled-components";

const About: React.FC = () => {
  return (
    <Section id="about" background="gray">
      <Container>
        <Title>About Me</Title>
        <Subtitle>안녕하세요! 열정적인 개발자입니다</Subtitle>
        <Card>
          <p style={{ fontSize: "1rem", color: "#374151", lineHeight: "1.7" }}>
            사용자 경험을 중시하며, 창의적이고 효율적인 솔루션을 만드는 것을 좋아합니다. 새로운 기술을 배우고 적용하는 것에 열정적이며, 팀워크를 통해 함께 성장하는 것을 추구합니다.
          </p>
        </Card>
      </Container>
    </Section>
  );
};

export default About;
