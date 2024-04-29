import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <html lang="fr" />
        <meta
          name="description"
          content="portfolio qui regroupe à la fois quelques réalisations pertinentes et mon parcours de vie."
        />
        <title>VS Personal Page</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
