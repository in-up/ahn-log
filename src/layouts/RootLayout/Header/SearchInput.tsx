import React, { InputHTMLAttributes, ReactNode, useState } from "react";
import styled from "@emotion/styled";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onToggleVisibility?: () => void; // Optional로 변경
}

const SearchInput: React.FC<Props> = ({onToggleVisibility, ...props }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
    if (onToggleVisibility) {
      onToggleVisibility();
    }
  };

  return (
    <StyledWrapper>
      <input
        className={`mid ${visible ? "visible" : ""}`}
        type="text"
        placeholder="제목, 태그, 시리즈 검색"
        {...props}
      />
      <button className="searchButton" onClick={toggleVisibility}>
        <i className="ri-search-line"></i>
      </button>
    </StyledWrapper>
  );
};

export default SearchInput;

const StyledWrapper = styled.div`
  display: block;
  @media (max-width: 1024px) {
    display: none;
    }
  margin-left: 3rem;
  position: relative;

  .mid {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .mid.visible {
    opacity: 1;
  }

  .searchButton {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    transition: background-color 0.1s ease;
    border-radius: 0.5rem;
    padding: 0.4rem 0.55rem;
    &:hover {
    background-color: ${({ theme }) => theme.colors.gray4};
  }
  }  
`;
