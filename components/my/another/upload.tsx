import { Button } from "@/components/common/button/style";
import RankCard from "@/components/common/RankCard/RankCard";
import { getAccessToken } from "@/util/token";
import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react";
import * as _ from "./uploadstyle"

type listType = {
    photoID: number,
    photo:{
        imgaeID: number,
        photoID: number,
        photo: string,
        like: number,
        head: string,
    },
    user:{
        name: string,
        photo: string,
        userID: string,
    }
}

type user = {
    ID: string | string[] | undefined,
}

const AnotherUpload = ({ID}:user) => {

    const [listData, setListData] = useState<listType[]>();
    const token = getAccessToken();

    useEffect(()=>{
        axios({
                method: 'GET',
                url: process.env.NEXT_PUBLEC_BASEURL + `/user/${ID}/image/1`,
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            })
            .then((result)=>{
                const DataCut = result.data.slice(0,6);
                setListData(DataCut);
                console.log(result)
            })
            .catch((error)=>{
                console.log('에러: ', error);
            });
    },[]);

    const AllView = () =>{
        router.push(`/my/${ID}`);
    }
    return(
        <_.Flex>
            <_.Warpper>
                <_.Work>업로드한 작품</_.Work>
                <Button Black onClick={AllView}>모두 보기</Button>
            </_.Warpper>
            <_.List>
                {
                    listData?.map((data)=>{
                        return(
                            <RankCard photoID={data.photoID} photo={data.photo.photo} head={data.photo.head} like={data.photo.like} user={data.user} key={data.photoID}/>
                        )
                    })
                }
            </_.List>
        </_.Flex>
    );
}

export default AnotherUpload;