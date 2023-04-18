import { Button } from "@/components/common/button/style";
import * as _ from "./style"

const MyGreat = () => {
    return(
        <_.Flex>
            <_.Warpper>
                <_.Work>좋아요 누른 작품</_.Work>
                <Button Black>모두 보기</Button>
            </_.Warpper>
            <_.List></_.List>
        </_.Flex>
    );
}

export default MyGreat;