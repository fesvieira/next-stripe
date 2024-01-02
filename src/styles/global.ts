import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    width: 100%;
    height: 100dvh;
}

section {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 112px;
    border-radius: 6px;
    justify-content: space-between;
}
button {
    height: 36px;
    background: #556cd6;
    border-radius: 4px;
    color: white;
    border: 0;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
}
button:hover {
    opacity: 0.8;
}
`;
