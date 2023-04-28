import RankCardImg from "@/components/common/RankCard/RankCardImg"
import styled from "@emotion/styled"

interface PostProps {
    data: postType[]
}

interface postType{
    imageID: number;
    userID: string;
    photo: string;
}

export const PostListerSaved = ({data}: PostProps)=>{
    return(
        <SixHorizon>
            {data.map((aa: postType)=>(
                <RankCardImg photoID={aa.imageID} photo={aa.photo} key={aa.imageID}/>
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