// local files
import { Main } from '../../containers';
import aboutList from '../../utils/aboutBlogList';
import hyperlinks from '../../utils/hyperlinks';

function index() {
  return (
    <Main>
      <div className="mx-auto my-10 flex w-full max-w-3xl items-center">
        <img
          className="mr-3 w-44 rounded-md border-4 object-contain"
          src="https://res.cloudinary.com/deebb8zh7/image/upload/v1664017465/Malek_Smida_thumbnail_usjhwc.jpg"
          alt="Malek Smida"
        />
        <div>
          <p className="mb-1 text-xl font-bold text-dark-color">Malek Smida</p>
          <p className="text-md mb-1 text-gray-500">Founder</p>
          <a
            target="_blank"
            href={hyperlinks.Portfolio}
            rel="noopener noreferrer"
            className="cursor-pointer text-sm text-primary-color underline transition-colors duration-200 ease-in-out"
          >
            About Malek
          </a>
        </div>
      </div>
      <article className="mx-auto mb-10 max-w-3xl">
        <h1>
          I believe in love, love of being, love of everything as it is with no
          judgement. I always consider myself a student of life. I hope to
          continue learning and growing.
        </h1>
        <h1>
          I have named my blog Wanderer because that is how I would characterize
          my learning experience so far.
        </h1>
        <h1 className="mt-8 mb-4 text-xl font-semibold">
          Wanderer blog is about:
        </h1>
        <ul className="list-disc space-y-2">
          {aboutList.map((item) => (
            <li key={item._id}>
              <span className="font-semibold">{item.title}</span>
              {item.description}
            </li>
          ))}
        </ul>
      </article>
    </Main>
  );
}

export default index;
