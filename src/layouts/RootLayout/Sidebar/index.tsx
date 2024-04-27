import { useState } from "react"

import { FeedHeader } from "./FeedHeader"
import Footer from "./Footer"
import styled from "@emotion/styled"
import TagList from "./TagList"
import ProfileCard from "./ProfileCard"
import ServiceCard from "./ServiceCard"
import ContactCard from "./ContactCard"
import { zIndexes } from "src/styles/zIndexes"
const HEADER_HEIGHT = 0

type Props = {}

const Sidebar: React.FC<Props> = () => {
  const [q, setQ] = useState("")

  return (
    <StyledWrapper>
      <div
        className="pin"
        css={{
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <ProfileCard />
        <FeedHeader />
        <TagList />
        <ServiceCard />
        <ContactCard />
      </div>
    </StyledWrapper>
  )
}

export default Sidebar

const StyledWrapper = styled.div`
  z-index: ${zIndexes.sidebar};

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0;
  }

  > .pin {
    width: 260px;
    padding: 0 1rem;
    background-color: ${({theme}) => theme.colors.gray2};
    display: none;
    overflow: scroll;
    position: sticky;
    top: ${HEADER_HEIGHT}px;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 1024px) {
      display: block;
    }
  }
`
