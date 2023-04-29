import Pagination from "@/components/common/pagination/pagination";
import { PostListerWithSort } from "@/components/gallery/postListerSortable";
import { SortSelecter } from "@/components/gallery/sortSelect";
import styled from "@emotion/styled";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface ResponseType{
    message: string;
    sortPhoto: PostType[];
}

interface PostType {
    photoID: number;
    photo: string;
    head: string;
    like: number;
    User: {
        name: string;
        photo: string;
        userID: string;
    }
}

export default function Gallery() {
    const {query, isReady} = useRouter();
    const [isPopular, setIsPopular] = useState<boolean>(false);
    const [Page, setPage] = useState<number>(1);
    const [Data, setData] = useState<ResponseType>({
        message: "",
        sortPhoto:[]
    });

    useEffect(()=>{
        if(isReady===false) return;
        if(query.sort === 'popular')
            setIsPopular(true);
    },[isReady])

    useEffect(()=>{
        if(isPopular){ //인기순
            axios({
                url: `${process.env.NEXT_PUBLIC_BASEURL}/rank`,
                method: 'get'
            })
            .then((response) => {
                setData(response.data as ResponseType);
            })
            .catch((error) => {
                alert(`오류가 발생했습니다(${error.status})`);
            })
        }
        else{
            axios({ //최신순
                url: `${process.env.NEXT_PUBLIC_BASEURL}/gallery/${Page}`,
                method: 'get',
            })
            .then((response) => {
                setData(response.data as ResponseType);
            })
            .catch((error) => {
                alert(`오류가 발생했습니다(${error.status})`);
            })
        }
    },[Page, isPopular])

    return(
        <CenterContainer>
            <PaddingContainer>
                <SortSelecter sort={isPopular} setSort={setIsPopular} />
                <PostListerWithSort sort={isPopular} data={Data.sortPhoto} />
                {isPopular ? null : <CenterContainer><Pagination value={Page} change={setPage} /></CenterContainer>}
            </PaddingContainer>
        </CenterContainer>
    );
}

const PaddingContainer = styled.div`
    width: 1300px;
    display: flex;
    gap: 12px;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 20px;
`

const CenterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`