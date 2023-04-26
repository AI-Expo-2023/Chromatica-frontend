import RankCard from "@/components/common/RankCard/RankCard"
import styled from "@emotion/styled";

export const PostListerWithSort = ({data, isPopular}:any)=>{
    return(
        <SixHorizon>
            {data.map((data, index)=>(
                    <RankCard
                        head={data.head}
                        like={data.like}
                        photo={data.photo}
                        photoID={data.photoID}
                        user={data.User}
                        rank={isPopular ? index+1 : undefined} //정렬이 popular일 때 순위 표시
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