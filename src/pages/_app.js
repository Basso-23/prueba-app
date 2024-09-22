import "@/styles/globals.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Prueba tecnica</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
