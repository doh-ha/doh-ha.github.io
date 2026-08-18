import React from "react";
import styled from "styled-components";

const NavContainer = styled.nav`
  position: sticky;
  top: 24px;
  width: fit-content;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 8px 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
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
  const navItems = [
    { id: "publication", label: "Publication" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Project" },
    { id: "education", label: "Education" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    onSectionChange(sectionId);
  };

  return (
    <NavContainer>
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
