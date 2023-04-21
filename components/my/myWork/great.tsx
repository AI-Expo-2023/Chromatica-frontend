import { Button } from "@/components/common/button/style";
import RankCard from "@/components/common/RankCard/RankCard";
import { getAccessToken } from "@/util/token";
import axios from "axios";
import router from 'next/router'
import { useEffect, useState } from "react";
import * as _ from "./style"

type listType = {
    Photo:{
        imgaeID: number,
        photo: string,
        like: number,
        head: string,
        photoID: number,
    }
    User:{
        name: string,
        photo: string,
        userID: string,
    }
}

const MyGreat = () => {

    const [listData, setListData] = useState<listType[]>();
    const token = getAccessToken();

    useEffect(()=>{
        axios({
            method: 'GET',
            url: process.env.NEXT_PUBLIC_BASEURL + `/user/liked/1`,
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        .then((result)=>{
            const DataCut = result.data.images.slice(0,6);
            setListData(DataCut);
            console.log(result)
        })
        .catch((error)=>{
            console.log('에러: ', error);
        });
    },[]);

    console.log(listData);

    const AllView = () =>{
        router.push("/my/hearted");
    }

    return(
        <_.Flex>
            <_.Warpper>
                <_.Work>좋아요 누른 작품</_.Work>
                <Button Black onClick={AllView}>모두 보기</Button>
            </_.Warpper>
            <_.List>
                {
                    listData?.map((data)=>{
                        return(
                            <RankCard photoID={data.Photo.photoID} photo={data.Photo.photo} head={data.Photo.head} like={data.Photo.like} user={data.User} key={data.Photo.photoID}/>
                        )
                    })
                }
            </_.List>
        </_.Flex>
    );
}

export default MyGreat;