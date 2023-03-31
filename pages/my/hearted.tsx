import { PostLister } from "@/components/my/hearted/PostLister";
import { Title } from "./style";

const MyHearted = ()=>{
    return(
        <>
            <Title>
                좋아요 누른 작품
            </Title>
            <PostLister />
        </>
    )
}

export default MyHearted;