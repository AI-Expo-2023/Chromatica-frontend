import RankCard from "@/components/common/RankCard/RankCard"
import styled from "@emotion/styled";

interface PostProps {
    data: RankProps[];
}

interface RankProps {
    photoID: number;
    head: string;
    photo: string;
    like: number;
    User: {
        userID: string;
        name: string;
        photo: string;
    };
}

export const PostLister = ({data}:PostProps)=>{
    return(
        <SixHorizon>
            {data
                .map((value:RankProps)=>(
                    <RankCard
                        {...value}
                        key={value.photoID}
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