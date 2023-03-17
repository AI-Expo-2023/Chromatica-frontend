import React, { useState } from "react";
import LogoImg from "@/public/assets/image/logoIcon";
import Sketch from "@/public/assets/image/AiIcon";
import * as style from "./style"

const Header = () => {
  const [login, setLogin] = useState(false);
  const [profileImg, setProfileImg] = useState('/assets/image/personIcon.png')
  const [keyWord, setKeyWord] = useState('');

  return (
    <style.HeaderOutBox>
      <style.HeaderBox>
        <style.BetweenBox gap={20}>
          <style.IconBox width={124} height={36}>
            <LogoImg width={124} height={36} fill='black'/>
          </style.IconBox>
          <style.BetweenBox gap={24}>
            <style.Text>갤러리</style.Text>
            <style.BetweenCursor gap={8}>
              <style.Text>스케치</style.Text>
              <Sketch/>
            </style.BetweenCursor>
          </style.BetweenBox>
        </style.BetweenBox>
        <style.SearchBar change={setKeyWord} value={keyWord}/>
        {
          login ?
          <style.PersonIconBox onClick={() => setLogin(!login)} src={profileImg}/>
          :
          <style.LoginBtn onClick={() => setLogin(!login)}>로그인</style.LoginBtn>
        }
      </style.HeaderBox>
    </style.HeaderOutBox>
  )
}

export default Header;