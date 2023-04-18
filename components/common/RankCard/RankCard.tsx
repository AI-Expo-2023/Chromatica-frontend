import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { Heart16Filled } from '@fluentui/react-icons';
import { Theme } from '@/styles/theme/Theme';
import * as _ from './style'

interface RankProps {
  photoID: number;
  photo: string;
  head: string;
  like: number;
  user: {
    userID?: string;
    Email?: string;
    name: string;
    photo: string;
  };
  rank?: number;
}

const RankCard = ({photoID, photo, head, user, like, rank}: RankProps) => {
  const router = useRouter();
  const click = useRef<boolean>(false);

  const detailMove = () => {
    if(!click.current) router.push('/detail/' + photoID);
    click.current = false;
  }

  const userMove = () => {
    if(user.userID === undefined) return;
    click.current = true;
    router.push('/user/info/:' + user.userID);
  }

  return (
    <_.Container onClick={() => detailMove()}>
      {rank &&
        <_.Circle>
          <_.Text weight={900} size={16}>{rank}</_.Text>
        </_.Circle>
      }
      <_.Img src={photo}/>
      <_.BetweenBox>
        <_.GapBox onClick={() => userMove()}>
          <_.UserImg src={user.photo}/>
          <_.NickName>{user.name}</_.NickName>
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