import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 1rem;

  align-items: center;

  padding: 1rem;
  width: 100dvw;

  background: #556cd6;

  & > h1 {
    color: white;
  }

  & > img {
    max-height: 70px;
    max-width: 70px;
    border-radius: 50%;
  }
`;
