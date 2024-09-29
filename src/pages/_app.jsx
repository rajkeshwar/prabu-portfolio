import Script from "next/script";
import "../app/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy="beforeInteractive" src="js/jquery.min.js" />
      <Script strategy="beforeInteractive" src="js/bootstrap.min.js" />
      <Script strategy="beforeInteractive" src="js/jquery.flexslider-min.js" />
      <Script strategy="beforeInteractive" src="js/modernizr-2.6.2.min.js" />
      <Script strategy="beforeInteractive" src="js/google_map.js" />
      <Script strategy="beforeInteractive" src="js/owl.carousel.min.js" />
      <Script strategy="beforeInteractive" src="js/jquery.countTo.js" />
      <Script strategy="beforeInteractive" src="js/jquery.waypoints.min.js" />
      <Script strategy="beforeInteractive" src="js/respond.min.js" />
      <Script strategy="beforeInteractive" src="js/jquery.easing.1.3.js" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
