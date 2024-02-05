import Link from "next/link"
import { CONFIG } from "site.config"
import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      <LogoImage src={CONFIG.profile.logo} alt={CONFIG.blog.title} />
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled.a``;

const LogoImage = styled.img`
height: 30px;
margin-top: 4px;
`;