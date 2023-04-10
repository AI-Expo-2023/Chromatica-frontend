import { Add20Filled } from "@fluentui/react-icons"
import { Button } from "../common/button/style"
import { Theme } from "@/styles/theme/Theme"
import { RemovableTag } from "./tagComponent"
import TagSelector from "./tagAdderDropdown"
import { useEffect } from "react"

interface tagAdderProps{
    isTSenabled: boolean;
    setTSstatus: React.Dispatch<React.SetStateAction<boolean>>;
    TagList: string[];
    setTagList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const TagAdder = ({isTSenabled, setTSstatus, TagList, setTagList}:tagAdderProps) => {
    function handleOutsideClick(e){
        if (e.target.closest('.tag-selector') === null) {
            setTSstatus(false);
        }
    }
    useEffect(()=> window.addEventListener('click', handleOutsideClick))

    return(
        <>
            <Button onClick={()=>setTSstatus(!isTSenabled)} className='tag-selector'><Add20Filled primaryFill={Theme.Black}  />태그 추가</Button>
            {isTSenabled ? <TagSelector setTSstatus={setTSstatus} array={TagList} setArray={setTagList} /> : null}
            {TagList.map((data)=>{
                return <RemovableTag key={data} data={data} array={TagList} setArray={setTagList} />;
            })}
        </>
    )
}