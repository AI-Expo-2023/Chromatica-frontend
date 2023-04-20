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

export const Img = styled.img`
  max-width: 100%;
  width: auto;
  height: 500px;
  border-radius: 8px;
`

export const ImgCircle = styled.img`
  width: 28px;
  height: 28px;
  object-fit: cover;
  object-position: center center;
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

export const ReportContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ReportGapBox = styled.div`
  display: flex;
  gap: 8px;
`

export const ReportTextGapBox = styled(ReportGapBox)`
  gap: 12px;
  flex-direction: column;
`