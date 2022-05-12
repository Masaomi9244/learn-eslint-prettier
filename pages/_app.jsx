import "../styles/globals.css";
import React from "react";
import { useEffect, useState } from "react/cjs/react.production.min";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState();
  useEffect(() => {
    if (state) return;
  }, [state]);
  return <Component {...pageProps} />;
}

export default MyApp;
