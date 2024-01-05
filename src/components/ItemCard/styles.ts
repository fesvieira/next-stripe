import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 260px;

  gap: 1rem;

  border-radius: 2rem;
  background-color: white;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.17);
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const ItemImage = styled.img`
  width: 260px;
  height: 260px;
  border-radius: 1rem 1rem 0rem 0rem;
  box-shadow: 0px 0px 5.5px 0px rgba(0, 0, 0, 0.17);
`;
export const Title = styled.h3`
  font-size: large;
  font-weight: 800;
  padding: 0 0.5rem;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  
  padding: 0 0.5rem;
  margin: auto 0rem;
`;

export const CheckoutButton = styled.button`
  height: 36px;
  background: #556cd6;
  color: white;
  border: 0;
  font-weight: 600;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 0rem 0rem 1rem 1rem;
`;
