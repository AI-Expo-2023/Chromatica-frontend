import styled from "@emotion/styled";
import {css} from "@emotion/react";
import { Theme } from "@/styles/theme/Theme";

type ButtonColorType = {
    MainColor? : boolean;
    Black? : boolean;
    White? : boolean;
    Red? : boolean;
}

export const Button = styled.button`
    font-size: 18px;
    font-weight: 400;

    border: none;
    border-radius: 8px;

    padding: 6px 12px;

    ${(props:ButtonColorType) => 
        props.MainColor ?
        css`
            background-color: ${Theme.ThePurple};
            color: white;

            :hover{
                transition: 100ms;
                transform: scale(1.05);
            }

            :active{
                transition: 100ms;
                opacity: 0.7;
            }
        `
        : props.Black ?
        css`
            color: white;
            background-color: ${Theme.Black};

            :hover{
                transition: 100ms;
                transform: scale(1.05);
            }

            :active{
                transition: 100ms;
                opacity: 0.7;
            }
        `

        : props.White ?
        css`
            color: ${Theme.Black};

            :hover{
                transition: 100ms;
                transform: scale(1.05);
            }

            :active{
                transition: 100ms;
                opacity: 0.7;
            }
        `

        : props.Red ?
        css`
            background-color: ${Theme.Red};
            color: white;

            :hover{
                transition: 100ms;
                transform: scale(1.05);
            }

            :active{
                transition: 100ms;
                opacity: 0.7;
            }
        `
        :css`
            color: black;
            background-color: white;
        `
    }
`;