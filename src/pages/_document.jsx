import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
  title: "RAMACHANDRA PRABU MURALIMOHAN",
  description: `
    Demonstrated 17 years of experience and successes in modern 
    front-end web, hybrid and mobile frameworks, architecture, 
    agile methodologies, public clouds, and DevOps with organizations 
    relating to banking, financial services
    `,
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/icomoon.css" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/flexslider.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/style.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
