import AuthBox from '@/components/common/authBox';
import { Button } from '@/components/common/button/style';
import Input from '@/components/common/input';
import { Theme } from '@/styles/theme/Theme';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';

const ProfileC = (): JSX.Element => {
  const [nickName, setNickName] = useState<string>('');
  const [imgFile, setImgFile] = useState<File | null>(null); // 서버 전송용
  const [imgView, setImgView] = useState<string>(''); // 프리뷰용

  const fileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files as FileList;
    const theFile = fileList[0];

    setImgFile(theFile);

    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      }: any = finishedEvent;

      setImgView(result);
    };
    await reader.readAsDataURL(theFile);
  };

  return (
    <AuthBox title="프로필 설정" sub="게시물과 댓글에 표시되는 정보입니다">
      <Content>
        <ProfileBox>
          <img src={imgView} width="128px" height="128px" />
          <div>
            <Button Gray25 Width="122">
              이미지 업로드
            </Button>
            <input type="file" onChange={fileChange} />
          </div>
        </ProfileBox>
        <Input value={nickName} setValue={setNickName} title="닉네임" />
        <Button MainColor>다음</Button>
      </Content>
    </AuthBox>
  );
};

export default ProfileC;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ProfileBox = styled.div`
  display: flex;
  align-items: flex-end;
  > img {
    border-radius: 50%;
    border: 1px solid ${Theme.Gray[75]};
    -webkit-user-drag: none;
    margin: 0 12px 0 0;
  }
  > div {
    position: relative;
    > input {
      opacity: 0;
      width: 122px;
      height: 33px;
      border-radius: 8px;
      position: absolute;
      left:0;
      cursor: pointer;
      ::-webkit-file-upload-button {
        cursor: pointer;
      }
    }
    :hover {
      transition: 100ms;
      transform: scale(1.05);
    }
  }
`;
