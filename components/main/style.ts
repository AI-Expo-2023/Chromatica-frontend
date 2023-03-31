import styled from "@emotion/styled";
import { Theme } from '@/styles/theme/Theme';
import { Button } from "../common/button/style";

export const Container = styled.div`
  width: 100%;
  margin-top: 17.2vh;
  display: flex;
  justify-content: center;
`

export const Img = styled.img<{ width?: number, height?: number}>`
  width: ${(props) => props.width ?? 24}px;
  height: ${(props) => props.height ?? 24}px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: scale-down;
`

export const MainBox = styled.div`
  min-width: 500px;
  width: 1300px;
  display: flex;
  flex-direction: column;
  gap: 80px;
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

export const SketchBtn = styled(Button)`
  border-radius: 16px;
  padding: 16px;
  display: flex;
  gap: 12px;
  min-width: 150px;
`

export const SketchBox = styled.div`
  display: flex;
  gap: 4px;
`

export const SketchText = styled.span`
  font-weight: 800;
  font-size: 20px;
  color: ${Theme.White}
`

export const BestOutBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const BestTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`

export const Title = styled.span`
  font-weight: 800;
  font-size: 24px;
`

export const BestMainBox = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 200px;
`