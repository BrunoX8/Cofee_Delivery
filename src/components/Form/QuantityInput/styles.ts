import { styled } from "styled-components";

export const Container = styled.div`
    padding: 0.5rem;
    background-color: ${({ theme }) => theme['base-button']};
    border-radius: 6px;
    display: flex;
    gap: 0.25rem;

    button {
        background-color: transparent;
        display: flex;
        align-items: center;
    }

    button svg {
        color:  ${({ theme }) => theme['purple']};
        transition: all 0.2s;

        &:hover {
            color: ${({ theme }) => theme['purple-dark']};
        }
    }

    span {
        padding-top: 0.125rem;
        color: ${({ theme }) => theme['base-title']};
    }
`