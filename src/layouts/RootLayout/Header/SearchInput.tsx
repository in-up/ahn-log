import styled from "@emotion/styled"
import React, { InputHTMLAttributes, ReactNode } from "react"
import { Emoji } from "src/components/Emoji"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <StyledWrapper>
      <input
        className="mid"
        type="text"
        placeholder="제목, 태그, 시리즈 검색"
        {...props}
      />
    </StyledWrapper>
  )
}

export default SearchInput

const StyledWrapper = styled.div`
  margin-left: 3rem;

  @media (min-width: 768px) {
    // margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    display:none;
  }
  > .top {
    padding: 0.25rem;
    margin-bottom: 0.75rem;
  }
  > .mid {
    border: 1px solid #7575751a;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border-radius: 0.5rem;
    outline-style: none;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bg};
    ::placeholder {
      color: ${({ theme }) => theme.colors.gray8}; /* placeholder 텍스트 색상 */
    }
  }
`
