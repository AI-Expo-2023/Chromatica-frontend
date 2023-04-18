import React from "react";
import styled from "@emotion/styled";
import Main from "@/components/main/main";

export default function Home() {

  return (
    <Container>
      <Main />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`