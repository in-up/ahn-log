import styled from "@emotion/styled"
import Image from "next/image"
import React from "react"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper href="/">
      <div className="full">
        <div className="leftside">
          <StyledImageContainer>
            <Image
              src={CONFIG.profile.image}
              width={35}
              height={35}
              alt="profile_image"
              objectFit="cover"
            />
          </StyledImageContainer>
          <div className=" name">{CONFIG.profile.name}</div>
        </div>
        <div className="rightside">
          <div className="role">{CONFIG.profile.role}</div>
        </div>
        {/* <div className="text-sm mb-2">{CONFIG.profile.bio}</div> */}
      </div>
    </StyledWrapper>
  )
}

export default ProfileCard

const StyledWrapper = styled.a`
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  display: inline-block;
  width: 100%;
  border-radius: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
        background-color: ${({ theme }) => theme.colors.gray5};
      }

  > .full {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .leftside {
      margin-left: 0.25rem;
      margin-right: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      .name {
        margin-left: 1rem;
        font-size: 1rem;
        line-height: 1.75rem;
        font-weight: 500;
        align-items: center;
      }
    }

    .rightside {
      display: flex;
      flex-direction: row;
      margin-left: auto;
      align-items: center;
      .role {
        background-color: ${({ theme }) => theme.colors.gray4};
        padding: 0.15rem 0.6rem;
        border-radius: 1rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        color: ${({ theme }) => theme.colors.gray9};
      }
      .bio {
        margin-bottom: 0.5rem;
        font-size: 0.75rem;
        line-height: 1.25rem;
      }
    }
  }

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
      
    }
  }
`

const StyledImageContainer = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  overflow: hidden;
`
