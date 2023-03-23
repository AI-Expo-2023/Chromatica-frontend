import React from 'react';
import { Search16Filled } from '@fluentui/react-icons'
import * as _ from './style'

interface SearchProps {
  change: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  text?: string;
}

const SearchBar = ({ change, value, text }: SearchProps) => {
  return (
    <_.SearchBox>
      <_.SearchInput
        type='text'
        value={value}
        onChange={(e) => change(e.target.value)}
        placeholder={text ?? '작품 검색'}
      />
      <_.IconBox>
        <Search16Filled />
      </_.IconBox>
    </_.SearchBox>
  )
}

export default SearchBar;