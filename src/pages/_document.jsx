import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/color-mode';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#da532c" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body className="text-gray-800 antialiased">
          <div id="page-transition"></div>
          <ColorModeScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
