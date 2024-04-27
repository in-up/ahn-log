import React, { InputHTMLAttributes, ReactNode, useState } from "react";
import styled from "@emotion/styled";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onToggleVisibility: () => void; // 부모 컴포넌트로부터 받을 함수
}

const SearchInput: React.FC<Props> = ({ onToggleVisibility, ...props }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
    onToggleVisibility(); // visible 상태 변경 시 부모 컴포넌트의 함수 호출
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
  }
`;
