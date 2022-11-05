// node modules
import { GetStaticProps } from 'next/types';
import { PortableText } from '@portabletext/react';

// local files
import { Main } from '../../containers';
import { sanityClient, urlFor } from '../../services/sanity';
import { Post } from '../../typings';
import { CommentForm, CommentList } from '../../components';
import hyperlinks from '../../utils/hyperlinks';

// typing
interface PropsPost {
  post: Post;
}

function Post({ post }: PropsPost) {
  return (
    <Main hideBanner>
      <img
        src={urlFor(post.mainImage).url()!}
        alt={post.title}
        className="h-48 w-full object-cover"
      />
      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mb-2 mt-5 text-3xl font-semibold">{post.title}</h1>
        <h2 className="text-xl font-light text-gray-500">{post.description}</h2>
        <div className="mt-7 flex items-center">
          <img
            className="mr-2 h-10 w-10 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt={post.author.name}
          />
          <div className="flex flex-col">
            <a
              target="_blank"
              href={hyperlinks.LinkedIn}
              rel="noopener noreferrer"
              className="cursor-pointer text-sm text-primary-color underline"
            >
              {post.author.name}
            </a>
            <p className="text-sm text-gray-400">
              {new Date(post._createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <div className="my-10">
          <PortableText value={post.body} />
        </div>
      </article>

      <CommentForm post={post} />
      <CommentList post={post} />
    </Main>
  );
}

export default Post;

export const getStaticPaths = async () => {
  // get all slugs of posts
  const query = `*[_type == "post"]{
    _id,
    slug{
      current
    }
  }`;

  const posts = await sanityClient.fetch(query);

  // prepare available paths
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking', // disable the dummy pre-rendered with empty data by nextjs
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // fetch post with slug in param
  const query = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author -> {
      name,
      image
    },
    'comments': *[
      _type == 'comment' && 
      post._ref == ^._id &&
      approved == true
    ],
    description,
    mainImage,
    slug,
    body
  }`;

  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  // protect when no data fetched, nextjs gonna show 404 not found page
  if (!post) return { notFound: true };

  return {
    props: {
      post,
    },
    // after 3600s * 24 (1day), nextjs gonna update the old cache version
    // you can put 60s if you need update the SSR rendered version every 1min
    revalidate: 60,
  };
};
