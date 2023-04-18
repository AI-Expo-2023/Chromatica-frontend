import { PostLister } from "@/components/my/hearted/PostLister";
import { Title } from "./style";
import Pagination from "@/components/common/pagination/pagination";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

type postType = {
    photo: string;
    head: string;
    tag: string[];
    description: string;
}

const MyHearted = ()=>{
    const [pageNum,setPageNum] = useState<number>(1);
    const [Data,setData] = useState<postType[]>();

    useEffect(()=>{
        axios({
            url: '/user/[userid]/liked',
            method: 'post',
            headers: {
                "accessToken" : "babs",
            },
            data: {
                "photo" : Photo,
                "head" : title,
                "tag" : TagList,
                "description" : Desc,
            }
        })
        .then(function (response) { 
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    },
    [pageNum]);

        

    return(
        <CenterContainer>
            <PaddingContainer>
                <Title>
                    좋아요 누른 작품
                </Title>
                <PostLister data={ddtt} pageNum={pageNum}/>
                <CenterContainer>
                    <Pagination value={pageNum} change={setPageNum} end={Math.ceil(ddtt.length/18)}/>
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

export default MyHearted;