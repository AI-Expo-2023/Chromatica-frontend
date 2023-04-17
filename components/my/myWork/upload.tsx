import { Button } from "@/components/common/button/style";
import * as _ from "./style"

const MyUpload = () => {
    return(
        <_.Flex>
            <_.Warpper>
                <_.Work>내가 업로드한 작품</_.Work>
                <Button Black>모두 보기</Button>
            </_.Warpper>
            <_.List></_.List>
        </_.Flex>
    );
}

export default MyUpload;