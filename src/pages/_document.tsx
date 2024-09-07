import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <meta charSet='UTF-8' />
        <meta name='keywords' content='GWID' />
        <meta name='description' content={`GWID`} />
        <link rel='icon' href='/balloon.png' />    
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
