import "@/styles/globals.css";
import Head from "next/head";
import "@fontsource/poppins";

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Task App</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
