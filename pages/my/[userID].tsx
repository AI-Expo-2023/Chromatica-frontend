import AnotherMy from "@/components/my/another/info";
import AnotherUpload from "@/components/my/another/upload";
import MyUpload from "@/components/my/myWork/upload";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  const { userID } = router.query;

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