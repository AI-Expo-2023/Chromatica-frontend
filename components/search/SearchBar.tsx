import React from 'react';
import { Search24Filled } from '@fluentui/react-icons'
import { Theme } from '@/styles/theme/Theme';
import * as _ from './style'

interface SearchProps {
  change: React.Dispatch<React.SetStateAction<string | string[] | undefined>>;
  value: string | string[] | undefined;
  update: () => void;
}

const SearchBar = ({ change, value, update }: SearchProps) => {
  return (
    <_.SearchBox>
      <_.SearchInput
        type='text'
        value={value}
        onKeyDown={(e) => {if(e.key === 'Enter') update()}}
        onChange={(e) => change(e.target.value)}
        placeholder='이미지 검색'
      />
      <_.IconBox onClick={() => update()}>
        <Search24Filled primaryFill={Theme.Gray[50]}/>
      </_.IconBox>
    </_.SearchBox>
  )
}

export default SearchBar;