import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import Input from '@/components/common/input';
import styled from '@emotion/styled';
import { useState } from 'react';
import axios from 'axios';
import router from 'next/router';

const BASEURL = process.env.NEXT_PUBLIC_APP_BASEURL;

const SignupC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [userCode, setUserCode] = useState<string>('');
  const [serverCode, setServerCode] = useState('');
  const [page, setPage] = useState(1);
  // const [imgFile, setImgFile] = useState<File | null>(null); // 서버 전송용
  // const [imgView, setImgView] = useState<string>(''); // 프리뷰용

  // 사진 보내는거(프로필)
  // const fileChange = async (e: ChangeEvent<HTMLInputElement>) => {
  //   const fileList = e.target.files as FileList;
  //   const theFile = fileList[0];

  //   setImgFile(theFile);

  //   const reader = new FileReader();
  //   reader.onloadend = (finishedEvent) => {
  //     const {
  //       currentTarget: { result },
  //     }: any = finishedEvent;

  //     setImgView(result);
  //   };
  //   await reader.readAsDataURL(theFile);
  // };

  const checkData = () => {
    const regExpEm = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const regExpPw = /(?=.*[!@#$%^&*]{1,})(?=.*[a-zA-Z]{1,}).{8,20}$/;
    if (!regExpEm.test(email)) {
      alert('이메일 형식이 아닙니다');
      return false;
    } else if (!regExpPw.test(password)) {
      alert('비밀번호 규칙 위반');
      return false;
    } else {
      axios
        .request({
          url: `${BASEURL}/user/email`,
          method: `post`,
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
          alert('실패');
        });
    }
  };

  const nextEmail = () => {
    if (userCode == serverCode) {
      console.log('성공');
      axios
        .request({
          url: `${BASEURL}/user/sign`,
          method: `post`,
          data: {
            ID: id,
            PW: password,
            Email: email,
          },
        })
        .then((response: any) => {
          alert('회원가입 성공');
          router.push('/auth/start');
        })
        .catch((error: any) => {
          alert('실패');
        });
    } else {
      alert('인증번호가 틀립니다');
    }
  };

  return (
    <>
      {page == 1 ? (
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
            <Button MainColor onClick={() => checkData()}>
              다음
            </Button>
          </Content>
        </AuthBox>
      ) : (
        <AuthBox title="이메일 주소 인증" sub="입력한 이메일 주소로 전송된 6자리 인증번호를 입력하세요. 인증번호는 5분 뒤에 만료됩니다.">
          <Content>
            <Input value={userCode} setValue={setUserCode} title="인증번호" />
            <Button MainColor onClick={() => nextEmail()}>
              다음
            </Button>
          </Content>
        </AuthBox>
      )}
    </>
  );
};

export default SignupC;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
