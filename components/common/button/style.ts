import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme } from '@/styles/theme/Theme';

// 버튼 사용법
// <Button "원하는 색" Width="넓이">넣고싶은글</Button>

type ButtonType = {
  MainColor?: boolean;
  Black?: boolean;
  White?: boolean;
  Red?: boolean;
  Gray5?: boolean;
  Gray25?: boolean;
  Width?: string;
};

export const Button = styled.button<ButtonType>`
  font-size: 18px;
  font-weight: 400;

  border: none;
  border-radius: 8px;

  padding: 6px 12px;
  display: flex;
  justify-content: center;
  gap: 8px;
  justify-content: center;
  align-items: center;

  width: ${(props) => (props.Width ? `${props.Width}px` : 'auto')};
  color: ${(props) => (props.Gray5 ? 'black' : 'white')};

  &:hover {
    transition: 100ms;
    filter: ${(props) => (props.Gray5 ? 'brightness(95%)' : 'brightness(120%)')};
  }
  &:active {
    transition: 100ms;
    opacity: 0.7;
  }

  background-color: ${(props) =>
    props.MainColor ? Theme.ThePurple
      : props.Black ? Theme.Black
      : props.White ? Theme.White
      : props.Red ? Theme.Red
      : props.Gray5 ? Theme.Gray[5]
      : props.Gray25 ? Theme.Gray[25]
      : Theme.White
    };
`;
