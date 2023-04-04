import { Button } from "../common/button/style";

interface propsType{
    sort: string;
    setSort: React.Dispatch<React.SetStateAction<string>>;
}

export const SortSelecter = ({sort, setSort}:propsType)=>{
    return(
        <>
            <Button Gray25>최신순</Button>
            <Button Gray5>인기순</Button>
        </>
    )
}