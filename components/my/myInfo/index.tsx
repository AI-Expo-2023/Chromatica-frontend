import * as _ from "./style"
import { Button } from "../../common/button/style";
import axios from "axios";
import { useEffect, useState } from "react";
import { getAccessToken } from "@/util/token";
import { useRouter } from "next/router";

type GetData = {
    userPhoto?: string,
    userName?: string,
    userId?: number,
    userEmail?: string,
}
const MyInfo = ():JSX.Element => {

    const router = useRouter();
    const [infoData, setInfoData] = useState<GetData>({});
    const [worldtoken, setWorldToken] = useState<string>();
    useEffect(()=>{
        const token = getAccessToken();
        setWorldToken(`${token}`);
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
        router.push({
            pathname: '/my/profileChange',
            query: {userName:infoData.userName},
        });
    }

    const PwChange = () =>{
        router.push("/auth/pwChange");
    }

    const Logout = () =>{
        // 토큰 지우는 코드 들어갈 예정
        axios({
            method: 'DELETE',
            url: process.env.NEXT_PUBLIC_BASEURL + '/user/log',
            headers: {
                "Authorization": `Bearer ${worldtoken}`
            }
        })
        .then((result)=>{
            localStorage.setItem("token", "");
            router.push("/");
        })
        .catch((error)=>{
            console.error('에러 발생: ', error);
        });
    }

    const Withdrawal = () =>{
        axios({
            method: 'DELETE',
            url: process.env.NEXT_PUBLIC_BASEURL + '/user/sign',
            headers: {
                "Authorization": `Bearer ${worldtoken}`
            },
            data: "PW", // 비번 어케 입력 받을 까요?? 모달 창을 하나 더 만들어야 하나요??
        })
        .then((result)=>{
            router.push("/");
        })
        .catch((error)=>{
            console.error('에러 발생: ', error);
        });
    }

    return(
        <_.Flex>
            <_.Warpper>
                <_.Profile src={infoData.userPhoto}/>
                <div>
                    <_.Nickname>{infoData.userName}</_.Nickname>
                    <_.Email>{infoData.userEmail}</_.Email>
                </div>
            </_.Warpper>
            <_.ButtonWarpper>
                <Button Black onClick={ProfileChange}>프로필 수정</Button>
                <Button Black onClick={PwChange}>비밀번호 변경</Button>
                <Button Black onClick={Logout}>로그아웃</Button>
                <Button Black onClick={Withdrawal}>회원 탈퇴</Button>
            </_.ButtonWarpper>
        </_.Flex>
    );
}

export default MyInfo;