import ReactDOM from 'react-dom';
import Head from 'next/head';
import Router from 'next/router';
import { DefaultSeo } from 'next-seo';
import { ChakraProvider, theme } from '@chakra-ui/react';

import '~/styles/globals.css';
import SEO from '../../next-seo.config';
import PageChange from '~/components/PageChange/PageChange';

Router.events.on('routeChangeStart', (url) => {
  document.getElementById('__next').classList.add('hidden');
  document.body.classList.add('body-page-transition');
  ReactDOM.render(<PageChange path={url} />, document.getElementById('page-transition'));
});
Router.events.on('routeChangeComplete', () => {
  document.getElementById('__next').classList.remove('hidden');
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});
Router.events.on('routeChangeError', () => {
  document.getElementById('__next').classList.remove('hidden');
  ReactDOM.unmountComponentAtNode(document.getElementById('page-transition'));
  document.body.classList.remove('body-page-transition');
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shopedia</title>
      </Head>
      <ChakraProvider theme={theme} resetCSS={false}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />;
      </ChakraProvider>
    </>
  );
}

export default MyApp;
