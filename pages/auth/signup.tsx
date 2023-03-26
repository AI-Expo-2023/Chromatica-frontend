import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import Input from '@/components/common/input';
import styled from '@emotion/styled';
import { useState } from 'react';

const Signup = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <Contanier>
      <AuthBox title="회원가입" sub="Chromatica에 가입하고 창작을 시작하세요">
        <Content>
          <Input value={email} setValue={setEmail} title="이메일" />
          <Input value={id} setValue={setId} title="아이디" />
          <Input
            value={password}
            setValue={setPassword}
            title="비밀번호"
            text="8~20자 이내, 영문 알파벳, 특수문자(!, @, #, $, %, ^, &, *)를 1자 이상 포함해야 합니다"
            isPassword
          />
          <Button MainColor>다음</Button>
        </Content>
      </AuthBox>
    </Contanier>
  );
};

export default Signup;

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