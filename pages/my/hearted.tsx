import { PostLister } from "@/components/my/hearted/PostLister";
import { Title } from "./style";
import Pagination from "@/components/common/pagination/pagination";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

type responseType = {
    manyImage: number;
    images: postType[];
}

type postType = {
    photo: string;
    head: string;
    tag: string[];
    description: string;
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
                "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Inp4Y3YiLCJpYXQiOjE2ODE5ODg5NTZ9.sl0MRs2l3yXZHm458RMwwiySVfECe9u6iaex_lPObos",
            }
        })
        .then(function (response) {
            setData(response.data as responseType);
        })
        .catch(function (error) {
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
                    <PostLister data={Data.images} pageNum={pageNum}/>
                    <CenterContainer>
                        <Pagination value={pageNum} change={setPageNum} end={Math.ceil(Data.manyImage/18)}/>
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