import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import * as _ from './style'
import Pagination from "../common/pagination/pagination";
import RankCard from "../common/RankCard/RankCard";
import axios from "axios";

interface SearchProps {
  word: string | string[] | undefined;
}

interface RankProps {
  photoID: number;
  photo: string;
  head: string;
  like: number;
  user: {
    userID: string;
    name: string;
    photo: string;
  };
}

interface ResPhotoProps {
  photoID: number;
  photo: string;
  head: string;
  like: number;
  User: {
    userID: string;
    name: string;
    photo: string;
  };
}

const Search = ({ word }: SearchProps) => {
  const [keyWord, setKeyWord] = useState<string | string[] | undefined>('');
  const [Page, setPage] = useState<number>(1);
  const [max, setMax] = useState<number>(1);
  const [Data, setData] = useState<RankProps[] | undefined>()
  const router = useRouter()

  const update = () => {
    if((keyWord as string).trim() === '') return;
    router.push('/search/' + keyWord);
  }

  const GetData = (word: string) => {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BASEURL}/search/${Page}`,
      data: {
        searchWord: word,
      }
    })
      .then((res) => {
        setData(res.data.searchedPhotos.map((v: ResPhotoProps): RankProps => {
          const {User, ...Data} = v;
          return {
            ...Data,
            user: {...User}
          }
        })
        );
        setMax(Math.floor(res.data.manyImage / 18) + 1);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  useEffect(() => {
    setKeyWord(word);
    GetData(word as string);
  }, [word])

  return (
    <_.Container>
      <_.MainBox>
        <_.Left>
          <SearchBar change={setKeyWord} value={keyWord || ''} update={update} />
        </_.Left>
        <_.Cover>
          <_.SearchMainBox>
            {
              Data?.map((data) =>
                <RankCard {...data} key={data.photoID}/>
              )
            }
          </_.SearchMainBox>
        </_.Cover>
        <_.Center>
          <Pagination change={setPage} value={Page} end={max}/>
        </_.Center>
      </_.MainBox>
    </_.Container>
  )
}

export default Search;