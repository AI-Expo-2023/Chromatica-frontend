import RankCard from "@/components/common/RankCard/RankCard"
import styled from "@emotion/styled";

export const PostLister = ({data}:any)=>{
    return(
        <SixHorizon>
            {data
                .map((aa)=>(
                    <RankCard
                        photoID={aa.Photo.photoID}
                        photo={aa.Photo.photo}
                        head={aa.Photo.head}
                        user={aa.User}
                        like={aa.Photo.like}
                        key={aa.photoID}
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