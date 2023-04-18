import { PostLister } from "@/components/my/hearted/PostLister";
import { Title } from "./style";
import Pagination from "@/components/common/pagination/pagination";
import { useState } from "react";
import styled from "@emotion/styled";

const MyHearted = ()=>{
    const [pageNum,setPageNum] = useState<number>(1);

    const ddtt = [
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:22,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:23,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:222,
            head: '티모대위 출동',
        },
    ]//일해라 서버

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