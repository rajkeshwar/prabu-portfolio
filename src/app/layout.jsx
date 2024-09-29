
import Script from "next/script";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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

        <Script strategy="lazyOnload" src="js/jquery.min.js" />
        <Script strategy="lazyOnload" src="js/bootstrap.min.js" />
        <Script strategy="lazyOnload" src="js/jquery.flexslider-min.js" />
        <Script strategy="lazyOnload" src="js/modernizr-2.6.2.min.js" />
        <Script strategy="lazyOnload" src="js/google_map.js" />
        <Script strategy="lazyOnload" src="js/owl.carousel.min.js" />
        <Script strategy="lazyOnload" src="js/jquery.countTo.js" />
        <Script strategy="lazyOnload" src="js/jquery.waypoints.min.js" />
        <Script strategy="lazyOnload" src="js/respond.min.js" />
        <Script strategy="lazyOnload" src="js/jquery.easing.1.3.js" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
