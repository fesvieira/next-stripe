import { GlobalStyles } from "@/styles/global";
import { FC } from "react";
import { Container } from "@/styles/Home";
import ItemCard from "@/components/ItemCard/ItemCard";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home: FC = () => {
  return (
    <Container className={inter.className}>
      <GlobalStyles />
      <ItemCard />
    </Container>
  );
};

export default Home;
