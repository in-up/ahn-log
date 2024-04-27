import styled from "@emotion/styled";
import React from "react";
import { Emoji } from "src/components/Emoji";
import useScheme from "src/hooks/useScheme";

type Props = {};

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme();

  const handleClick = () => {
    setScheme(scheme === "light" ? "dark" : "light");
  };

  return (
    <StyledWrapper onClick={handleClick}>
      {scheme === "light" ? (
        <>
          <i className="ri-sun-line"></i>
        </>
      ) : (
        <>
          <i className="ri-moon-fill"></i>
        </>
      )}
    </StyledWrapper>
  );
};

export default ThemeToggle;

const StyledWrapper = styled.div`
  cursor: pointer;
  font-size: 23px;
  border-radius: 0.5rem;
  padding: 0.25rem 0.4rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray4};
  }
`;
