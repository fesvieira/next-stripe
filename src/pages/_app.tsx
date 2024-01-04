import TopBar from "@/components/TopBar/TopBar";
import { GlobalStyles } from "@/styles/global";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Component, FC } from "react";

const inter = Inter({ subsets: ["latin"] });

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={inter.className}>
      <GlobalStyles />

      <Head>
        <title>Loja Lajota</title>
        <link rel="icon" type="image/x-icon" href="/logo.png" />
      </Head>

      <TopBar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
