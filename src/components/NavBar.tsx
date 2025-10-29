import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NavContainer = styled.nav<{ isScrolled: boolean }>`
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: ${(props) => (props.isScrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0.7)")};
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 8px 16px;
  box-shadow: ${(props) => (props.isScrolled ? "0 4px 20px rgba(0, 0, 0, 0.08)" : "0 2px 12px rgba(0, 0, 0, 0.05)")};
  border: 1px solid rgba(255, 255, 255, 0.3);
  z-index: 1000;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    top: 16px;
    padding: 6px 12px;
    border-radius: 12px;
    left: ${({ theme }) => theme.spacing.sm};
    right: ${({ theme }) => theme.spacing.sm};
    transform: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 8px;
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled.a<{ isActive: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.isActive ? props.theme.colors.primary : "#64748b")};
  font-weight: ${(props) => (props.isActive ? "700" : "600")};
  font-size: 15px;
  padding: 10px 20px;
  border-radius: 12px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  white-space: nowrap;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background: rgba(0, 70, 42, 0.08);
  }

  ${(props) =>
    props.isActive &&
    `
    background: rgba(0, 70, 42, 0.1);
  `}

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 12px;
  }
`;

const ActiveIndicator = styled.div`
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 4px;
  height: 4px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
`;

interface NavBarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection, onSectionChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    onSectionChange(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <NavContainer isScrolled={isScrolled}>
      <NavList>
        {navItems.map((item) => (
          <NavItem key={item.id}>
            <NavLink href={`#${item.id}`} isActive={activeSection === item.id} onClick={(e) => handleClick(e, item.id)}>
              {item.label}
              {activeSection === item.id && <ActiveIndicator />}
            </NavLink>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};

export default NavBar;
