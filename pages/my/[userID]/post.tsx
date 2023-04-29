import { PostLister } from "@/components/my/PostLister";
import { Title } from "../style";
import Pagination from "@/components/common/pagination/pagination";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import Router from "next/router";

type responseType = {
  manyImage: number;
  images: postType[];
}

type postType = {
  photoID: number;
  head: string;
  photo: string;
  like: number;
  User: {
    userID: string;
    name: string;
    photo: string;
  };
}

const AnotherPost = () => {
  const [pageNum, setPageNum] = useState<number>(1);
  const [Data, setData] = useState<responseType>({
    manyImage: 0,
    images: [],
  });

  useEffect(() => {
    if (!Router.ready) return;
    const {userID} = Router.query;

    axios({
      url: `${process.env.NEXT_PUBLIC_BASEURL}/user/${userID}/image/${pageNum}`,
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => {
        setData(response.data as responseType);
      })
      .catch((error) => {
        alert(`오류가 발생했습니다(${error.status})`);
      })
  },
    [pageNum]);

  return (
    <CenterContainer>
      <PaddingContainer>
        <Title>
          업로드한 작품
        </Title>
        <PostLister data={Data.images} />
        <CenterContainer>
          <Pagination
            value={pageNum}
            change={setPageNum}
            end={Math.ceil(Data.manyImage / 18) === 0 ? 1 : Math.ceil(Data.manyImage / 18)}
          />
        </CenterContainer>
      </PaddingContainer>
    </CenterContainer>
  )
}

const PaddingContainer = styled.div`
    width: 1300px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 20px;
`

const CenterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export default AnotherPost;