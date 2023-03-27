import * as _ from "./style"
import { Button } from "../../common/button/style";

const MyInfo = () => {
    return(
        <_.Flex>
            <_.Warpper>
                <_.Profile/>
                <div>
                    <_.Nickname>어디로가야하오</_.Nickname>
                    <_.Email>baldblind101@gmail.com</_.Email>
                </div>
            </_.Warpper>
            <_.ButtonWarpper>
                <Button Black>프로필 수정</Button>
                <Button Black>비밀번호 변경</Button>
                <Button Black>로그아웃</Button>
            </_.ButtonWarpper>
        </_.Flex>
    );
}

export default MyInfo;