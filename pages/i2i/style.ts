import { Theme } from '@/styles/theme/Theme';
import styled from '@emotion/styled';

export const DisplayBox = styled.div`
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  > div:last-child {
    display: flex;
    gap: 20px;
  }
`;

export const CanvasContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const CanvasTools = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  min-width: 505px;

  > div {
    display: flex;
    gap: 8px;
  }
`;

export const SettingContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 6px;
  border: 1px solid ${Theme.Gray[5]};
  border-radius: 44px;
  width: fit-content;
`;

// export const PageContainer = styled.div`
//   display: flex;
//   gap: 12px;
//   margin-top: 20px;
//   > button {
//     background-color: white;
//     border: none;
//     font-size: 20px;
//     &:first-child {
//       font-weight: bold;
//       text-decoration: underline;
//       text-underline-offset: 5px;
//     }
//     &:last-child {
//       cursor: pointer;
//     }
//   }
// `;
