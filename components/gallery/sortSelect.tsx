import styled from "@emotion/styled";
import { Button } from "../common/button/style";

interface propsType{
    sort: string;
    setSort: React.Dispatch<React.SetStateAction<string>>;
}

export const SortSelecter = ({sort, setSort}:propsType)=>{
    return(
        <HzDiv>
            <Button Gray25>최신순</Button>
            <Button Gray5>인기순</Button>
        </HzDiv>
    )
}

const HzDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;
    padding: 20px 0;
`