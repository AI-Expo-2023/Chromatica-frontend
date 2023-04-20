import { Button } from "@/components/common/button/style";
import RankCardImg from "@/components/common/RankCard/RankCardImg";
import router from "next/router";
import { useEffect, useState } from "react";
import * as _ from "./style"

type listType = {
    photoID: number,
    photo:{
        imgaeID: number,
        photoID: number,
        userID: string,
        photo: string,
        like: number,
        head: string,
    },
    user:{
        name: string,
        photo: string,
    }
}

const MyTemporary = () => {

    const [listData, setListData] = useState<listType[]>();
    // const token = getAccessToken();

    useEffect(()=>{
        // axios({
        //     method: 'GET',
        //     url: process.env.REACT_APP_BASEURL + `/liked`,
        //     headers: {
        //         "Authorization": `Bearer ${token}`,
        //     }
        // })
        // .then((result)=>{
        //     const DataCut = result.data.images.slice(0,6);
        //     setListData(result.data);
        //     console.log(result)
        // })
        // .catch((error)=>{
        //     console.log('에러: ', error);
        // });
        setListData([{
            photoID: 123,
            photo:{
                imgaeID: 4,
                photoID: 2,
                photo: "/assets/image/personIcon.png",
                userID: "asfasf",
                like: 123,
                head: "안녕하지요",
            },
            user:{
                name: "홍길동",
                photo: "/assets/image/personIcon.png"
            }
    }]);
    },[]);

    const AllView = () =>{
        router.push("/my/saved");
    }
    return(
        <_.Flex>
            <_.Warpper>
                <_.Work>임시 저장한 작품</_.Work>
                <Button Black onClick={AllView}>모두 보기</Button>
            </_.Warpper>
            <_.List>
                {
                    listData?.map((data)=>{
                        return(
                            <RankCardImg photoID={data.photoID} photo={data.photo.photo}/>
                        )
                    })
                }
            </_.List>
        </_.Flex>
    );
}

export default MyTemporary;