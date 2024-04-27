import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Menu = () => {
  return (
    <StyledWrapper>
      <i className="ri-arrow-down-s-line"></i>
    </StyledWrapper>
  )
}

export default Menu

const StyledWrapper = styled.div`
    font-size: 20px;
    @media (max-width: 1024px) {
      display: none;
    }
`;