import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Theme } from '@/styles/theme/Theme';

type TagState = {
  basic?: boolean;
  puple?: boolean;
  cancel?: boolean;
};

export const Tag = styled.button`
  font-size: 18px;
  font-weight: 400;

  border: none;
  border-radius: 8px;

  padding: 6px 12px;

  ${(props: TagState) =>
    props.basic
      ? css`
          background-color: ${Theme.White};
          color: ${Theme.Black};

          border: 1px solid ${Theme.Gray[75]};
        `
      : props.puple
      ? css`
          background-color: ${Theme.ThePurple};
          color: ${Theme.White};
        `
      : props.cancel
      ? css`
          background-color: ${Theme.White};
          color: ${Theme.Black};

          border: 1px solid ${Theme.Gray[75]};
          display: flex;
          align-items: center;
          gap: 5px;
        `
      : css`
          display: none;
        `}
`;
