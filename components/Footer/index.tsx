// local files
import hyperlinks from '../../utils/hyperlinks';

function index() {
  return (
    <footer className="flex h-20 w-full items-center justify-center border-t">
      <p className="flex items-center justify-center text-sm font-medium text-gray-700">
        ©Copyright <span className="ml-2 font-bold"> Malek Smida.</span>{' '}
        <a
          href={hyperlinks.GithubRepo}
          target="_blank"
          rel="noopener noreferrer"
          title="Wanderer blog"
          className="ml-2 mr-1 cursor-pointer text-primary-color underline"
        >
          Fork it
        </a>{' '}
        and create yours
      </p>
    </footer>
  );
}

export default index;
