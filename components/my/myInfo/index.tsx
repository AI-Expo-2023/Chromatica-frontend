import * as _ from "./style"
import { Button } from "../../common/button/style";
import router from 'next/router'
import axios from "axios";
import { useEffect, useState } from "react";
import { getAccessToken } from "@/util/token";

type GetData = {
    userPhoto?: string,
    userName?: string,
    userId?: number,
    userEmail?: string,
}
const MyInfo = ():JSX.Element => {

    const [infoData, setInfoData] = useState<GetData>({});

    useEffect(()=>{
    const token = getAccessToken();
        if(token === null) return;
        axios({
            method:'GET',
            url: process.env.NEXT_PUBLIC_BASEURL + `/user`,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then(function(result){
            console.log('결과', result);
            setInfoData(result.data);
        })
        .catch(function(error){
            console.error('에러', error);
            alert("로그인이 필요합니다")
        });
    },[]);

    console.log(infoData);

    const ProfileChange = () => {
        router.push("/my/profileChange");
    }

    const PwChange = () =>{
        router.push("/auth/pwChange");
    }

    const Logout = () =>{
        // 토큰 지우는 코드 들어갈 예정
        document.cookie = "";
        router.push("/");
    }

    return(
        <_.Flex>
            <_.Warpper>
                <_.Profile src={process.env.NEXT_PUBLIC_BASEURL + `${infoData.userPhoto}`}/>
                <div>
                    <_.Nickname>{infoData.userName}</_.Nickname>
                    <_.Email>{infoData.userEmail}</_.Email>
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