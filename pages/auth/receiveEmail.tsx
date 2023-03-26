import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import Input from '@/components/common/input';
import styled from '@emotion/styled';
import { useState } from 'react';

const ReceiveEmail = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');

  return (
    <Contanier>
      <AuthBox title="비밀번호 변경" sub="비밀번호를 변경하려면 이메일 인증이 필요합니다">
        <Content>
          <Input value={email} setValue={setEmail} title="이메일" />
          <Button MainColor>다음</Button>
        </Content>
      </AuthBox>
    </Contanier>
  );
};

export default ReceiveEmail;

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