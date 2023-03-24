import { Theme } from '@/styles/theme/Theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 550px;
  flex-direction: column;
  gap: 20px;
`;

export const Canvas = styled.canvas`
  border: 1px solid black;
`;

export const InputContainer = styled.div`
`
export const Input = styled.input`
`
export const Range = styled.input`

/** 그림판 설정에서 들어가는 Container */
export const SettingContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 6px;
  border: 1px solid ${Theme.Gray[5]};
  border-radius: 44px;
  width: fit-content;
`;

export const ToolRange = styled.div`
  width: 420px;
`;
