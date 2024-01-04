import { FC } from "react";
import { Container } from "./styles";

const TopBar: FC = () => {
  return (
    <Container>
      <img src="/logo.png" />
      <h1>Loja Lajota</h1>
    </Container>
  );
};

export default TopBar;
