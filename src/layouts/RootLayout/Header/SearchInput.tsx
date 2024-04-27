import React, { InputHTMLAttributes, ReactNode, useState } from "react";
import styled from "@emotion/styled";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onToggleVisibility?: () => void;
  q: string; // q 속성 추가
  onQueryChange?: (value: string) => void; // onQueryChange 후크 추가
}

const SearchInput: React.FC<Props> = ({ onToggleVisibility, q, onQueryChange, ...props }) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
    if (onToggleVisibility) {
      onToggleVisibility();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (onQueryChange) {
      onQueryChange(value); // 입력 값이 변경될 때 콜백 호출
    }
  };

  return (
    <StyledWrapper>
      <input
        className={`mid ${visible ? "visible" : ""}`}
        type="text"
        placeholder="제목, 태그, 시리즈 검색"
        value={q} // q 속성을 input 값에 바인딩
        onChange={handleInputChange} // 입력 값 변경 시 핸들러 호출
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
