import React from 'react';
import { useRouter } from 'next/router';
import * as _ from './style'

interface ImgProps {
  photoID: number;
  photo: string;
}

const RankCardImg = ({ photoID, photo }: ImgProps) => {
  const router = useRouter();
  const move = () => {
    localStorage.setItem('imgData', photo);
    // router.push('')
  }

  return (
      <_.Img onClick={move} src={process.env.REACT_APP_BASEURL + photo}/>
  )
}

export default RankCardImg;