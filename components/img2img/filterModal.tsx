import styled from "@emotion/styled";
import React, { useState } from "react"
import { Button } from "../common/button/style";
import Modal from "../common/modal"
type Props = {
  openModadl: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  filter: number;
  setFilter: React.Dispatch<React.SetStateAction<number>>;
}
const filterType = ["원본", "흑백", "차갑게", "따뜻하게"];
const FilterModal = ({ filter, setFilter, openModadl, setOpenModal }: Props): JSX.Element => {
  const onClick = () => {
    setOpenModal(!openModadl);
  }
  return (
    <>
      {
        openModadl &&
        <Modal onClickToggleModal={onClick} display="flex" flexDirection="column" background>
          <h1>필터</h1>
          <ButtonContainer >
            {
              filterType.map((v, i) => {
                if (filter == i + 1)
                  return <Buttons Black onClick={() => setFilter(i + 1)}>{v}</Buttons>
                else return <Buttons onClick={() => setFilter(i + 1)}>{v}</Buttons>
              })
            }
          </ButtonContainer>
          <ButtonContainer>
            <Buttons MainColor onClick={() => onClick()}>적용</Buttons>
          </ButtonContainer>
        </Modal>
      }
    </>
  )
}

export default FilterModal

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`

const Buttons = styled(Button)`
  width: 100%;
`

