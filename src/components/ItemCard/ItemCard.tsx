import { FC } from "react";
import {
  CheckoutButton,
  Container,
  Description,
  ItemImage,
  Row,
  Title,
} from "./styles";
import { checkoutProduct } from "@/pages/api/checkout-sessions";
import Image from "next/image";
const ItemCard: FC = () => {
  const checkoutItem = () => {
    checkoutProduct("1");
  };
  return (
    <Container>
      <ItemImage src="/tijolo.png"></ItemImage>
      <Row>
        <Title>Tijolo</Title>
        <Description>$ 0.99</Description>
      </Row>
      <Description>
        Unidade usada para a construção de muros e paredes
      </Description>
      <CheckoutButton onClick={checkoutItem}>Checkout</CheckoutButton>
    </Container>
  );
};

export default ItemCard;
