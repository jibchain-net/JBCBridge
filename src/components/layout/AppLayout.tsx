import Head from 'next/head';
import { PropsWithChildren } from 'react';

import { Footer } from '../nav/Footer';
import { Header } from '../nav/Header';

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>JBCBridge | Cross-Chain Token Bridge for JIBChain</title>
      </Head>
      <div
        style={styles.container}
        id="app-content"
        className="relative flex flex-col justify-between h-full min-h-screen w-full min-w-screen bg-gray-50"
      >
        <div className="hidden md:flex absolute left-[8%] top-[15%]">
        </div>
        <div className="hidden md:flex absolute right-[8%] bottom-1/4">
        </div>
        <Header />
        <div className="sm:px-4 mx-auto grow flex items-center max-w-screen-xl">
          <main className="w-full flex-1 my-4 flex items-center justify-center">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}

const styles = {
  container: {
    backgroundImage: 'url(/backgrounds/lines-bg-top.svg)',
    backgroundSize: '94vw',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center 80px',
  },
};
