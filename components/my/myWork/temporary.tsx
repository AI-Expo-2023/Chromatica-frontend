import { Button } from "@/components/common/button/style";
import * as _ from "./style"

const MyTemporary = () => {
    return(
        <_.Flex>
            <_.Warpper>
                <_.Work>임시 저장한 작품</_.Work>
                <Button Black>모두 보기</Button>
            </_.Warpper>
            <_.List></_.List>
        </_.Flex>
    );
}

export default MyTemporary;