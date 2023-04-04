import styled from "@emotion/styled";
import { Theme } from '@/styles/theme/Theme';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const MainBox = styled.div`
  width: 1300px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const SearchOutBox = styled.div`
  display: flex;
  gap: 10px;
`

export const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  min-width: 200px;
  width: 740px;
  height: 56px;
  background: ${Theme.White};
  border: 1px solid ${Theme.Gray[75]};
  border-radius: 16px;
`

export const SearchInput = styled.input`
  width: calc(100% - 40px);
  height: 24px;
  font-weight: 400;
  font-size: 18px;
  color: ${Theme.Black};
  background: transparent;
  border: none;
  &::placeholder {
    color: ${Theme.Gray[50]};
  }
`

export const IconBox = styled.div<{ width?: number, height?: number}>`
  width: ${(props) => props.width ?? 24}px;
  height: ${(props) => props.height ?? 24}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const SearchMainBox = styled.div`
  min-width: 200px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

export const Left = styled.div`
  width: 100%;
  display: flex;
`

export const Cover = styled.div`
  display: flex;
  flex-direction: column;
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
`