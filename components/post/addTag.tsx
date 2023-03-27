import { AddCircle20Filled, Dismiss24Filled } from '@fluentui/react-icons';
import { useState } from 'react';
import Input from '../common/input';

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
    <div>
        <AddCircle20Filled/>
        <p>태그이름</p>
    </div>
    )
}

export default TagSelector;