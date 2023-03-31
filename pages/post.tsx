import Input from "@/components/common/input";
import TagSelector from "@/components/post/addTag";
import { useState } from "react";
import { Button } from "@/components/common/button/style";
import { Add20Filled } from "@fluentui/react-icons";
import { Theme } from "@/styles/theme/Theme";
import { TextArea } from "@/components/post/textArea";
import { RemovableTag } from "@/components/post/tagRemovable";
import styled from "@emotion/styled";

type postType = {
    photo: string;
    head: string;
    tag: string[];
    description: string;
}

export default function PostPage(){
    const [title, setTitle] = useState<string>('');
    const [Desc, setDesc] = useState<string>('');
    const [Photo, setPhoto] = useState<string>('https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/6152bc164687275.63fb405a39dda.jpg');
    const [TagList, setTagList] = useState<string[]>(["띵명작","자연","사이버펑크","현대적","도시"]);

    const [isTSenabled, setTSstatus] = useState<boolean>(false);

    return(
        <CenterContainer>
            <PaddingContainer>
                <PostPreview src={Photo} alt="업로드하려는 이미지 미리 보기" />
                <Input value={title} setValue={setTitle} title='제목' width="100%" />
                <TextArea value={Desc} setValue={setDesc} title='설명' width="100%"/>
                <Horizonal>
                    <Button onClick={()=>setTSstatus(!isTSenabled)}><Add20Filled primaryFill={Theme.Black}/>태그 추가</Button>
                    {isTSenabled ? <TagSelector close={setTSstatus} array={TagList} setArray={setTagList} /> : null}
                    {TagList.map((data)=>{
                        return <RemovableTag key={data} data={data} array={TagList} setArray={setTagList} />;
                    })}
                </Horizonal>
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
    border-radius: 8px;
    height: 500px;
`

const Horizonal = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
`