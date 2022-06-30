import React from "react";
import Head from "next/head";
import Navigation from "./navigation";
import Footer from "./footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Iyan Laylor</title>
        <meta name="description" content="Iyan Laylor Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
