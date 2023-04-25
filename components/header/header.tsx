import React, { useEffect, useState } from "react";
import Link from "next/link";
import LogoIcon from "@/public/assets/image/logoIcon.png";
import AiIcon from "@/public/assets/image/AiIcon_Black.png";
import BlankProfile from '@/public/assets/image/personIcon.png'
import { Button } from "../common/button/style";
import { useRouter } from "next/router";
import Search from './SearchBar'
import * as _ from "./style"
import axios from "axios";

const Header = () => {
  const [login, setLogin] = useState<boolean>(false);
  const [profileImg, setProfileImg] = useState<string>(BlankProfile.src);
  const [keyWord, setKeyWord] = useState('');
  const router = useRouter();

  const update = () => {
    if (keyWord.trim() === '') return;
    router.push('/search/' + keyWord);
  }

  const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = BlankProfile.src;
  }

  const GetData = () => {
    const token = window.localStorage.getItem('token');
    if (token === null) {
      setLogin(false);
      return;
    }
    setLogin(true);
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_BASEURL}/user`,
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => {
        setProfileImg(process.env.NEXT_PUBLIC_BASEURL + res.data.userPhoto);
        setLogin(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    GetData();
  }, [])

  return (
    <_.HeaderOutBox>
      <_.HeaderBox>
        <_.BetweenBox gap={20}>
          <Link href='/'>
            <_.Img width={124} height={36} src={LogoIcon.src} />
          </Link>
          <_.BetweenBox gap={24}>
            <_.Text onClick={() => router.push('/gallery?sort=new')}>갤러리</_.Text>
            <_.BetweenCursor gap={8} onClick={() => router.push('/i2i')}>
              <_.Text>스케치</_.Text>
              <_.Img width={21} height={21} src={AiIcon.src} />
            </_.BetweenCursor>
          </_.BetweenBox>
        </_.BetweenBox
        <Search change={setKeyWord} value={keyWord} update={update}/>
        {
          login ?
          <_.PersonIconBox onClick={() => router.push('/my')} src={profileImg} alt="" onError={onErrorImg}/>
          :
          <Button MainColor={true} onClick={() => router.push('/auth/login')}>로그인</Button>
        }
      </_.HeaderBox>
    </_.HeaderOutBox>
  )
}

export default Header;