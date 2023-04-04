import { useRouter } from "next/router";

export default function Gallery() {
    const Router = useRouter();
    return(
        <p>{Router.query.sort}</p>
    );
}