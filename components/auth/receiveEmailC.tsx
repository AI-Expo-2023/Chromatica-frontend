import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import Input from '@/components/common/input';
import styled from '@emotion/styled';
import axios from 'axios';
import router from 'next/router';
import { useState } from 'react';

const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

const receiveEmailC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [page, setPage] = useState(1);
  const [userCode, setUserCode] = useState<string>('');
  const [serverCode, setServerCode] = useState('');

  const checkData = () => {
    const regExpEm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!regExpEm.test(email)) {
      alert('이메일 형식이 아닙니다');
      return false;
    } else {
      axios
        .request({
          url: `${BASEURL}/user/email`,
          method: 'post',
          data: {
            Email: email,
          },
        })
        .then((response: any) => {
          console.log(response.data);
          setServerCode(response.data.code);
          setPage(2);
        })
        .catch((error: any) => {
          console.log('실패');
        });
    }
  };

  const nextEmail = () => {
    if (userCode == serverCode) {
      console.log('성공');
      setPage(3);
    } else {
      alert('인증번호가 틀립니다');
    }
  };

  const REPost = () => {
    axios
      .request({
        url: `${BASEURL}/user/findPW`,
        method: 'patch',
        data: {
          Email: email,
          new_PW: newPassword,
        },
      })
      .then((response: any) => {
        console.log('성공');
        router.push('/auth/completeEmail');
      })
      .catch((error: any) => {
        alert('비밀번호 변경 실패');
      });
  };

  return (
    <>
      {page == 1 ? (
        <AuthBox title="비밀번호 변경" sub="비밀번호를 변경하려면 이메일 인증이 필요합니다">
          <Content>
            <Input value={email} setValue={setEmail} title="이메일" />
            <Button MainColor onClick={() => checkData()}>
              다음
            </Button>
          </Content>
        </AuthBox>
      ) : page == 2 ? (
        <AuthBox title="비밀번호 변경" sub="입력한 이메일 주소로 전송된 6자리 인증번호를 입력하세요. 인증번호는 5분 뒤에 만료됩니다.">
          <Content>
            <Input value={userCode} setValue={setUserCode} title="인증번호" />
            <Button MainColor onClick={() => nextEmail()}>
              다음
            </Button>
          </Content>
        </AuthBox>
      ) : (
        <AuthBox title="비밀번호 변경">
          <Content>
            <Input
              value={newPassword}
              setValue={setNewPassword}
              title="새 비밀번호"
              text="8~20자 이내, 영문 알파벳, 특수문자(!, @, #, $, %, ^, &, *)를 1자 이상 포함해야 합니다"
              isPassword
            />
            <Button MainColor onClick={() => REPost()}>
              다음
            </Button>
          </Content>
        </AuthBox>
      )}
    </>
  );
};

export default receiveEmailC;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
