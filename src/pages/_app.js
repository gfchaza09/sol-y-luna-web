import "@/styles/globals.css";

// Context
import HomeContextProvider from "@/context/HomeContext";
// NextUI
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  return (
    <HomeContextProvider>
      {/* <NextUIProvider> */}
      <Component {...pageProps} />
      {/* </NextUIProvider> */}
    </HomeContextProvider>
  );
}
