import { Theme } from '@/styles/Theme';
import styled from '@emotion/styled';
import { Eye24Filled, EyeOff24Filled, EyeOff24Regular } from '@fluentui/react-icons';
import { useState } from 'react';
<Eye24Filled primaryFill="black" />;

type Props = {
  title: string;
  width?: string;
  text?: string;
  isPassword?: boolean;
};

type passwordEyeType = {
  click: () => void;
  eyeOn?: boolean;
};

const Input = ({ title, width, text, isPassword }: Props): JSX.Element => {
  const [isVisable, setIsVisable] = useState<boolean>(false);

  return (
    <Container width={width}>
      {isPassword && (
        <Eye
          onClick={() => {
            setIsVisable(!isVisable);
          }}
        >
          {isVisable ? <Eye24Filled primaryFill="gray" /> : <EyeOff24Filled primaryFill="gray" />}
        </Eye>
      )}
      <InputTitle htmlFor="InputBox">{title}</InputTitle>
      <InputBox id="InputBox" type={isPassword && !isVisable ? 'password' : 'text'} />
      {text && <Text>{text}</Text>}
    </Container>
  );
};

export default Input;

const Container = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : '386px')};
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
  padding: 13px 11px;
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
  position: relative;
  top: 60px;
  left: 350px;
`;
