import * as _ from "./infostyle"
import axios from "axios";
import { useEffect, useState } from "react";

type user = {
    ID: string | string[] | undefined,
}

type data = {
    photo?: string,
    name?: string,
    userId?: number,
    Email?: string,
}

const AnotherMy = ({ID}:user) =>{

    const [AnotherMyData, setAnotherMyData] = useState<data>();

    useEffect(()=>{
        axios({
            method: 'GET',
            url: process.env.NEXT_PUBLIC_BASEURL + `/user/info/${ID}`,
        })
        .then((result)=>{
            setAnotherMyData(result.data);
        })
        .catch((error)=>{
            console.error('에러', error);
        });
    },[])

    return(
        <_.Flex>
            <_.Warpper>
                <_.Profile src={AnotherMyData?.photo}/>
                <div>
                    <_.Nickname>{AnotherMyData?.name}</_.Nickname>
                    <_.Email>{AnotherMyData?.Email}</_.Email>
                </div>
            </_.Warpper>
        </_.Flex>
    );


}

export default AnotherMy;