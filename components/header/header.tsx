import React, { useState } from "react";
import Link from "next/link";
import LogoIcon from "@/public/assets/image/logoIcon.png";
import AiIcon from "@/public/assets/image/AiIcon_Black.png";
import { Button } from "../common/button/style";
import BlankProfile from '@/public/assets/image/personIcon.png'
import Search from './SearchBar'
import * as _ from "./style"

const Header = () => {
  const [login, setLogin] = useState(false);
  const [profileImg, setProfileImg] = useState(BlankProfile.src);
  const [keyWord, setKeyWord] = useState('');
  
  return (
    <_.HeaderOutBox>
      <_.HeaderBox>
        <_.BetweenBox gap={20}>
          <Link href='/'>
            <_.Img width={124} height={36} src={LogoIcon.src} />
          </Link>
          <_.BetweenBox gap={24}>
            <_.Text>갤러리</_.Text>
            <_.BetweenCursor gap={8}>
              <_.Text>스케치</_.Text>
              <_.Img width={21} height={21} src={AiIcon.src}/>
            </_.BetweenCursor>
          </_.BetweenBox>
        </_.BetweenBox>
        <Search change={setKeyWord} value={keyWord}/>
        {
          login ?
          <_.PersonIconBox onClick={() => setLogin(!login)} src={profileImg}/>
          :
          <Button MainColor={true} onClick={() => setLogin(!login)}>로그인</Button>
        }
      </_.HeaderBox>
    </_.HeaderOutBox>
  )
}

export default Header;