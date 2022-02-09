// node modules
import Link from 'next/Link';

function index() {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <Link href="/">
        <h1 className="cursor-pointer text-2xl font-bold text-dark-color transition-colors duration-200 ease-in-out hover:text-primary-color">
          Blog
        </h1>
      </Link>
      <a
        target="_blank"
        href="https://malek-smida.netlify.app/"
        rel="noopener noreferrer"
      >
        <h1 className="cursor-pointer font-semibold transition-colors duration-200 ease-in-out hover:text-primary-color">
          Who am I ?
        </h1>
      </a>
    </header>
  );
}

export default index;
