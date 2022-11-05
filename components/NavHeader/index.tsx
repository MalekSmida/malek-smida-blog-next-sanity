// node modules
import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// local files
import hyperlinks from '../../utils/hyperlinks';
import navList from '../../utils/navList';

export interface NavButtonProps {
  _id: string;
  title: string;
  pageLink?: string;
}

function NavHeader() {
  // hooks
  const currentRoute = useRouter();

  // components
  const NavButton: FC<NavButtonProps> = ({ title, pageLink }) =>
    pageLink ? (
      <Link href={pageLink} passHref>
        {currentRoute.pathname === pageLink ? (
          <h1 className="relative cursor-pointer select-none text-sm font-medium text-primary-color before:absolute before:-bottom-1 before:h-0.5 before:w-full before:bg-primary-color">
            {title}
          </h1>
        ) : (
          <h1 className="relative cursor-pointer select-none text-sm font-medium text-gray-500 transition-colors duration-300 ease-in-out before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-color before:transition hover:text-primary-color hover:before:scale-100">
            {title}
          </h1>
        )}
      </Link>
    ) : (
      <a
        href={hyperlinks.Portfolio}
        target="_blank"
        rel="noopener noreferrer"
        title="Wanderer blog"
      >
        <h1 className="relative cursor-pointer select-none text-sm font-medium text-gray-500 transition-colors duration-300 ease-in-out before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-color before:transition hover:text-primary-color hover:before:scale-100">
          {title}
        </h1>
      </a>
    );

  return (
    <header
      id="header"
      className="mx-auto hidden h-16 max-w-screen-xl items-center justify-between bg-white px-4 sm:px-6 md:flex lg:px-8"
    >
      <nav aria-labelledby="header-navigation">
        <h2 className="sr-only" id="header-navigation">
          Header navigation
        </h2>

        <ul className="flex items-center gap-10 text-sm">
          {navList.map((item) => (
            <NavButton
              _id={item._id}
              key={item._id}
              title={item.title}
              pageLink={item.pageLink}
            />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavHeader;
