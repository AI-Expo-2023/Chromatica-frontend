import axios from "axios";
import { useEffect, useState } from "react"

interface responseType {
    manyImage: number;
    image: postType[];
}

interface postType{
    imageID: number;
    userID: string;
    photo: string;
}

const MySaved = () => {
    const [Data, setData] = useState<responseType>();
    const [pageNum, setPageNum] = useState<number>(1);

    useEffect(()=>{
        axios({
            url: `${process.env.NEXT_PUBLIC_BASEURL}/user/save/${pageNum}`,
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(function (response) {
            setData(response.data as responseType);
        })
        .catch(function (error) {
            alert(`오류가 발생했습니다(${error.status})`);
        })
    },[])
}

export default MySaved;