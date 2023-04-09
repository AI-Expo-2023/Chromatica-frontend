import { AddCircle20Filled, Dismiss24Filled } from '@fluentui/react-icons';
import { useEffect, useRef, useState } from 'react';
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
    const dropdownRef = useRef(null);

    function outsideClickHandler(e){
        console.log(dropdownRef);
        if(dropdownRef.current && !dropdownRef.current.contains(e.target)) close(false);
    }
    useEffect(()=>{
        window.addEventListener("click",outsideClickHandler);
        return function(){
            window.removeEventListener("click",outsideClickHandler);
        }
    },[]);

    return(
        <_.addTagMain ref={dropdownRef}>
            <IconButton onClick={()=>close(false)}>
                <Dismiss24Filled primaryFill={Theme.Black} />
            </IconButton>
            <Input title='태그 검색' width='100%' value={searchKeyword} setValue={setKeyword}/>
            <_.tagOptionList>
                {tempData.filter(data=> {return data.includes(searchKeyword)}).map((text)=>(<TagListOption tagName={text} array={array} setArray={setArray} key={text} />))}
            </_.tagOptionList>
        </_.addTagMain>
    )
}

function TagListOption({tagName, array, setArray}:option){
    function addTag(){
        if(array.length>4) {
            alert('태그는 5개까지만 추가할 수 있습니다');
            return null;
        }
        setArray([...array,tagName]);
    }

    if(!array.includes(tagName)){
        return(
        <_.tagOptionDiv>
            <IconButton onClick={addTag}>
                <AddCircle20Filled primaryFill={Theme.Gray[25]}/>
            </IconButton>
            <p>{tagName}</p>
        </_.tagOptionDiv>
        )
    }
    else return null;
}

const IconButton = styled.button`
    border: none;
    background: none;
    width: 24px;
    cursor: pointer;
`

export default TagSelector;