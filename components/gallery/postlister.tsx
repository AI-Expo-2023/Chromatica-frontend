import RankCard from "@/components/common/RankCard/RankCard"
import styled from "@emotion/styled";

interface propsType{
    data: postDataType[];
    pageNum?: number;
    sort: string;
}

interface postDataType {
    photo: string;
    user: string;
    head: string;
    like: number;
}

export const PostListerWithSort = ({data, pageNum, sort}:propsType)=>{
    return(
        <SixHorizon>
            {data
                .map((aa, index)=>(
                    <RankCard head={aa.head+index} like={aa.like} name={aa.user} photo={aa.photo} key={aa.photo+aa.like} photoID={aa.photo} />
            ))}
        </SixHorizon>
    )
}

const SixHorizon = styled.div`
    max-width: 1300px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`