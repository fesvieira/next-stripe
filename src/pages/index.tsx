import { GlobalStyles } from "@/styles/global";
import { FC, useEffect, useState } from "react";
import { Container, ItemsGrid } from "@/styles/Home";
import ItemCard from "@/components/ItemCard/ItemCard";
import { Inter } from "next/font/google";
import { listProducts } from "./api/list-products";
import Stripe from "stripe";


const Home: FC = () => {
  const [products, setProducts] = useState<Stripe.Product[]>([]);

  useEffect(() => {
    async function listStoreProducts() {
      const products = await listProducts();
      if (products.data.data?.data) {
        setProducts(products.data.data.data);
      }
    }

    listStoreProducts();
  }, []);

  return (
    <Container>
      <ItemsGrid>
        {products.map((product) => {
          return <ItemCard key={product.id} product={product} />;
        })}
      </ItemsGrid>
    </Container>
  );
};

export default Home;
