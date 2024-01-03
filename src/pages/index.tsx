import { GlobalStyles } from "@/styles/global";
import { useEffect } from "react";
import { Inter } from "next/font/google";
import { FC } from "react";
import { Container } from "@/styles/Home";
import ItemCard from "@/components/ItemCard/ItemCard";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
// );

const inter = Inter({ subsets: ["latin"] });

const Home: FC = () => {
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
    }
  }, []);
  return (
    <Container className={inter.className}>
      <GlobalStyles />
      <ItemCard />
    </Container>
  );
};

export default Home;
