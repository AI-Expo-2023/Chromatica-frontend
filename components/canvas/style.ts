import styled from '@emotion/styled';
import { Theme } from '@/styles/Theme';

export const Container = styled.div``;

export const Canvas = styled.canvas`
  border: 1px solid black;
`;

export const Setting = styled.div`
  display: flex;
  gap: 8px;
`;

/** 그림판 설정에서 들어가는 Container */
export const SettingContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 6px;
  border: 1px solid ${Theme.Gray[5]};
  border-radius: 44px;
  width: fit-content;
`;
