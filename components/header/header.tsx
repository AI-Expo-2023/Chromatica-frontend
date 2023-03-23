import React, { useState } from "react";
import Link from "next/link";
import LogoImg from "@/public/assets/image/logoIcon";
import Sketch from "@/public/assets/image/AiIcon";
import { Button } from "../commons/button/button";
import Search from './SearchBar'
import * as _ from "./style"

const Header = () => {
  const [login, setLogin] = useState(false);
  const [profileImg, setProfileImg] = useState('/assets/image/personIcon.png')
  const [keyWord, setKeyWord] = useState('');

  return (
    <_.HeaderOutBox>
      <_.HeaderBox>
        <_.BetweenBox gap={20}>
          <Link href='/'>
            <_.IconBox width={124} height={36}>
              <LogoImg width={124} height={36} fill='black'/>
            </_.IconBox>
          </Link>
          <_.BetweenBox gap={24}>
            <_.Text>갤러리</_.Text>
            <_.BetweenCursor gap={8}>
              <_.Text>스케치</_.Text>
              <Sketch/>
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