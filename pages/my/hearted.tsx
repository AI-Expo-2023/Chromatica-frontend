import { PostLister } from "@/components/my/PostLister";
import { Title } from "../../styles/page/myStyle";
import Pagination from "@/components/common/pagination/pagination";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

type responseType = {
    manyImage: number;
    images: RankProps[];
}

type UserProps = {
    userID: string;
    name: string;
    photo: string;
}

type resType = {
    photoID: number;
    Photo: {
        photoID: number;
        photo: string;
        head: string;
        like: number;
    };
    User: UserProps;
}

interface RankProps {
    photoID: number;
    photo: string;
    head: string;
    like: number;
    User: UserProps;
}

const MyHearted = ()=>{
    const [pageNum,setPageNum] = useState<number>(1);
    const [Data,setData] = useState<responseType>();

    useEffect(()=>{
        axios({
            url: `${process.env.NEXT_PUBLIC_BASEURL}/user/liked/${pageNum}`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then((response) => {
            setData({
                manyImage: response.data.manyImage,
                images: response.data.images.map((value: resType): RankProps => {
                    const {Photo, User} = value;
                    return { ...Photo, User }
                })
            })
        })
        .catch((error) => {
            alert(`오류가 발생했습니다(${error.status})`);
        })
    },
    [pageNum]);

    return(
        <CenterContainer>
            <PaddingContainer>
                <Title>
                    좋아요 누른 작품
                </Title>
                {Data &&
                <>
                    <PostLister data={Data.images}/>
                    <CenterContainer>
                        <Pagination
                            value={pageNum}
                            change={setPageNum}
                            end={Math.ceil(Data.manyImage/18) === 0 ? 1 : Math.ceil(Data.manyImage/18)}
                        />
                    </CenterContainer>
                </>
                }
                
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

export default MyHearted;