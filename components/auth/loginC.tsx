import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import Input from '@/components/common/input';
import styled from '@emotion/styled';
import { useState } from 'react';

const LoginC = (): JSX.Element => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <AuthBox title="로그인">
      <Content>
        <Input value={id} setValue={setId} title="아이디" />
        <Input value={password} setValue={setPassword} title="비밀번호" isPassword />
        <Button MainColor>로그인</Button>
        <ButtonBox>
          <Button Gray5 Width="177">
            회원가입
          </Button>
          <Button Gray5 Width="177">
            비밀번호 변경
          </Button>
        </ButtonBox>
      </Content>
    </AuthBox>
  );
};

export default LoginC;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 20px 0 0 0;
`;