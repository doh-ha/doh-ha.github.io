import React from "react";
import styled from "styled-components";
import { contacts } from "../data/Contact.data";
import MonoIcon, { MonoIconName } from "../components/MonoIcon";

const SidebarSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.colors.borderColor};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: auto;
    align-items: flex-start;
    justify-content: flex-start;
    border-right: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
    padding: 72px 0 ${({ theme }) => theme.spacing.xl};
  }
`;

const SidebarInner = styled.div`
  padding: 0 ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing["2xl"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    align-items: flex-start;
    text-align: left;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const ProfileImage = styled.div`
  width: 148px;
  height: 148px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 3px solid ${({ theme }) => theme.colors.backgroundWhite};
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 132px;
    height: 132px;
  }

  img {
    width: 108%;
    height: 108%;
    object-fit: cover;
    object-position: center 35%;
    transform: translate(-6%, -5%);
  }
`;

const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  letter-spacing: -0.02em;
  margin: 0;
`;

const Bio = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  margin: 0;
`;

const Divider = styled.div`
  width: 32px;
  height: 2px;
  background: ${({ theme }) => theme.colors.borderColor};
  border-radius: 1px;
`;

const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 100%;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`;

const ContactChip = styled.a<{ $pill?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: ${({ $pill }) => ($pill ? "8px 14px" : "6px 10px")};
  border-radius: ${({ $pill }) => ($pill ? "9999px" : "8px")};
  text-decoration: none;
  background: ${({ $pill, theme }) => ($pill ? theme.colors.backgroundLight : "transparent")};
  color: ${({ theme }) => theme.colors.textSecondary};
  border: ${({ $pill, theme }) => ($pill ? `1px solid ${theme.colors.borderColor}` : "none")};
  transition:
    color ${({ theme }) => theme.transitions.fast},
    background ${({ theme }) => theme.transitions.fast},
    border-color ${({ theme }) => theme.transitions.fast};

  &:hover {
    color: ${({ $pill, theme }) => ($pill ? theme.colors.backgroundWhite : theme.colors.primary)};
    background: ${({ $pill, theme }) => ($pill ? theme.colors.supportGreen : theme.colors.backgroundLight)};
    border-color: ${({ $pill, theme }) => ($pill ? theme.colors.supportGreen : "transparent")};
  }
`;

const ContactLabel = styled.span`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

const labelToIconName = (label: string): MonoIconName | null => {
  switch (label.toLowerCase()) {
    case "email":
      return "Email";
    case "phone":
      return "Phone";
    case "linkedin":
      return "LinkedIn";
    case "google scholar":
      return "GoogleScholar";
    default:
      return null;
  }
};

const About: React.FC = () => {
  return (
    <SidebarSection id="about">
      <SidebarInner>
        <ProfileImage>
          <img src="/img/26profile.jpg" alt="Hayeon Doh" />
        </ProfileImage>

        <Name>Hayeon (Hannah) Doh</Name>

        <Divider />

        <Bio>
          My passion lies in bridging technology and people by making technology more accessible for marginalized communities. My research interests include Human-Computer Interaction (HCI),
          Educational Technology, and Large Language Models.
        </Bio>

        <ContactRow>
          {contacts.map((c, idx) => {
            const iconName = labelToIconName(c.label);
            return (
              <ContactChip
                key={idx}
                href={c.href || "#"}
                target={c.href?.startsWith("http") ? "_blank" : undefined}
                rel={c.href?.startsWith("http") ? "noreferrer" : undefined}
                $pill={c.label === "Email" || c.label === "LinkedIn" || c.label === "Google Scholar"}
              >
                {iconName && <MonoIcon name={iconName} size={16} />}
                <ContactLabel>{c.label}</ContactLabel>
              </ContactChip>
            );
          })}
        </ContactRow>
      </SidebarInner>
    </SidebarSection>
  );
};

export default About;
