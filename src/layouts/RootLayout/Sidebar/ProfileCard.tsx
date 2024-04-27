import styled from "@emotion/styled"
import Image from "next/image"
import React from "react"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      {/* <div className="title">
       프로필
      </div> */}
      <div className="content">
        <div className="top">
          <StyledImageContainer>
          <Image src={CONFIG.profile.image} width={100} height={100} alt="profile_image" />
          </StyledImageContainer>
        </div>
        <div className="mid">
          <div className=" name">{CONFIG.profile.name}</div>
          <div className="role">{CONFIG.profile.role}</div>
          <div className="text-sm mb-2">{CONFIG.profile.bio}</div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default ProfileCard

const StyledWrapper = styled.div`

  > .title {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .content {
    margin-bottom: 2.25rem;
    border-radius: 1rem;
    width: 100%;
    /* background-color: ${({ theme }) =>
      theme.scheme === "light" ? "white" : theme.colors.bg}; */
    @media (min-width: 768px) {
      padding: 1rem;
    }
    @media (min-width: 1024px) {
      padding: 1rem;
    }
    .top {
      display: flex;
      justify-content: center;
      position: relative;
      width: 100%;
      &:after {
        display: block;
        padding-bottom: 100%;
      }
    }
    .mid {
      display: flex;
      padding: 0.5rem;
      flex-direction: column;
      align-items: center;
      .name {
        font-size: 1.25rem;
        line-height: 1.75rem;
        font-style: italic;
        font-weight: 700;
      }
      .role {
        background-color: ${({ theme }) => theme.colors.gray4};
        padding: 0.15rem 0.6rem;
        border-radius: 1rem;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.gray11};
      }
      .bio {
        margin-bottom: 0.5rem;
        font-size: 0.75rem;
        line-height: 1.25rem;
      }
    }
  }
`

const StyledImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
`