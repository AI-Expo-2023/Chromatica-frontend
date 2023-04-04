import { PostListerWithSort } from "@/components/gallery/postlister";
import { useRouter } from "next/router";
import { useState } from "react";

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

    const Router = useRouter();
    const [Sort, setSort] = useState<string>(Router.query.sort as string);
    return(
        <>
            <PostListerWithSort sort={Sort} data={dta}/>
        </>
    );
}