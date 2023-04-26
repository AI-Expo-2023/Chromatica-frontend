import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { Heart16Filled } from '@fluentui/react-icons';
import BlankProfile from '@/public/assets/image/personIcon.png';
import { Theme } from '@/styles/theme/Theme';
import * as _ from './style'

interface RankProps {
  photoID: number;
  photo: string;
  head: string;
  like: number;
  User: {
    userID?: string;
    Email?: string;
    name: string;
    photo: string;
  };
  rank?: number;
}

const RankCard = ({photoID, photo, head, User, like, rank}: RankProps) => {
  const router = useRouter();
  const click = useRef<boolean>(false);

  const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = BlankProfile.src;
  }

  const detailMove = () => {
    if(!click.current) router.push('/detail/' + photoID);
    click.current = false;
  }

  const userMove = () => {
    if(User.userID === undefined) return;
    click.current = true;
    console.log(User.userID);
    router.push("/my/" + User.userID);
  }

  return (
    <_.Container onClick={() => detailMove()}>
      {rank &&
        <_.Circle>
          <_.Text weight={900} size={16}>{rank}</_.Text>
        </_.Circle>
      }
      <_.Img src={photo} alt='사진을 불러오는데 실패했습니다.'/>
      <_.BetweenBox>
        <_.GapBox onClick={() => userMove()}>
          <_.UserImg src={ User.photo} alt="" onError={onErrorImg}/>
          <_.NickName>{User.name}</_.NickName>
        </_.GapBox>
        <_.CursorBox>
          <_.Text color={Theme.Gray[50]}>{like}</_.Text>
          <Heart16Filled primaryFill={Theme.Gray[50]}/>
        </_.CursorBox>
      </_.BetweenBox>
      <_.Text weight={700} size={20}>{head}</_.Text>
    </_.Container>
  )
}

export default RankCard;