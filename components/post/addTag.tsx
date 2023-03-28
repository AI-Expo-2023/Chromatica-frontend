import { AddCircle20Filled, Dismiss24Filled } from '@fluentui/react-icons';
import { useState } from 'react';
import * as _ from './style'
import Input from '../common/input';
import { Theme } from "@/styles/theme/Theme";

function TagSelector(){
    const [searchKeyword, setKeyword] = useState<string>('');

    return(
        <div>
            <Dismiss24Filled />
            <Input title='태그 검색' width='100%' value={searchKeyword} setValue={setKeyword}/>
            <div className='adf'>
                <TagListOption/>
                <TagListOption/>
                <TagListOption/>
                <TagListOption/>
            </div>
        </div>
    )
}

function TagListOption(){
    return(
    <_.tagOptionDiv>
        <AddCircle20Filled color={Theme.Gray[75]}/>
        <p>태그이름</p>
    </_.tagOptionDiv>
    )
}

export default TagSelector;