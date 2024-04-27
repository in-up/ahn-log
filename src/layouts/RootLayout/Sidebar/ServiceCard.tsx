import { CONFIG } from "site.config"
import React from "react"
import { AiFillCodeSandboxCircle } from "react-icons/ai"
import styled from "@emotion/styled"
import { Emoji } from "src/components/Emoji"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <StyledTitle>
      <i className="ri-instance-line"></i> Service
      </StyledTitle>
      <StyledWrapper>
        {CONFIG.projects.map((project, idx) => (
          <a
            key={idx}
            href={`${project.href}`}
            rel="noreferrer"
            target="_blank"
          >
            <i className="ri-window-fill"></i>
            <div className="name">{project.name}</div>
          </a>
        ))}
      </StyledWrapper>
    </>
  )
}

export default ServiceCard

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
  margin-bottom: 2rem;
  flex-direction: column;
  border-radius: 1rem;
  /* background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4}; */
  > a {
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
