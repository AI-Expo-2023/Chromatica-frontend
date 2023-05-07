import React, { useState, useEffect, useRef } from 'react';
import * as _ from './style';
import BlankProfile from '@/public/assets/image/personIcon.png';
import { ArrowDownload20Filled, ErrorCircle20Regular, Heart20Filled } from '@fluentui/react-icons';
import { Theme } from '@/styles/theme/Theme';
import { useRouter } from 'next/router';
import ReportView from './reportView';
import Tag from '../common/tag';
import axios from "axios";
import { Button } from '../common/button/style';
import DownloabModal from '../img2img/downloabModal';

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
}

const Detail = ({ word }: DetailProps) => {
  const [keyWord, setKeyWord] = useState<string | string[] | undefined>('');
  const [Like, setLike] = useState<boolean>(false);
  const [Data, setData] = useState<resProps | undefined>();
  const [report, setReport] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const Time = useRef<NodeJS.Timer | undefined>();
  const router = useRouter();

  const GetData = (word: string) => {
    const token = window.localStorage.getItem('token');
    if (word === undefined) return;
    if (token === null) {
      axios({
        method: 'GET',
        url: `${process.env.NEXT_PUBLIC_BASEURL}/photo/${word}`,
      })
        .then((res) => {
          setData(res.data.image);
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
          setLike(res.data.hadLiked);
          setData(res.data.image);
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
      .then(() => {
        setLike(!Like);
        if (Data) {
          setData({
            ...Data,
            like: !Like ? Data.like + 1 : Data.like - 1
          });
        }
      })
      .catch((err) => {
        if (err.response.status == 409) {
          alert("본인 작품은 좋아요를 누를 수 없습니다.")
        }
        else {
          console.error(err)
        }
      })
  }

  const isLike = () => {
    const token = window.localStorage.getItem('token');
    if (token === null) return;
    if (Time.current) {
      clearInterval(Time.current);
      Time.current = undefined;
    }
    Time.current = setInterval(() => {
      PostLike();
      clearInterval(Time.current);
      Time.current = undefined;
    }, 500)
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
        if (err.response.status == 409) {
          if (err.response.message == "자신의 게시글은 신고할 수 없습니다.") alert("자신의 게시글은 신고할 수 없습니다.")
          else alert("한번만 신고가 가능합니다")
        }
      })
  }

  useEffect(() => {
    setKeyWord(word);
    GetData(word as string)
  }, [word])

  const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = BlankProfile.src;
  }


  const changePage = () => {
    const id = localStorage.getItem("userId");

    if (id == Data?.user.userID) router.push(`/my`)
    else router.push(`/my/${Data?.user.userID}`)
  }


  return (
    <>
      <DownloabModal openDownloadModal={openModal} setOpenDownloadModal={setOpenModal} imgData={Data?.photo} />
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
            <_.Img src={Data?.photo} alt='사진을 불러오는데 실패했습니다.' />
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
          <_.GapBox onClick={() => changePage()}>
            <_.ImgCircle width={28} height={28} src={Data?.user.photo} alt='' onError={onErrorImg} />
            <_.Text>{Data?.user.name}</_.Text>
          </_.GapBox>
          <_.Text>{Data?.description}</_.Text>
          <_.GapBox>
            <_.LikeBtn onClick={() => isLike()}>
              <Heart20Filled primaryFill={Like ? Theme.Red : Theme.Black} />
              <_.LikeText bool={Like}>{Data?.like}</_.LikeText>
            </_.LikeBtn>
            <Button Gray5 onClick={() => setOpenModal(!openModal)}> <ArrowDownload20Filled primaryFill='black' /> 다운로드</Button>
          </_.GapBox>
          <_.GapBox>
            <_.ErrorBox onClick={() => readyReport()}>
              <ErrorCircle20Regular primaryFill={Theme.Red} />
              <_.ErrorText>신고</_.ErrorText>
            </_.ErrorBox>
          </_.GapBox>
        </_.Main>
      </_.Container>
    </>
  )
}

export default Detail;