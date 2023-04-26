import Input from "@/components/common/input";
import { useEffect, useState } from "react";
import { TextArea } from "@/components/post/textArea";
import styled from "@emotion/styled";
import { TagAdder } from "@/components/post/tagAdder";
import { Button } from "@/components/common/button/style";
import axios from "axios";
import Router, { useRouter } from "next/router";

export default function PostPage(){
    const [title, setTitle] = useState<string>('');
    const [Desc, setDesc] = useState<string>('');
    const [Photo, setPhoto] = useState<string>('');
    const [TagList, setTagList] = useState<string[]>([]);
    const router = useRouter();

    useEffect(()=>{
        if(localStorage.getItem('imgData') === null){
            alert('권한이 없습니다');
            router.push('/');
        }
        setPhoto(localStorage.getItem('imgData') as string);
    },[]);

    const request = () => {
        if(!(title && Desc)){
            alert('내용과 제목은 필수 사항입니다');
            return;
        }
        axios({
            url: `${process.env.NEXT_PUBLIC_BASEURL}/photo`,
            method: 'post',
            headers: {
                "Authorization" : `Bearer ${localStorage.getItem('token')}`,
            },
            data: {
                photo : Photo,
                head : title,
                tag : TagList,
                description : Desc,
            }
        })
        .then(() => {
            router.push('/');
            alert('성공적으로 게시되었습니다!');
        })
        .catch((error) => {
            console.log(error);
    });
}

    useEffect(()=>{
        setPhoto(localStorage.getItem('imageData') as string);
    },[]);

    return(
        <CenterContainer>
            <PaddingContainer>
                <PostPreview src={Photo} placeholder="empty" alt="업로드하려는 이미지 미리 보기" />
                <Input value={title} setValue={setTitle} title='제목' width="100%" />
                <TextArea value={Desc} setValue={setDesc} title='설명' width="100%"/>
                <TagAdder TagList={TagList} setTagList={setTagList}/>
                <Button MainColor onClick={() => request()}>게시</Button>
            </PaddingContainer>
        </CenterContainer>
    )
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
    display: flex;
    justify-content: center;
`

const PostPreview = styled.img`
    position: initial !important;
    border-radius: 8px;
    height: 500px !important;
    width: auto !important;
`