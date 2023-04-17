import Header from "@/components/header/header";
import Search from "@/components/search/search";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
  const router = useRouter();
  const { text } = router.query;

  return (
    <Container>
      <Header />
      <Search word={text} />
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