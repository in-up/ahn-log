import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"
import SearchInput from "./SearchInput"
import styled from "@emotion/styled"
import { zIndexes } from "src/styles/zIndexes"

type Props = {
  fullWidth?: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  return (
    <StyledWrapper>
      <HeaderWrapper>
        <div data-full-width={fullWidth} className="container">
        <div className="leftside">
            <Logo />
          <SearchInput />
        </div>
          <div className="nav">
            <NavBar />
            <ThemeToggle />
          </div>
      </div>
      </HeaderWrapper>
    </StyledWrapper>
  )
}

export default Header

const StyledWrapper = styled.div`
  z-index: ${zIndexes.header};
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.slate1};
  .leftside {
    display: flex;
    align-items: center;
  }
`


const HeaderWrapper = styled.div`
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.elem};
  box-shadow: 0px 2px 4px 2px ${({ theme }) => theme.colors.blackA1};
  .container {
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1800px;
    height: 3rem;
    margin: 0 auto;
    &[data-full-width="true"] {
      @media (min-width: 768px) {
        padding-left: 6rem;
        padding-right: 6rem;
      }
    }
    .nav {
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }
  }
`