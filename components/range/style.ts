import styled from "@emotion/styled";

export const spaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
`

export const inputRange = styled.input`
    width: 100%;
    margin: 2px 0;
    background-color: transparent;
    -webkit-appearance: none;
    outline: none;

    ::-webkit-slider-runnable-track {
        background: #8066f5;
        border: 0;
        border-radius: 8px;
        width: 100%;
        height: 28px;
        cursor: pointer;
    }
    ::-webkit-slider-thumb {
        box-shadow: 0 0 8px #00000040;
        margin-top: -2px;
        width: 10px;
        height: 32px;
        background: #ffffff;
        border: 0;
        border-radius: 50px;
        cursor: pointer;
        -webkit-appearance: none;
    }
    ::-moz-range-track {
        background: #8066f5;
        border: 0;
        border-radius: 8px;
        width: 100%;
        height: 28px;
        cursor: pointer;
    }
    ::-moz-range-thumb {
        box-shadow: 0 0 8px #00000040;
        width: 10px;
        height: 32px;
        background: #ffffff;
        border: 0;
        border-radius: 50px;
        cursor: pointer;
    }
    ::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 2.8px 0;
    color: transparent;
    width: 100%;
    height: 28px;
    cursor: pointer;
    }
    ::-ms-fill-lower {
        background: #6c4ef3;
        border: 0;
        border-radius: 16px;
    }
    ::-ms-fill-upper {
        background: #8066f5;
        border: 0;
        border-radius: 16px;
    }
    ::-ms-thumb {
        box-shadow: 0 0 8px #00000040;
        width: 10px;
        height: 32px;
        background: #ffffff;
        border: 0;
        border-radius: 50px;
        cursor: pointer;
        margin-top: 0px;
        /*Needed to keep the Edge thumb centred*/
    }

`