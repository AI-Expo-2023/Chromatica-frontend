import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import * as _ from './style'

interface SearchProps {
  word: string | string[] | undefined;
}

const Search = ({ word }: SearchProps) => {
  const [keyWord, setKeyWord] = useState<string | string[] | undefined>('');
  const [Page, setPage] = useState<number>(1);
  const router = useRouter()

  const update = () => {
    router.push('/search/' + keyWord);
  }

  useEffect(() => {
    setKeyWord(word);
  }, [word])

  return (
    <_.Container>
      <_.MainBox>
        <SearchBar change={setKeyWord} value={keyWord || ''} update={update}/>
        <_.MainBox>
          <_.SearchMainBox>
            
          </_.SearchMainBox>
          
          <_.SearchMainBox>
            
          </_.SearchMainBox>
          
          <_.SearchMainBox>
            
          </_.SearchMainBox>
        </_.MainBox>
      </_.MainBox>
    </_.Container>
  )
}

export default Search;