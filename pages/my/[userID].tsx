import AnotherMy from "@/components/my/another/info";
import AnotherUpload from "@/components/my/another/upload";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Index = () => {
  const router = useRouter();
  const {userID}  = router.query;
  
  const preventClose = (e: BeforeUnloadEvent) =>{
    e.preventDefault();
    e.returnValue = ""; 
  }

  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();
   
    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

  return (
    <Container>
      <AnotherMy ID={userID} />
      <AnotherUpload ID={userID}/>
    </Container>
  )
}

export default Index;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`