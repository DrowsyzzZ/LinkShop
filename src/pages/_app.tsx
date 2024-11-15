import "@/styles/global.css";
import Header from "@/components/layout/Header";
import Layout from "@/components/layout/Layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}
