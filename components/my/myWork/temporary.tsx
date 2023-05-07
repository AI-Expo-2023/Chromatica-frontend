import { Button } from "@/components/common/button/style";
import RankCardImg from "@/components/common/RankCard/RankCardImg";
import { getAccessToken } from "@/util/token";
import axios from "axios";
import router from "next/router";
import { useEffect, useState } from "react";
import * as _ from "./style"

type listType = {
    photoID: number,
    photo: string,
    userID: string,
    createdAt: string,
    updatedAt: string,
}

const MyTemporary = () => {

    const [listData, setListData] = useState<listType[]>([]);
    const token = getAccessToken();

    useEffect(() => {
        axios({
            method: 'GET',
            url: process.env.NEXT_PUBLIC_BASEURL + `/user/save/1`,
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        })
            .then((result) => {
                const DataCut = result.data.image.slice(0, 6);
                setListData(DataCut);
                console.log(result.data);
            })
            .catch((error) => {
                console.log('에러: ', error);
            });
    }, []);

    console.log(listData);

    const AllView = () => {

        router.push("/my/saved");
    }
    return (
        <_.Flex>
            <_.Warpper>
                <_.Work>임시 저장한 작품</_.Work>
                <Button Black onClick={AllView}>모두 보기</Button>
            </_.Warpper>
            <_.List>
                {
                    listData?.map((data) => {
                        return (
                            <RankCardImg photoID={data.photoID} photo={data.photo} />
                        )
                    })
                }
            </_.List>
        </_.Flex>
    );
}

export default MyTemporary;