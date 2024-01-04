import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  
  padding: 2rem;

  height: 100vh;
  width: 100%;

  background-color: #f4f4f4;
`;

export const ItemsGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 1rem;
  align-items: top;


  width: 100%;
  height: 100%;
`;
