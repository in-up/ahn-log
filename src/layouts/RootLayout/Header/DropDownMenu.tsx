import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import { CONFIG } from "site.config";

interface Props {
  isMenuVisible: boolean;
  toggleMenu: () => void;
}

const DropdownMenu: React.FC<Props> = ({ isMenuVisible, toggleMenu }) => {
    return (
      <StyledDropdownMenu isMenuVisible={isMenuVisible}>
        <StyledButton href={CONFIG.menu.about} target="_blank">About Me</StyledButton>
        <StyledButton href={CONFIG.menu.resume} target="_blank">Resume</StyledButton>
      </StyledDropdownMenu>
    );
  };
  
  export default DropdownMenu;

const fadeDown = keyframes`
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const StyledDropdownMenu = styled.div<{ isMenuVisible: boolean }>`
  display: ${({ isMenuVisible }) => (isMenuVisible ? "block" : "none")};
  position: absolute;
  top: 100%;
  border: 1px solid ${({ theme }) => theme.colors.gray4};
  border-radius: 0.5rem;
  padding: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.bg};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  animation: ${fadeDown} 0.15s ease-in-out forwards;
`;

const StyledButton = styled.a`
  display: block;
  padding: 0.75rem;
  color: ${({ theme }) => theme.colors.gray12};
  text-decoration: none;
  transition: color 0.3s ease;
  background-color: ${({ theme }) => theme.colors.bg};
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray2};
  }
`;
