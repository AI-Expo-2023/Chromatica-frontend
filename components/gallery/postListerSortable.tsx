import RankCard from "@/components/common/RankCard/RankCard"
import styled from "@emotion/styled";

interface propsType{
    data: postDataType[];
    pageNum?: number;
    sort: string;
}

interface postDataType {
    photoID: number;
    photo: string;
    head: string;
    like: number;
    createdAt: string;
    User: {
        name: string;
        photo: string;
        userID: string;
    }
}

export const PostListerWithSort = ({data, sort}:propsType)=>{
    return(
        <SixHorizon>
            {data
                .map((aa, index)=>(
                    <RankCard head={aa.head} like={aa.like} name={aa.user} photo={aa.photo} key={aa.photo+aa.like} photoID={aa.photo} rank={sort=== 'popular' ? index+1 : undefined}/>
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