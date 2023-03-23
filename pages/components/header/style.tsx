import React from "react"
import styled from "@emotion/styled";
import SearchIcon from "@/public/assets/image/searchIcon";

export const HeaderOutBox = styled.div`
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderBox = styled.div`
  min-width: 365px;
  width: 1300px;
  height: 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 670px) {
    & > div:nth-child(2) {
      display: none;
    }
  }
`

export const BetweenBox = styled.div<{ gap: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${(props) => props.gap}px;
`

export const BetweenCursor = styled(BetweenBox)`
  cursor: pointer;
`

export const Text = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: black;
  cursor: pointer;
`

interface SearchProps {
  change: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  text?: string;
}

export const SearchBar = ({ change, value, text }: SearchProps) => {
  return (
    <SearchBox>
      <SearchInput
        type='text'
        value={value}
        onChange={(e) => change(e.target.value)}
        placeholder={text ?? '작품 검색'}
      />
      <IconBox>
        <SearchIcon />
      </IconBox>
    </SearchBox>
  )
}

export const SearchBox = styled.div`
  width: 300px;
  height: 36px;
  padding: 6px;
  background: #F2F2F2;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchInput = styled.input`
  width: 252px;
  height: 24px;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  background: transparent;
  border: none;
`

export const IconBox = styled.div<{ width?: number, height?: number}>`
  width: ${(props) => props.width ?? 24}px;
  height: ${(props) => props.height ?? 24}px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const PersonIconBox = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  object-fit: cover;
  background-color: #D9D9D9;
`

export const LoginBtn = styled.div`
  padding: 6px 12px;
  width: 71px;
  height: 33px;
  background: #8066F5;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  cursor: pointer;
`