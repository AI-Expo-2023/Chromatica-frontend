import { Button } from "@/components/common/button/style";
import RankCard from "@/components/common/RankCard/RankCard";
import { getAccessToken } from "@/util/token";
import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react";
import * as _ from "./style"

type listType = {
    photoID: number,
    imgaeID: number,
    photo: string,
    like: number,
    head: string,
    User: {
        name: string,
        photo: string,
        userID: string,
    }
}

const MyUpload = () => {

    const [listData, setListData] = useState<listType[]>();
    const token = getAccessToken();

    useEffect(() => {
        axios({
            method: 'GET',
            url: process.env.NEXT_PUBLIC_BASEURL + `/user/image/1`,
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
            .then((result) => {
                const DataCut = result.data.images.slice(0, 6);
                setListData(DataCut);
                console.log(result)
            })
            .catch((error) => {
                console.log('에러: ', error);
            });
    }, []);

    console.log(listData);

    const AllView = () => {
        router.push("/my/post");
    }
    return (
        <_.Flex>
            <_.Warpper>
                <_.Work>내가 업로드한 작품</_.Work>
                <Button Black onClick={AllView}>모두 보기</Button>
            </_.Warpper>
            <_.List>
                {
                    listData?.map((data) => {
                        return (
                            // <RankCard photoID={data.photoID} photo={data.User.photo} head={data.head} like={data.like} User={data.User} key={data.photoID}/>
                            <RankCard {...data} />
                        )
                    })
                }
            </_.List>
        </_.Flex>
    );
}

export default MyUpload;