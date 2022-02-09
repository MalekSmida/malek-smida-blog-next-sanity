// node modules
import React from 'react';

// local files
import { Header } from '../../components';

interface Props {
  children?: React.ReactNode;
}

function index({ children }: Props) {
  return (
    <>
      <main className="mx-auto flex max-w-6xl flex-col items-center">
        <Header />
        {children}
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <h4 className="flex items-center justify-center">
          ©Copyright <span className="mx-2 font-bold"> Malek Smida</span>
        </h4>
      </footer>
    </>
  );
}

export default index;
