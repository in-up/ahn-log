import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";
import { CONFIG } from "site.config";
import { Emoji } from "src/components/Emoji";
import Link from "next/link";

type Props = {};

const ButtonCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <StyledButton href={CONFIG.button.href}>{CONFIG.button.name}</StyledButton>
    </StyledWrapper>
  );
};

export default ButtonCard;

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 1rem 0;
`;

const StyledButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 0.75rem;
  overflow: hidden;
  height: 2.75rem;
  font-weight: 600;
  margin: 0 0.1rem;
  background-color: ${({ theme }) => theme.colors.indigo12};
  color: ${({ theme }) => theme.colors.lm};
  box-shadow: 0px 4px 10px rgba(31, 45, 92, 0.1);
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 0.875rem;
  transition: box-shadow 0.3s ease;
  &:hover {
    box-shadow: 0px 6px 10px rgba(31, 45, 92, 0.4);
  }
`;
