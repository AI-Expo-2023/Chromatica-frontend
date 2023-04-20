import RankCard from "@/components/common/RankCard/RankCard"
import styled from "@emotion/styled";

interface propsType{
    data: postDataType[];
    pageNum: number;
}

interface postDataType {
    photoID: number;
    Photo: {
        imageID: number;
        photoID: number;
        userID: string;
        head: string;
        photo: string;
        like: number;
    };
    User: {
        name: string;
        photo: string;
    };
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