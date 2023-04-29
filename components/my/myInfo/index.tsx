import * as _ from "./style"
import { Button } from "../../common/button/style";
import axios from "axios";
import { useEffect, useState } from "react";
import { getAccessToken } from "@/util/token";
import { useRouter } from "next/router";
import BlankProfile from '@/public/assets/image/personIcon.png'

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
        if(token === null) return;
        setWorldToken(token);
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
        axios({
            method: 'DELETE',
            url: process.env.NEXT_PUBLIC_BASEURL + '/user/log',
            headers: {
                "Authorization": `Bearer ${worldtoken}`
            }
        })
        .then(()=>{
            localStorage.removeItem("token");
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

    const onErrorImg = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        e.currentTarget.src = BlankProfile.src;
    }

    return(
        <_.Flex>
            <_.Warpper>
                <_.Profile src={`${process.env.NEXT_PUBLIC_BASEURL}` + "/user/upload/" + `${infoData.userPhoto}`} alt='' onError={onErrorImg}/>
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