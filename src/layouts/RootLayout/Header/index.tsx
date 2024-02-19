import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"
import styled from "@emotion/styled"
import { zIndexes } from "src/styles/zIndexes"

type Props = {
  fullWidth?: boolean
  readingProgress: number
}

const Header: React.FC<Props> = ({ fullWidth, readingProgress }) => {
  return (
    <StyledWrapper>
      <HeaderWrapper>
        <div data-full-width={fullWidth} className="container">
          <Logo />
          <div className="nav">
            <ThemeToggle />
            <NavBar />
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
  border-bottom: 1px solid ${({ theme }) => theme.colors.slate3};
`

const HeaderWrapper = styled.div`
  padding: 10px 0;
  background-color: ${({ theme }) => theme.colors.slate2};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  .container {
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    height: 2.5rem;
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