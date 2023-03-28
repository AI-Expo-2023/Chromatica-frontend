import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import Input from '@/components/common/input';
import styled from '@emotion/styled';
import { useState } from 'react';

const PwChange = (): JSX.Element => {
  const [password, setPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');

  return (
    <Contanier>
      <AuthBox title="비밀번호 변경">
        <Content>
          <Input value={password} setValue={setPassword} title="기존 비밀번호" isPassword />
          <Input
            value={newPassword}
            setValue={setNewPassword}
            title="새 비밀번호"
            text="8~20자 이내, 영문 알파벳, 특수문자(!, @, #, $, %, ^, &, *)를 1자 이상 포함해야 합니다"
            isPassword
          />
          <Button MainColor>다음</Button>
        </Content>
      </AuthBox>
    </Contanier>
  );
};

export default PwChange;

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
  margin: 20px 0 0 0;
`;