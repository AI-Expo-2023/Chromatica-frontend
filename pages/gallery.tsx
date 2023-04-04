import { PostListerWithSort } from "@/components/gallery/postlister";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Gallery() {
    const dta = [
        {
            head:'teemodawee',
            user:'vayne',
            like: 99,
            photo: 'as2df',
        },
        {
            head:'teemdodawee',
            user:'vayne',
            like: 99,
            photo: 'asdf',
        },
]//임시데이터

    const {query, isReady} = useRouter();
    const [Sort, setSort] = useState<string>(query.sort as string);
    useEffect(()=>{
        if(isReady===false) return;
        setSort(query.sort as string);
        console.log(query);
    },[isReady])

    return(
        <>
            <PostListerWithSort sort={Sort} data={dta}/>
        </>
    );
}