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
    router.push(`/aiUpdate?image=${photoID}`);
  }

  return (
      <_.Img onClick={move} src={photo}/>
  )
}

export default RankCardImg;