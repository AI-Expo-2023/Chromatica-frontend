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

    width: 250px;
    height: auto;
`

export const tagOptionDiv = styled.div`
    display: flex;
    padding: 8px;
    gap: 4px;
    border-bottom: 1px solid ${Theme.Gray[75]};
`