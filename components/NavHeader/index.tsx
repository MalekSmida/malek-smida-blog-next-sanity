// node modules
import Link from 'next/link';
import { useRouter } from 'next/router';

// local files
import { hyperlinks } from '../../utils/contants';
import navList from '../../data/navList';

export interface NavButtonProps {
  _id: string;
  title: string;
  pageLink: string;
}

/**
 * Navigation bar at the top of page
 *
 * @type {React.FC}
 */
function NavHeader() {
  // hooks
  const currentRoute = useRouter();

  // components
  const NavButton: React.FC<NavButtonProps> = ({ title, pageLink }) => (
    <li>
      <Link href={pageLink}>
        {currentRoute.pathname === pageLink ? (
          <span className="relative cursor-pointer select-none text-sm font-medium text-primary-color before:absolute before:-bottom-1 before:h-0.5 before:w-full before:bg-primary-color">
            {title}
          </span>
        ) : (
          <span className="relative cursor-pointer select-none text-sm font-medium text-gray-500 transition-colors duration-300 ease-in-out before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-color before:transition hover:text-primary-color hover:before:scale-100">
            {title}
          </span>
        )}
      </Link>
    </li>
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

          {/* Portfolio link */}
          <li>
            <a
              href={hyperlinks.Portfolio}
              target="_blank"
              rel="noopener noreferrer" // security
              title="Wanderer blog"
            >
              <span className="relative cursor-pointer select-none text-sm font-medium text-gray-500 transition-colors duration-300 ease-in-out before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-primary-color before:transition hover:text-primary-color hover:before:scale-100">
                Portfolio
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavHeader;
