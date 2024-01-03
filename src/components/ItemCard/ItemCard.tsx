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
import Router from "next/router";

const ItemCard: FC = () => {
  const checkoutItem = async () => {
    const response = (await checkoutProduct("1")).data;
    if (response?.data?.url) {
      Router.replace(new URL(response?.data?.url));
    } else {
      console.log(response.error);
    }
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
