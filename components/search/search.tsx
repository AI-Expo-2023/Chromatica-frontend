import { useRouter } from "next/router";
import React, { useEffect, useState, useRef } from "react";
import SearchBar from "./SearchBar";
import * as _ from './style'
import Pagination from "../common/pagination/pagination";
import RankCard from "../common/RankCard/RankCard";
import { Data } from "./TestData";

interface SearchProps {
  word: string | string[] | undefined;
}

const Search = ({ word }: SearchProps) => {
  const [keyWord, setKeyWord] = useState<string | string[] | undefined>('');
  const [Page, setPage] = useState<number>(1);
  const [windowWidth, setWindowWidth] = useState(0);
  const timer = useRef<NodeJS.Timer | null>(null);
  const router = useRouter()

  const update = () => {
    router.push('/search/' + keyWord);
  }

  useEffect(() => {
    setKeyWord(word);
  }, [word])


  const resizeWindow = () => {
    if(timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    } 

    timer.current = setInterval(() => {
      setWindowWidth(window.innerWidth);
      clearTimeout(timer.current!);
      timer.current = null;
    }, 100)
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    window.addEventListener("resize", resizeWindow)
    return () => {
      window.removeEventListener("resize", resizeWindow)
    }
  }, [windowWidth])

  return (
    <_.Container>
      <_.MainBox>
        <_.Left>
          <SearchBar change={setKeyWord} value={keyWord || ''} update={update} />
        </_.Left>
        <_.Cover>
          <_.SearchMainBox>
            {
              Data
              .slice(0, (Math.floor((Math.min(windowWidth, 1300) + 20) / 220)) * 3)
              .map((data) =>
                <RankCard {...data} key={data.photoID}/>
              )
            }
          </_.SearchMainBox>
        </_.Cover>
        <_.Center>
          <Pagination change={setPage} value={Page} />
        </_.Center>
      </_.MainBox>
    </_.Container>
  )
}

export default Search;