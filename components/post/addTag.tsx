import { AddCircle20Filled, Dismiss24Filled } from '@fluentui/react-icons';
import { useState } from 'react';
import * as _ from './style'
import Input from '../common/input';
import { Theme } from "@/styles/theme/Theme";
import styled from '@emotion/styled';

interface main {
    close:React.Dispatch<React.SetStateAction<boolean>>;
    array: string[];
    setArray: React.Dispatch<React.SetStateAction<string[]>>;
}

interface option{
    tagName: string;
    array: string[];
    setArray: React.Dispatch<React.SetStateAction<string[]>>;
}

function TagSelector({close, array, setArray}:main){
    const [searchKeyword, setKeyword] = useState<string>('');
    const tempData = ["띵명작","자연","사이버펑크","현대적","도시","현대차","타이어펑크","개띵작","머리가띵","현대의적","띵"];
    return(
        <_.addTagMain>
            <IconButton onClick={()=>close(false)}>
                <Dismiss24Filled primaryFill={Theme.Black} />
            </IconButton>
            <Input title='태그 검색' width='100%' value={searchKeyword} setValue={setKeyword}/>
            <_.tagOptionList>
                {tempData.filter(data=> {return data.includes(searchKeyword)}).map((text)=>(<TagListOption tagName={text} key={text} />))}
            </_.tagOptionList>
        </_.addTagMain>
    )
}

function TagListOption({tagName}:option){
    return(
    <_.tagOptionDiv>
        <AddCircle20Filled primaryFill={Theme.Gray[25]}/>
        <p>{tagName}</p>
    </_.tagOptionDiv>
    )
}

const IconButton = styled.button`
    border: none;
    background: none;
    width: 24px;
    cursor: pointer;
`

export default TagSelector;