import { Theme } from '@/styles/theme/Theme';
import styled from '@emotion/styled';
import { Eye24Filled, EyeOff24Filled } from '@fluentui/react-icons';
import React, { useState } from 'react';

type Props = {
  title: string;
  width?: string;
  text?: string;
  isPassword?: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ title, width, text, isPassword, value, setValue }: Props): JSX.Element => {
  const [isVisable, setIsVisable] = useState<boolean>(false);

  return (
    <Container width={width}>
      <InputTitle htmlFor={title}>{title}</InputTitle>
      <InputBox id={title} value={value} onChange={(e) => setValue(e.target.value)} type={isPassword && !isVisable ? 'password' : 'text'} autoComplete="off" />
      {isPassword && (
        <Eye
          onClick={() => {
            setIsVisable(!isVisable);
          }}
        >
          {isVisable ? <Eye24Filled primaryFill="gray" /> : <EyeOff24Filled primaryFill="gray" />}
        </Eye>
      )}
      {text && <Text>{text}</Text>}
    </Container>
  );
};

export default Input;

const Container = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : '386px')};
  position: relative;
`;

const InputTitle = styled.label`
  color: ${Theme.Gray[50]};
  font-size: 18px;
  font-weight: bold;
`;

const InputBox = styled.input`
  height: 47px;
  border: 1px solid ${Theme.Gray[75]};
  border-radius: 8px;
  padding: 13px 44px 13px 11px;
  font-size: 18px;
  margin: 4px 0;
`;

const Text = styled.p`
  font-size: 18px;
  color: ${Theme.Gray[50]};
`;

const Eye = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  position: absolute;
  top: 36px;
  right: 11px;
`;
