import MyInfo from "../components/my/myInfo";
import styled from "@emotion/styled";
import Header from "../components/header/header";
import MyUpload from "@/components/my/myWork/Upload";
import MyGreat from "@/components/my/myWork/Great";
import MyTemporary from "@/components/my/myWork/temporary";

export default function Mypae() {
    return(
        <>
            <Header></Header>
            <Warppr>
                <MyInfo/>
                <MyUpload/>
                <MyGreat/>
                <MyTemporary/>
            </Warppr>
        </>
    );
}

const Warppr = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin-top: 20px;
    margin-bottom: 100px;
`;