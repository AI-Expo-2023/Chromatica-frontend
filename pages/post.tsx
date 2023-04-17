import Input from "@/components/common/input";
import { useEffect, useState } from "react";
import { TextArea } from "@/components/post/textArea";
import styled from "@emotion/styled";
import { TagAdder } from "@/components/post/tagAdder";
import { Button } from "@/components/common/button/style";
import Image from "next/image";

type postType = {
    photo: string;
    head: string;
    tag: string[];
    description: string;
}

export default function PostPage(){
    const [title, setTitle] = useState<string>('');
    const [Desc, setDesc] = useState<string>('');
    const [Photo, setPhoto] = useState<string>('');
    const [TagList, setTagList] = useState<string[]>([]);

    useEffect(()=>{
        setPhoto(localStorage.getItem('imageData') as string);
    },[]);

    return(
        <CenterContainer>
            <PaddingContainer>
                <PostPreview src={Photo} placeholder="empty" fill alt="업로드하려는 이미지 미리 보기" />
                <Input value={title} setValue={setTitle} title='제목' width="100%" />
                <TextArea value={Desc} setValue={setDesc} title='설명' width="100%"/>
                <TagAdder TagList={TagList} setTagList={setTagList}/>
                <Button MainColor>게시</Button>
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

const PostPreview = styled(Image)`
    position: initial !important;
    border-radius: 8px;
    height: 500px !important;
    width: auto !important;
`