import React, { useState, useEffect, useRef } from 'react';
import * as _ from './style'
import { ErrorCircle20Regular, Heart20Filled } from '@fluentui/react-icons';
import { Theme } from '@/styles/theme/Theme';
import { useRouter } from 'next/router';
import ReportView from './reportView';
import Tag from '../common/tag';
import axios from "axios";

interface DetailProps {
  word: string | string[] | undefined;
}

interface resProps {
  photo: string;
  head: string;
  user: string;
  description: string;
  like: number;
  tag: string[];
  reported: number;
}

const Detail = ({ word }: DetailProps) => {
  const [keyWord, setKeyWord] = useState<string | string[] | undefined>('');
  const [like, setLike] = useState<boolean>(false);
  const [Data, setData] = useState<resProps | undefined>();
  const [report, setReport] = useState<boolean>(false)
  const Time = useRef<NodeJS.Timer | undefined>()

  const GetData = (word: string) => {
    const token = window.localStorage.getItem('token');
    if(word === undefined) return;
    if (token === null) {
      axios({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_BASEURL}/photo/${word}`,
      })
        .then((res) => {
          setData({
            ...res.data.image,
            tag: res.data.image.tag.replace(' ', '').split(',')
          });
        })
        .catch((err) => {
          console.error(err);
        })
    } else {
      axios({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_BASEURL}/photo/${word}`,
        headers: {
          accessToken: `Bearer ${token}`
        }
      })
        .then((res) => {
          setData({
            ...res.data.image,
            tag: res.data.image.tag.replace(' ', '').split(',')
          });
          setLike(res.data.hadliked);
        })
        .catch((err) => {
          console.error(err);
        })
    }
  }

  const PostLike = () => {
    const token = window.localStorage.getItem('token');
    if (token === null) return;
    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_BASEURL}/photo/${(keyWord as string)}/like`,
      headers: {
        accessToken: `Bearer ${token}`
      }
    })
      .catch((err) => {
        console.error(err);
      })
  }

  const isLike = (like: boolean) => {
    const token = window.localStorage.getItem('token');
    if (token === null) return;
    setLike(like);
    if (Time.current) {
      clearInterval(Time.current);
      Time.current = undefined;
    }
    Time.current = setInterval(() => {
      if (like) PostLike();
      clearInterval(Time.current);
      Time.current = undefined;
    }, 1000)
  }

  const readyReport = () => {
    const token = window.localStorage.getItem('token');
    if (token === null) return;
    setReport(true);
  }

  const PostReport = () => {
    setReport(false);
    const token = window.localStorage.getItem('token');
    if (token === null) return;
    axios({
      method: 'POST',
      url: `${process.env.NEXT_PUBLIC_BASEURL}/photo/${(keyWord as string)}/report`,
      headers: {
        accessToken: `Bearer ${token}`
      }
    })
    .then(() => {
      alert('성공적으로 신고했습니다!');
    })
      .catch((err) => {
        console.error(err);
      })
  }

  useEffect(() => {
    setKeyWord(word);
    GetData(word as string)
  }, [word])

  return (
    <_.Container>
      {
        report &&
        <ReportView
          Toggle={() => setReport(false)}
          Report={PostReport}
        />
      }
      <_.Main>
        <_.Img src={Data?.photo} />
        <_.Text weight={800} size={24}>{Data?.head}</_.Text>
        <_.GapBox>
          {
            Data?.tag.map((data, index) => <Tag key={index} basic={true}>{data}</Tag>)
          }
        </_.GapBox>
        <_.GapBox>
          <_.ImgCircle width={28} height={28} />
          <_.Text>이름이름</_.Text>
        </_.GapBox>
        <_.Text>{Data?.description}</_.Text>
        <_.GapBox>
          <_.LikeBtn onClick={() => isLike(!like)}>
            <Heart20Filled primaryFill={like ? Theme.Red : Theme.Black} />
            <_.LikeText bool={like}>{Data ? Data.like + 1 : 0}</_.LikeText>
          </_.LikeBtn>
        </_.GapBox>
        <_.GapBox>
          <_.ErrorBox onClick={() => readyReport()}>
            <ErrorCircle20Regular primaryFill={Theme.Red} />
            <_.ErrorText>신고</_.ErrorText>
          </_.ErrorBox>
        </_.GapBox>
      </_.Main>
    </_.Container>
  )
}

export default Detail;