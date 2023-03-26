import AuthBox from "@/components/common/authBox";
import { Button } from "@/components/common/button/style";
import Input from "@/components/common/input";
import styled from "@emotion/styled";
import { useState } from "react";

const EmailCheck = (): JSX.Element => {
    const [checkNumber, setCheckNumber] = useState<string>('');

    return (
      <Contanier>
        <AuthBox title="이메일 주소 인증" sub="입력한 이메일 주소로 전송된 6자리 인증번호를 입력하세요. 인증번호는 5분 뒤에 만료됩니다.">
          <Content>
            <Input value={checkNumber} setValue={setCheckNumber} title="인증번호" />
            <Button MainColor>다음</Button>
          </Content>
        </AuthBox>
      </Contanier>
    );
};

export default EmailCheck;

const Contanier = styled.div`
    height: calc(100vh - 64px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;