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

export const Button = styled.button`
  font-size: 18px;
  font-weight: 400;

  border: none;
  border-radius: 8px;

  padding: 6px 12px;
  display: flex;
  gap: 8px;

  ${(props: ButtonType) =>
    props.Width
      ? css`
          width: ${props.Width}px;
        `
      : css`
          width: auto;
        `}

  ${(props: ButtonType) =>
    props.MainColor
      ? css`
          background-color: ${Theme.ThePurple};
          color: ${Theme.White};

          :hover {
            transition: 100ms;
            filter: brightness(120%);
          }

          :active {
            transition: 100ms;
            opacity: 0.7;
          }
        `
      : props.Black
      ? css`
          color: ${Theme.White};
          background-color: ${Theme.Black};

          :hover {
            transition: 100ms;
            filter: brightness(120%);
          }

          :active {
            transition: 100ms;
            opacity: 0.7;
          }
        `
      : props.White
      ? css`
          color: ${Theme.Black};
          background-color: ${Theme.White};

          :hover {
            transition: 100ms;
            filter: brightness(120%);
          }

          :active {
            transition: 100ms;
            opacity: 0.7;
          }
        `
      : props.Red
      ? css`
          background-color: ${Theme.Red};
          color: ${Theme.White};

          :hover {
            transition: 100ms;
            filter: brightness(120%);
          }

          :active {
            transition: 100ms;
            opacity: 0.7;
          }
        `
      : props.Gray5
      ? css`
          background-color: ${Theme.Gray[5]};
          color: ${Theme.Black};

          :hover {
            transition: 100ms;
            filter: brightness(120%);
          }

          :active {
            transition: 100ms;
            opacity: 0.7;
          }
        `
      : props.Gray25
      ? css`
          background-color: ${Theme.Gray[25]};
          color: ${Theme.White};

          :hover {
            transition: 100ms;
            filter: brightness(120%);
          }

          :active {
            transition: 100ms;
            opacity: 0.7;
          }
        `
      : css`
          color: ${Theme.Black}
          background-color: ${Theme.White};
        `}
`;
