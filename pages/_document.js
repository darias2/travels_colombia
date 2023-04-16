import Document, { Html, Head, Main, NextScript } from 'next/document';

class myDocument extends Document {
  render() {
    return (
      <Html
        lang="es-419"
        data-constrast="Normal"
        data-fontsize="Normal"
        data-space="Normal"
        data-scalecontent="Normal"
        data-lineheight="Normal"
        data-highlighttitles="Normal"
        datalightlinks="Normal"
      >
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link
            rel="icon"
            type="image/ico"
            sizes="16x16"
            href="/favicon.ico"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default myDocument;
