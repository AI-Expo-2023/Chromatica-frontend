import { AddCircle20Filled, Dismiss24Filled } from '@fluentui/react-icons';
import { useState } from 'react';
import * as _ from './style'
import Input from '../common/input';
import { Theme } from "@/styles/theme/Theme";

interface aa {
    close:React.Dispatch<React.SetStateAction<boolean>>
}

function TagSelector({close}:aa){
    const [searchKeyword, setKeyword] = useState<string>('');
    const tempData = ["띵명작","자연","사이버펑크","현대적","도시","현대차","타이어펑크","개띵작","머리가띵","현대의적","띵"];
    return(
        <_.addTagMain>
            <button onClick={()=>close(false)}>
                <Dismiss24Filled primaryFill={Theme.Black} />
            </button>
            <Input title='태그 검색' width='100%' value={searchKeyword} setValue={setKeyword}/>
            <_.tagOptionList>
                {tempData.filter(data=> {return data.includes(searchKeyword)}).map((text)=>(<TagListOption tagName={text} key={text} />))}
            </_.tagOptionList>
        </_.addTagMain>
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