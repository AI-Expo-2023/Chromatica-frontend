import styled from "@emotion/styled";
import { Theme } from "@/styles/theme/Theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export const Main = styled.div`
  width: 1300px;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Img = styled.img<{ width?: number, height?: number}>`
  width: ${(props) => props.width ?? 24}px;
  height: ${(props) => props.height ?? 24}px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: scale-down;
  border-radius: 8px;
`

export const ImgCircle = styled(Img)`
  border-radius: 100%;
`

export const Text = styled.span<{weight?: number, size?: number}>`
  font-weight: ${({weight}) => weight ?? 400};
  font-size: ${({size}) => size ?? 18}px;
  color: ${Theme.Black};
`

export const GapBox = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
`

export const LikeBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  gap: 4px;
  background: ${Theme.Gray[5]};
  border:none;
  border-radius: 8px;
`

export const LikeText = styled(Text)<{ bool: boolean }>`
  color: ${({bool}) => bool ? Theme.Red : Theme.Black};
`

export const ErrorBox = styled.div`
  display: flex;
  gap: 4px;
  cursor: pointer;
`

export const ErrorText = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: ${Theme.Red};
`