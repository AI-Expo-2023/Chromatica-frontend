import { useRouter } from "next/router";
import { useState } from "react";

export default function Gallery() {
    const Router = useRouter();
    const [Sort, setSort] = useState<string>('new');
    return(
        <p>{Router.query.sort}</p>
    );
}