import styled from "@emotion/styled"
import { Theme } from '@/styles/theme/Theme';

export const Container = styled.div`
  width: 200px;
  height: 260px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`

export const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center center;
  border-radius: 8px;
`

export const BetweenBox = styled.div`
  display: flex;
  justify-content: space-between;
`

export const UserImg = styled(Img)`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: #D9D9D9;
`

export const GapBox = styled.div`
  display: flex;
  gap: 4px;
`

export const CursorBox = styled(GapBox)`
  cursor: pointer;
  z-index: 10;
`

export const Text = styled.span<{ weight?: number, size?: number, color?: string }>`
  font-weight: ${({weight}) => weight ?? 400}px;
  font-size: ${({size}) => size ?? 14}px;
  color: ${({color}) => color ?? Theme.Black};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const NickName = styled(Text)`
  font-weight: 400;
  font-size: 14px;
  width: 121px;
`

export const Circle = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background-color: ${Theme.White};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8px 0 0 8px;
`