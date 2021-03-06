// node modules
import Link from 'next/link';

function index() {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <Link href="/">
        <h1 className="cursor-pointer text-2xl font-bold text-dark-color transition-colors duration-200 ease-in-out hover:text-primary-color">
          Blog
        </h1>
      </Link>
      <Link href="/about">
        <h1 className="cursor-pointer font-semibold transition-colors duration-200 ease-in-out hover:text-primary-color">
          About
        </h1>
      </Link>
    </header>
  );
}

export default index;
