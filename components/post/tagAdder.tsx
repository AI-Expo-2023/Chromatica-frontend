import { Add20Filled } from "@fluentui/react-icons"
import { Button } from "../common/button/style"
import { Theme } from "@/styles/theme/Theme"
import { RemovableTag } from "./tagComponent"
import TagSelector from "./tagAdderDropdown"
import { useEffect, useState } from "react"
import styled from "@emotion/styled"

interface tagAdderProps {
    TagList: string[];
    setTagList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const TagAdder = ({ TagList, setTagList }: tagAdderProps) => {
    const [isTSenabled, setTSstatus] = useState<boolean>(false);
    function handleOutsideClick(e: any) {
        if (e.target.closest('.tag-selector') === null) {
            setTSstatus(false);
        }
    }
    useEffect(() => window.addEventListener('click', handleOutsideClick))

    return (
        <Horizonal>
            <Button Gray5 onClick={() => setTSstatus(!isTSenabled)} className='tag-selector'><Add20Filled primaryFill={Theme.Black} />태그 추가</Button>
            {isTSenabled ? <TagSelector setTSstatus={setTSstatus} array={TagList} setArray={setTagList} /> : null}
            {TagList.map((data) => {
                return <RemovableTag key={data} data={data} array={TagList} setArray={setTagList} />;
            })}
        </Horizonal>
    )
}

const Horizonal = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    flex-wrap: wrap;
`