// local files
import { Main } from '../../containers';

function index() {
  return (
    <Main withHeaderImg>
      <div className="flex items-center justify-between bg-white p-5">
        <img
          className="mr-3 w-44 rounded-md border-4 object-contain"
          src="https://res.cloudinary.com/deebb8zh7/image/upload/v1645031322/MalekSmida_npeq7d.jpg"
          alt="Malek Smida"
        />
        <div>
          <p className="mb-1 text-xl font-bold text-dark-color">Malek Smida</p>
          <p className="text-md mb-1 text-gray-500">Founder</p>
          <a
            target="_blank"
            href="https://www.maleksmida.com"
            rel="noopener noreferrer"
            className="cursor-pointer text-sm text-primary-color underline transition-colors duration-200 ease-in-out"
          >
            About Malek
          </a>
        </div>
      </div>
      <article className="mx-auto max-w-3xl p-5">
        <h1>
          My goal is to learn, grow, and every day become a slightly better
          version of who I was yesterday.
        </h1>
        <h1>
          I have named my blog Wanderer because that is how I would characterize
          my learning experience so far.
        </h1>
        <h1 className="my-4 text-xl font-semibold">Wanderer blog is about:</h1>
        <ul className="list-disc space-y-2">
          <li>
            <span className="font-semibold">
              Parable and short stories of wisdom
            </span>
            , as they say "Tell me a fact and I will learn. Tell me the truth
            and I will believe. But tell me a story and it will live in my heart
            forever" -Native American proverb{' '}
          </li>
          <li>
            <span className="font-semibold">
              Book summary and best of quotes
            </span>
            , as Rene Descartes said: "The reading of all good books is like
            conversation with the finest men of past centuries." (the word
            "good" is relative)
          </li>
          <li>
            <span className="font-semibold">
              Share my personal experiences that may help or inspire you
            </span>
          </li>
          <li>
            <span className="font-semibold">
              Ancient philosophy, wisdom and way of living
            </span>
            , which gonna change your life forever
          </li>
          <li>
            <span className="font-semibold">
              Social psychology and human behaviour
            </span>
          </li>
        </ul>
      </article>
    </Main>
  );
}

export default index;
