import Input from "@/components/common/input";
import { useState, useEffect } from "react";
import { TextArea } from "@/components/post/textArea";
import styled from "@emotion/styled";
import { TagAdder } from "@/components/post/tagAdder";
import { Button } from "@/components/common/button/style";
import Image from "next/image";
import axios from "axios";
import Router, { useRouter } from "next/router";

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

export default function PostPage(){
    const [title, setTitle] = useState<string>('');
    const [Desc, setDesc] = useState<string>('');
    const [Photo, setPhoto] = useState<string>('https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/6152bc164687275.63fb405a39dda.jpg');
    const [TagList, setTagList] = useState<string[]>([]);
    const router = useRouter();

    useEffect(()=>{
        setPhoto(localStorage.getItem('imgData') as string);
    },[]);

    const request = () => {
        const token = localStorage.getItem('token');
        if(token === null || !(Photo && title && TagList && Desc)) return;
        axios({
            url: `${BASEURL}/photo`,
            method: 'post',
            headers: {
                "Authorization" : `Bearer ${token}`,
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
    height: 500px;
`