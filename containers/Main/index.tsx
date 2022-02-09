// node modules
import React from 'react';
import Head from 'next/head';

// local files
import { Header } from '../../components';

interface Props {
  children?: React.ReactNode;
}

function index({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Head>
        <title>Malek Smida | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" mx-auto flex w-full max-w-6xl flex-col items-center">
        <Header />
        {children}
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <h4 className="flex items-center justify-center">
          ©Copyright <span className="mx-2 font-bold"> Malek Smida</span>
        </h4>
      </footer>
    </div>
  );
}

export default index;
