import { StyledButton } from "@/components/StyledButton";
import { GlobalStyles } from "@/styles/global";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "styled-components";

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <h1>Hello World</h1>
            <StyledButton>Aobaa</StyledButton>
        </ThemeProvider>
    )
};
