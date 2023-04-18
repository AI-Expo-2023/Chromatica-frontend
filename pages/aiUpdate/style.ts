import { Theme } from '@/styles/theme/Theme';
import styled from '@emotion/styled';

export const Conatiner = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
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
  min-width: 384px;

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
  justify-content: center;
  align-items: center;
`;
