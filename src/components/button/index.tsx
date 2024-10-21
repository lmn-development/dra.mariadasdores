import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({ children, className, type, onClick }: Props) {
  return (
    <ButtonStyle className={className} onClick={onClick} type={type}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  border: none;
  background-color: #43a047;

  border-radius: 30px;
  width: 209px;
  height: 42px;

  color: #f5f5dc;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;

  cursor: pointer;

  &:hover {
    transition: ease-out 0.6s;
    box-shadow: 0 4px 4px rgb(22, 70, 63, 0.3);
  }

  &:not(:hover) {
    transition: ease-out 0.6s;
  }

  @media (min-width: 1280px) {
    width: 230px;
    height: 50px;
    font-size: 1.2rem;
  }

  @media (min-width: 1920px) {
    width: 270px;
    height: 58px;
    font-size: 1.5rem;
  }
`;
