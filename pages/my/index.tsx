import MyInfo from "../../components/my/myInfo";
import styled from "@emotion/styled";
import MyUpload from "@/components/my/myWork/upload";
import MyGreat from "@/components/my/myWork/great";
import MyTemporary from "@/components/my/myWork/temporary";


export default function Mypae() {

    return(
        <>
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