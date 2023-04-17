import * as _ from "./style"
import { Button } from "../../common/button/style";
import router from 'next/router'

const MyInfo = ():JSX.Element => {

    const ProfileChange = () => {
        router.push("/my/profileChange");
    }

    const PwChange = () =>{
        router.push("/auth/pwChange");
    }

    const Logout = () =>{
        // 토큰 지우는 코드 들어갈 예정
        router.push("/");
    }

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
                <Button Black onClick={ProfileChange}>프로필 수정</Button>
                <Button Black onClick={PwChange}>비밀번호 변경</Button>
                <Button Black onClick={Logout}>로그아웃</Button>
            </_.ButtonWarpper>
        </_.Flex>
    );
}

export default MyInfo;