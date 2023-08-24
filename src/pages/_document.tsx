import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { gilroy } from "~/assets/fonts";

export default function Document() {
  return (
    <Html lang="en" className={`${gilroy.variable}`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
