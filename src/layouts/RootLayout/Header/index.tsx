// Header.tsx
import React, { useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import ThemeToggle from "./ThemeToggle";
import SearchInput from "./SearchInput";
import styled from "@emotion/styled";
import DropdownMenu from "./DropDownMenu";
import { zIndexes } from "src/styles/zIndexes";
const SIDEBAR_WIDTH = 260;

type Props = {
  fullWidth?: boolean;
};

const Header: React.FC<Props> = ({ fullWidth }) => {
  const [q, setQ] = useState("")
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleSearchVisibility = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const toggleMenuVisibility = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <StyledWrapper>
      <HeaderWrapper isSearchVisible={isSearchVisible} fullWidth={fullWidth}>
        <div data-full-width={fullWidth} className="container">
          <div className="leftside">
            <Logo />
            <i onClick={toggleMenuVisibility}><Menu /></i>
            
            <DropdownMenu isMenuVisible={isMenuVisible} toggleMenu={toggleMenuVisibility} />
          </div>
          <div className="nav">
            <SearchInput onToggleVisibility={handleSearchVisibility} value={q} onChange={(e) => setQ(e.target.value)}/>
            <ThemeToggle />
          </div>
        </div>
      </HeaderWrapper>
    </StyledWrapper>
  );
};

export default Header;

const StyledWrapper = styled.div`
  position: fixed;
  z-index: ${zIndexes.header};
  width: calc(100vw - 1rem);
  top: 0;
  @media (max-width: 1024px) {
    width: 100vw;
  }
  /* backdrop-filter: blur(10px); */
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.gray1}; */
  .leftside {
    @media (max-width: 1024px) {
      margin-left: 0.5rem;
    }
    display: flex;
    align-items: center;
    margin-left: calc(${SIDEBAR_WIDTH}px + 1rem);
    transition: background-color 0.2s ease;
    padding: 0.3rem 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    &:hover {
      background-color: ${({ theme }) => theme.colors.gray3}; /* hover 시 배경 색이 gray4 */
    }
  }
`;

const HeaderWrapper = styled.div<{ isSearchVisible: boolean; fullWidth?: boolean }>`
  padding: 10px 0;
  background-color: ${({theme}) => theme.colors.bg};
  transition: background-color 0.3s ease;
  @media (min-width: 1024px) {
    background-color: ${({ theme, isSearchVisible }) =>
      isSearchVisible ? theme.colors.bg : "rgba(0, 0, 0, 0)"};
  }
  /* box-shadow: 0px 2px 4px 2px ${({ theme }) => theme.colors.blackA1}; */
  .container {
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3rem;
    margin: 0 auto;
    &[data-full-width="true"] {
    }
    .nav {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }
  }
`;
