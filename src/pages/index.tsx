import { GlobalStyles } from "@/styles/global";
import { FC, useEffect } from "react";
import { Container } from "@/styles/Home";
import ItemCard from "@/components/ItemCard/ItemCard";
import { Inter } from "next/font/google";
import { stripe } from "@/services/stripe";
import { listProducts } from "./api/list-products";

const inter = Inter({ subsets: ["latin"] });

const Home: FC = () => {
  useEffect(() => {
    async function listStoreProducts() {
      const products = await listProducts();
      console.log(products);
    }

    listStoreProducts();
  });

  return (
    <Container className={inter.className}>
      <GlobalStyles />
      <ItemCard />
    </Container>
  );
};

export default Home;
