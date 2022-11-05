// node modules
import React from 'react';
import Head from 'next/head';

// local files
import { NavHeader, BackToTopButton, Footer } from '../../components';
import useShowBackToTop from '../../hooks/useShowBackToTop';

// typing
interface PropsMain {
  withHeaderImg?: boolean;
  children?: React.ReactNode;
}

function index({ children, withHeaderImg }: PropsMain) {
  // hooks
  const { showArrowButton } = useShowBackToTop();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>Malek Smida | Wanderer Blog</title>
        <meta
          name="description"
          content="Wanderer blog is about: parable and short stories of wisdom, book summary and quotes, spirituality, ancient philosophy, and social psychology"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <NavHeader />
        {withHeaderImg && (
          <div className="flex w-full items-center justify-between bg-gradient-to-br from-dark-color to-lightdark-color py-5 px-6 md:px-20">
            <div className="space-y-5">
              <h1 className="font-serif text-6xl font-semibold text-white">
                Wanderer
              </h1>
              <h1 className="text-2xl text-white md:w-3/4">
                How sad if we pass through life and never see it with the eyes
                of a child -Anthony De Mello
              </h1>
            </div>
            <img
              src="/moment-to-relax.svg"
              alt="relax Logo"
              className="ml-2 hidden h-52 md:inline-flex"
            />
          </div>
        )}
        {children}
      </main>
      <Footer />
      {showArrowButton && <BackToTopButton />}
    </div>
  );
}

export default index;
