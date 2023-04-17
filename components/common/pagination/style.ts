import { Theme } from '@/styles/theme/Theme';
import styled from "@emotion/styled"

export const Container = styled.div`
  display: flex;
  gap: 8px;
`

export const IconBox = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

export const Circle = styled.div<{ bool: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 100%;
  background-color: ${Theme.Gray[5]};
  font-weight: 400;
  font-size: 18px;
  color: ${({bool}) => bool ? Theme.Black : Theme.Gray[50] };
`