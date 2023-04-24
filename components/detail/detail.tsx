import React, { useState, useEffect, useRef } from 'react';
import * as _ from './style';
import BlankProfile from '@/public/assets/image/personIcon.png';
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
  user: {
    userID: string;
    name: string;
    photo: string;
  };
  description: string;
  like: number;
  tag: string[];
  reported: number;
  hadliked: boolean;
}

const Detail = ({ word }: DetailProps) => {
  const [keyWord, setKeyWord] = useState<string | string[] | undefined>('');
  const [like, setLike] = useState<boolean>(false);
  const [Data, setData] = useState<resProps | undefined>();
  const [report, setReport] = useState<boolean>(false);
  const Time = useRef<NodeJS.Timer | undefined>();
  const router = useRouter();

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
            tag: res.data.image.tag.replace(' ', '').split(','),
            hadliked: res.data.hadliked
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
          "Authorization": `Bearer ${token}`
        }
      })
        .then((res) => {
          setData({
            ...res.data.image,
            tag: res.data.image.tag.replace(' ', '').split(','),
            hadliked: res.data.hadliked
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
        "Authorization": `Bearer ${token}`
      }
    })
      .catch((err) => {
        console.error(err);
        setLike(Data ? Data.hadliked : false);
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
      PostLike();
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
        "Authorization": `Bearer ${token}`
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

  const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = BlankProfile.src;
  }

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
        <_.ImgContainer>
        <_.Img src={Data?.photo} alt='사진을 불러오는데 실패했습니다.'/>
        </_.ImgContainer>
        <_.Text weight={800} size={24}>{Data?.head}</_.Text>
        <_.GapBox>
          {
            Data?.tag.map((data, index) => 
            <div onClick={() => router.push(`/search/${data}`)}>
            <Tag
              key={index}
              basic={true}
              >
                {data}
              </Tag>
              </div>
            )
          }
        </_.GapBox>
        <_.GapBox onClick={() => router.push(`/my/${Data?.user.userID}`)}>
          <_.ImgCircle width={28} height={28} src={Data?.user.photo} alt='' onError={onErrorImg} />
          <_.Text>{Data?.user.name}</_.Text>
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