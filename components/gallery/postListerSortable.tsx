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
            {data.map((data, index)=>(
                    <RankCard
                        head={data.head}
                        like={data.like}
                        photo={data.photo}
                        photoID={data.photoID}
                        user={data.User}
                        rank={sort === 'popular' ? index+1 : undefined}
                        key={data.photoID + data.User.userID}
                    />
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