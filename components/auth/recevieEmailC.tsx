import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import Input from '@/components/common/input';
import styled from '@emotion/styled';
import { useState } from 'react';

const recevieEmailC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');

  return (
    <AuthBox title="비밀번호 변경" sub="비밀번호를 변경하려면 이메일 인증이 필요합니다">
      <Content>
        <Input value={email} setValue={setEmail} title="이메일" />
        <Button MainColor>다음</Button>
      </Content>
    </AuthBox>
  );
};

export default recevieEmailC;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
