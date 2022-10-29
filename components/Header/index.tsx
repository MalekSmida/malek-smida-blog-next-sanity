// node modules
import Link from 'next/link';

function index() {
  return (
    <header className="flex w-full items-center justify-between p-4 text-lightdark-color">
      <Link href="/">
        <h1 className="cursor-pointer text-2xl font-bold transition-colors duration-200 ease-in-out hover:text-primary-color">
          Home
        </h1>
      </Link>
      <Link href="/about">
        <h1 className="cursor-pointer font-bold transition-colors duration-200 ease-in-out hover:text-primary-color">
          About
        </h1>
      </Link>
    </header>
  );
}

export default index;
