import { FC, useEffect, useState } from "react";
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
import Stripe from "stripe";

interface Props {
  product: Stripe.Product;
}

const ItemCard: FC<Props> = ({ product }) => {
  const [price, setPrice] = useState("-");

  // Utility function to convert cents to dollars
  const formatPrice = (cents: number) => {
    const dollars = cents / 100;
    return dollars.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    });
  };

  useEffect(() => {
    try {
      const price = product.default_price as Stripe.Price;
      setPrice(formatPrice(price.unit_amount ?? 0));
    } catch (err) {
      console.log("error: undefined price");
    }
  }, [product]);

  const checkoutItem = async () => {
    const response = (await checkoutProduct(product.id)).data;
    if (response?.data?.url) {
      Router.replace(new URL(response?.data?.url));
    } else {
      console.log(response.error);
    }
  };
  return (
    <Container>
      <ItemImage src={`${product.images[0]}`}></ItemImage>
      <Row>
        <Title>{product.name ?? "--"}</Title>
        <Description>{price}</Description>
      </Row>
      <Description>{product.description}</Description>
      <CheckoutButton onClick={checkoutItem}>Checkout</CheckoutButton>
    </Container>
  );
};

export default ItemCard;
