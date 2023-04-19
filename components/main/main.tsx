import React, { useRef, useState, useEffect } from "react";
import RankCard from "@/components/common/RankCard/RankCard";
import LogoImg from "@/public/assets/image/logoIcon.png";
import AiIcon from "@/public/assets/image/AiIcon_White.png";
import { Button } from "../common/button/style";
import { Bot24Filled } from '@fluentui/react-icons'
import { Theme } from "@/styles/theme/Theme";
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";
import * as _ from './style'
import axios from "axios";

interface resProps {
  photoID: number;
  photo: string;
  head: string;
  like: number;
  User: {
    name: string;
    photo: string;
    userID: string;
  };
}

type UserType = "name" | "photo" | "userID";
interface RankProps {
  photoID: number;
  photo: string;
  head: string;
  like: number;
  user: { [key in UserType]: string };
  rank: number;
}

const Main = () => {
  const [keyWord, setKeyWord] = useState('');
  const [windowWidth, setWindowWidth] = useState(0);
  const [Data, setData] = useState<RankProps[] | undefined>();
  const timer = useRef<NodeJS.Timer | null>(null);
  const router = useRouter();

  const update = () => {
    if (keyWord.trim() === '') return;
    router.push('/search/' + keyWord);
  }

  const GetData = () => {
    axios({
      method: 'GET',
      url: process.env.REACT_APP_BASEURL
    })
      .then((res) => {
        setData(res.data.sortPhoto.map((v: resProps, index: number): RankProps => {
          const { User, ...Data } = v;
          return {
            ...Data,
            user: { ...User },
            rank: index + 1
          }
        }))
      })
      .catch((err) => {
        console.error(err);
      })
  }

  const resizeWindow = () => {
    if (timer.current) {
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
    GetData();
  }, [])

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
        <_.Img src={LogoImg.src} width={282} height={69} />
        <_.SearchOutBox>
          <SearchBar change={setKeyWord} value={keyWord} update={update} />
          <_.SketchBtn MainColor={true} onClick={() => router.push('/i2i/')}>
            <Bot24Filled primaryFill={Theme.White} />
            <_.SketchBox>
              <_.Img src={AiIcon.src} />
              <_.SketchText>스케치</_.SketchText>
            </_.SketchBox>
          </_.SketchBtn>
        </_.SearchOutBox>
        <_.BestOutBox>
          <_.BestTitleBox>
            <_.Title>인기 작품</_.Title>
            <Button Gray5={true} onClick={() => router.push('/gallery?sort=popular')}>모두 보기</Button>
          </_.BestTitleBox>
          <_.BestMainBox>
            {
              Data
                ?.slice(0, Math.floor((Math.min(windowWidth, 1300) + 20) / 220))
                .map((data) =>
                  <RankCard {...data} key={data.photoID} />
                )
            }
          </_.BestMainBox>
        </_.BestOutBox>
      </_.MainBox>
    </_.Container>
  )
}

export default Main;

