import styled from "@emotion/styled"
import React from "react"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

const ContactCard: React.FC = () => {
  return (
    <>
      <StyledTitle>
        <i className="ri-contacts-book-2-line"></i> Contacts
      </StyledTitle>
      <StyledWrapper>
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
          >
            <i className="ri-github-fill"></i>
            <div className="name">Github</div>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
          >
            <i className="ri-instagram-fill"></i>
            <div className="name">Instagram</div>
          </a>
        )}
        {CONFIG.profile.blog && (
          <a
            href={`https://${CONFIG.profile.blog}.tistory.com/`}
            rel="noreferrer"
            target="_blank"
          >
            <i className="ri-home-fill"></i>
            <div className="name">Tistory</div>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
          >
            <i className="ri-linkedin-box-fill"></i>
            <div className="name">LinkedIn</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            css={{ overflow: "hidden" }}
          >
            <i className="ri-mail-fill"></i>
            <div className="name">email</div>
          </a>
        )}
      </StyledWrapper>
    </>
  )
}

export default ContactCard

const StyledTitle = styled.div`
  display: none;
  padding: 0.25rem;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray9};
  @media (min-width: 1024px) {
    display: block;
  }
  > i {
    font-size: 16px;
    margin-right: 0.25rem;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  /* background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4}; */
  a {
    display: flex;
    padding: 0.5rem;
    margin: 0;
    gap: 0.1rem;
    align-items: center;
    border-radius: 0.5rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.gray12};
    cursor: pointer;
    > i {
    font-size: 16px;
    margin-right: 0.7rem;
   }

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
