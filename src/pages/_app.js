import "@/styles/globals.css";

// Context
import HomeContextProvider from "@/context/HomeContext";

export default function App({ Component, pageProps }) {
  return (
    <HomeContextProvider>
      <Component {...pageProps} />
    </HomeContextProvider>
  );
}
