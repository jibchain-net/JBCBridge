import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#025aa1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#025aa1" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="keywords"
          content="JBCBridge JBC JIB JIBChain Cross-Chain Token Bridge EVM ETH BTC Web3"
        />
        <meta
          name="description"
          content="JBCBridge | Cross-chain Tokens bridge for JIBChain"
        />

        <meta name="HandheldFriendly" content="true" />
        <meta name="apple-mobile-web-app-title" content="JBCBridge | Cross-chain Tokens bridge for JIBChain" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        <meta property="og:url" content="https://bridge.jbcha.in" />
        <meta property="og:title" content="JBCBridge | Cross-chain Tokens bridge for JIBChain" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://bridge.jbcha.in/logo.png" /> 
        <meta
          property="og:description"
          content="Warp Routes make it safe and easy to bridge your tokens to and from JIBChain!"
        />
      </Head>
      <body className="text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
