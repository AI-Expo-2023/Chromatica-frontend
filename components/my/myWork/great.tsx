import { Button } from "@/components/common/button/style";
import RankCard from "@/components/common/RankCard/RankCard";
import axios from "axios";
import router from 'next/router'
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

const MyGreat = () => {

    const [listData, setListData] = useState<listType[]>();

    useEffect(()=>{
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_BASEURL}/liked`,
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
        .then((result)=>{
            const DataCut = result.data.images.slice(0,6);
            setListData(result.data);
            console.log(result)
        })
        .catch((error)=>{
            console.log('에러: ', error);
        });
    },[]);

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
                            <RankCard photoID={data.photoID} photo={data.photo.photo} head={data.photo.head} like={data.photo.like} user={data.user} key={data.photoID}/>
                        )
                    })
                }
            </_.List>
        </_.Flex>
    );
}

export default MyGreat;