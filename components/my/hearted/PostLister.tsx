import RankCard from "@/components/common/RankCard/RankCard"
import styled from "@emotion/styled";

interface propsType{
    data: any[];
    pageNum: number;
}

export const PostLister = ({data, pageNum}:propsType)=>{
    return(
        <SixHorizon>
            {data
                .map((aa, index)=>(
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