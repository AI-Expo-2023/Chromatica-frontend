import { PostLister } from "@/components/my/hearted/PostLister";
import { Title } from "./style";
import Pagination from "@/components/common/pagination/pagination";
import { useState } from "react";

const MyHearted = ()=>{
    const [pageNum,setPageNum] = useState<number>(1);

    return(
        <>
            <Title>
                좋아요 누른 작품
            </Title>
            <PostLister />
            <Pagination value={pageNum} change={setPageNum} end={30}/>
        </>
    )
}

export default MyHearted;