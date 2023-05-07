import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import Input from '@/components/common/input';
import styled from '@emotion/styled';
import axios from 'axios';
import { useState } from 'react';
import router from 'next/router';

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

const LoginC = (): JSX.Element => {
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const loginPost = () => {
    axios
      .request({
        url: `${BASEURL}/user/log`,
        method: 'post',
        data: {
          "ID": id,
          "PW": password
        },
      })
      .then((response: any) => {
        const token = response.data.accessToken;
        localStorage.setItem("token", token);
        localStorage.setItem("userId", id);
        router.push('/');
      })
      .catch((error: any) => {
          alert('로그인 실패');
      });
  };

  return (
    <AuthBox title="로그인">
      <Content>
        <Input value={id} setValue={setId} title="아이디" />
        <Input value={password} setValue={setPassword} title="비밀번호" isPassword />
        <Button MainColor onClick={() => loginPost()}>
          로그인
        </Button>
        <ButtonBox>
          <Button Gray5 Width="177" onClick={() => router.push('/auth/signup')}>
            회원가입
          </Button>
          <Button Gray5 Width="177" onClick={() => router.push('/auth/receiveEmail')}>
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
