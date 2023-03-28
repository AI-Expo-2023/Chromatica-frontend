import { AddCircle20Filled, Dismiss24Filled } from '@fluentui/react-icons';
import { useState } from 'react';
import * as _ from './style'
import Input from '../common/input';
import { Theme } from "@/styles/theme/Theme";

function TagSelector(){
    const [searchKeyword, setKeyword] = useState<string>('');
    const tempData = ["띵명작","자연","사이버펑크","현대적","도시"];

    return(
        <div>
            <Dismiss24Filled primaryFill={Theme.Black} />
            <Input title='태그 검색' width='100%' value={searchKeyword} setValue={setKeyword}/>
            <div className='adf'>
                {tempData.filter(data=> {return data.includes(searchKeyword)}).map((text)=>(<TagListOption tagName={text} key={text} />))}
            </div>
        </div>
    )
}

function TagListOption({tagName}:string){
    return(
    <_.tagOptionDiv>
        <AddCircle20Filled primaryFill={Theme.Gray[25]}/>
        <p>{tagName}</p>
    </_.tagOptionDiv>
    )
}

export default TagSelector;