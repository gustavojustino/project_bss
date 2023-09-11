// pages/_app.js 
import '../styles/global.css'; // Importe os estilos globais
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  // Componente _app.js padrão
  return <>
  <Head>
    <link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"/>
  </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp;