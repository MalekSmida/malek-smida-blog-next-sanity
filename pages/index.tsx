// node modules
import Head from 'next/head';

// local files
import { Post as PostComponent } from '../components';
import { Main } from '../containers';
import { sanityClient } from '../services/sanity';
import { Post } from '../typings';

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className="m-auto flex min-h-screen max-w-6xl flex-col items-center justify-between">
      <Head>
        <title>Malek Smida | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <div className="flex w-full items-center justify-between bg-dark-color px-20 py-5">
          <div className="space-y-5 md:px-2">
            <h1 className="font-serif text-6xl font-semibold text-white">
              Wanderer
            </h1>
            <h1 className="text-2xl text-white md:w-3/4">
              How sad if we pass through life and never see it with the eyes of
              a child -Anthony De Mello
            </h1>
          </div>
          <img
            src="/moment-to-relax.svg"
            alt="relax Logo"
            className="ml-2 hidden h-52 md:inline-flex"
          />
        </div>

        {/* posts */}
        <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3">
          {posts.map((post) => (
            <PostComponent post={post} key={post._id} />
          ))}
        </div>
      </Main>
    </div>
  );
}

// server side rendering of home page
export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    _createdAt,
    title,
    author->{
      name, 
      image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
