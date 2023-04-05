import Pagination from "@/components/common/pagination/pagination";
import { PostListerWithSort } from "@/components/gallery/postListerSortable";
import { SortSelecter } from "@/components/gallery/sortSelect";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Gallery() {
    const {query, isReady} = useRouter();
    const [Sort, setSort] = useState<string>(query.sort as string);
    const [Page, setPage] = useState<number>(1);
    useEffect(()=>{
        if(isReady===false) return;
        setSort(query.sort as string);
        console.log(query);
    },[isReady])

    return(
        <>
            <SortSelecter sort={Sort} setSort={setSort} />
            <PostListerWithSort sort={Sort==='new' || Sort === 'popular' ? Sort : 'new'} data={dta}/>
            {Sort==='new' ? <Pagination value={Page} change={setPage} /> : null}
        </>
    );
}