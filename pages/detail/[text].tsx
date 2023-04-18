import Detail from "@/components/detail/detail";
import Header from "@/components/header/header";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  const { text } = router.query;

  return (
    <Container>
      <Header />
      <Detail word={text}/>
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