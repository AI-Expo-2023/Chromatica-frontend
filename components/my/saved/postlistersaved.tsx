import RankCardImg from "@/components/common/RankCard/RankCardImg"
import styled from "@emotion/styled"

export const PostListerSaved = ({data}:any)=>{
    return(
        <SixHorizon>
            {data.map((aa)=>(
                <RankCardImg photoID={aa.imageID} photo={aa.photo} />
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

// {Data?.image.map((mp)=>{
//     return 
// })}