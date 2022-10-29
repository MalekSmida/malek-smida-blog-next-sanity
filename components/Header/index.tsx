// node modules
import Link from 'next/link';

interface PropsLinkButton {
  title: string;
  pageLink: string;
}

function index() {
  const LinkButton = ({ title, pageLink }: PropsLinkButton) => (
    <Link href={pageLink}>
      <h1 className="relative cursor-pointer text-lg font-medium transition-colors duration-300 ease-in-out before:absolute before:-bottom-0 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-color before:transition hover:text-primary-color hover:before:scale-100">
        {title}
      </h1>
    </Link>
  );

  return (
    <header className="flex w-full items-center justify-between px-6 py-3 text-lightdark-color">
      <LinkButton title="Home" pageLink="/" />
      <LinkButton title="About" pageLink="/about" />
    </header>
  );
}

export default index;
