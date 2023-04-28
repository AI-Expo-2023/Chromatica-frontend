import { Theme } from "@/styles/theme/Theme";
import styled from "@emotion/styled";

export const addTagMain = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 12px;
    border: 1px solid ${Theme.Gray[5]};
    border-radius: 8px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    background-color: ${Theme.White};
    transform: translate(0,-55%);

    width: 250px;
    height: auto;
    position: absolute;
`

export const tagOptionDiv = styled.div`
    display: flex;
    padding: 8px;
    gap: 4px;
    border-bottom: 1px solid ${Theme.Gray[75]};
    &:hover{
        background-color: ${Theme.Gray[5]};
        transition: 100ms ease-in-out;
    }
`

export const tagOptionList = styled.div`
    height: 150px;
    overflow-y: scroll;
`