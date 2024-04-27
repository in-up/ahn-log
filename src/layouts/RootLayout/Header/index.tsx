import React, { useState } from "react";
import NavBar from "./NavBar"
import Logo from "./Logo"
import Menu from "./Menu"
import ThemeToggle from "./ThemeToggle"
import SearchInput from "./SearchInput"
import styled from "@emotion/styled"
import { zIndexes } from "src/styles/zIndexes"
const SIDEBAR_WIDTH = 260;

type Props = {
  fullWidth?: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchVisibility = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <StyledWrapper>
      <HeaderWrapper isSearchVisible={isSearchVisible} fullWidth={fullWidth}>
        <div data-full-width={fullWidth} className="container">
          <div className="leftside">
            <Menu />
            <Logo />
          </div>
          <div className="nav">
            {/* <NavBar /> */}
            <SearchInput onToggleVisibility={handleSearchVisibility} />
            <ThemeToggle />
          </div>
        </div>
      </HeaderWrapper>
    </StyledWrapper>
  )
}

export default Header

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
      margin-left: 1rem;
    }
    display: flex;
    align-items: center;
    margin-left: calc(${SIDEBAR_WIDTH}px + 1rem);
  }
`

const HeaderWrapper = styled.div<{ isSearchVisible: boolean; fullWidth?: boolean }>`
  padding: 10px 0;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? theme.colors.bg : theme.colors.elem};
  transition: background-color 0.3s ease;
  @media (min-width: 1024px) {
    background-color: ${({ theme, isSearchVisible }) =>
      isSearchVisible ? theme.colors.elem : "rgba(0, 0, 0, 0)"};
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
`
