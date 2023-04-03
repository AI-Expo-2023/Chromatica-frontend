import { PostLister } from "@/components/my/hearted/PostLister";
import { Title } from "./style";
import Pagination from "@/components/common/pagination/pagination";
import { useState } from "react";

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
        {
            photo:'asdfsdfg',
            user:'구른다슈레기물안경',
            like:22,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:422,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:2,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
        {
            photo:'adfs',
            user:'구른다슈레기물안경',
            like:29,
            head: '티모대위 출동',
        },
    ]//일해라 서버

    return(
        <>
            <Title>
                좋아요 누른 작품
            </Title>
            <PostLister data={ddtt} />
            <Pagination value={pageNum} change={setPageNum} end={Math.ceil(ddtt.length/18)}/>
        </>
    )
}

export default MyHearted;