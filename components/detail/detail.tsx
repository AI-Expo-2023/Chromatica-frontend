import React, { useState, useEffect } from 'react';
import * as _ from './style'
import { ErrorCircle20Regular, Heart20Filled } from '@fluentui/react-icons';
import { Theme } from '@/styles/theme/Theme';
import Tag from '../common/tag';
import { Button } from '../common/button/style';

interface DetailProps {
  word: string | string[] | undefined;
}

const Detail = ({ word }: DetailProps) => {
  const [keyWord, setKeyWord] = useState<string | string[] | undefined>('');
  const [like, setLike] = useState<boolean>(false);

  useEffect(() => {
    setKeyWord(word);
  }, [word])

  return (
    <_.Container>
      <_.Main>
        {/* 이미지 width와 height는 api나오면 할 예정 */}
        <_.Img />
        <_.Text weight={800} size={24}>그저 제목일 뿐임</_.Text>
        <_.GapBox>
          <Tag basic={true}>그저 태그</Tag>
          <Tag basic={true}>그저 태그</Tag>
          <Tag basic={true}>그저 태그</Tag>
        </_.GapBox>
        <_.GapBox>
          <_.ImgCircle width={28} height={28} />
          <_.Text>이름이름</_.Text>
        </_.GapBox>
        <_.Text>그저 설명</_.Text>
        <_.GapBox>
          <_.LikeBtn onClick={() => setLike(!like)}>
            <Heart20Filled primaryFill={like ? Theme.Red : Theme.Black} />
            <_.LikeText bool={like}>123</_.LikeText>
          </_.LikeBtn>
        </_.GapBox>
        <_.GapBox>
          <_.ErrorBox>
            <ErrorCircle20Regular primaryFill={Theme.Red} />
            <_.ErrorText>신고</_.ErrorText>
          </_.ErrorBox>
        </_.GapBox>
      </_.Main>
    </_.Container>
  )
}

export default Detail;