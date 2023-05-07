import Pagination from "@/components/common/pagination/pagination";
import { PostListerSaved } from "@/components/my/saved/postlistersaved";
import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react"
import { Title } from "../../styles/page/myStyle";

interface responseType {
    manyImage: number;
    image: postType[];
}

interface postType{
    imageID: number;
    userID: string;
    photo: string;
}

const MySaved = () => {
    const [Data, setData] = useState<responseType>({
        manyImage: 0,
        image: [],
    });
    const [pageNum, setPageNum] = useState<number>(1);

    useEffect(()=>{
        axios({
            url: `${process.env.NEXT_PUBLIC_BASEURL}/user/save/${pageNum}`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${localStorage.getItem('token')}`,
            }})
            .then(function (response) {
                setData(response.data as responseType);
            })
            .catch(function (error) {
                alert(`오류가 발생했습니다(${error.status})`);
            })
        },[])

    return(
        <CenterContainer>
            <PaddingContainer>
                <Title>임시 저장한 작품</Title>
                <PostListerSaved data={Data?.image} />
                <CenterContainer>
                <Pagination
                    value={pageNum}
                    change={setPageNum}
                    end={Math.ceil(Data.manyImage/18) === 0 ? 1 : Math.ceil(Data.manyImage/18)}
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

export default MySaved;