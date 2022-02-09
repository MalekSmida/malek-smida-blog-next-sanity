// node modules
import { GetStaticProps } from 'next/types';
import PortableText from 'react-portable-text';
import { useForm, SubmitHandler } from 'react-hook-form';

// local files
import { Main } from '../../containers';
import { sanityClient, urlFor } from '../../services/sanity';
import { Post } from '../../typings';

interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

interface Props {
  post: Post;
}

function Post({ post }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Main>
      <img
        src={urlFor(post.mainImage).url()!}
        alt={post.title}
        className="h-48 w-full object-cover"
      />
      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-5 mb-3 text-3xl font-semibold">{post.title}</h1>
        <h2 className="mb-2 text-xl font-light text-gray-500">
          {post.description}
        </h2>
        <div className="flex items-center">
          <img
            className="mr-2 h-10 w-10 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt={post.author.name}
          />
          <p className="text-sm font-extralight text-gray-500">
            By <span className="text-primary-color">{post.author.name}</span> at{' '}
            {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <div className="my-10">
          <PortableText
            className=""
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h2 className="my-5 text-xl font-bold" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children} </li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
              blockquote: (props: any) => (
                <h1
                  className="my-2 rounded-sm bg-gray-200 p-3 text-sm font-extralight"
                  {...props}
                />
              ),
            }}
          />
        </div>

        <hr className="my-5 mx-auto max-w-lg border border-primary-color" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
        >
          <h3 className="text-sm text-gray-500">Enjoyed this article ?</h3>
          <h4 className="text-3xl font-bold">Leave a comment bellow</h4>
          <hr className="mt-2 py-4" />

          <input
            {...register('_id')}
            type="hidden"
            name="_id"
            value={post._id}
          />

          <label className="mb-5 block">
            <span className="text-gray-700">Name</span>
            <input
              {...register('name', { required: true })}
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-primary-color"
              placeholder="John Doe"
              type="text"
            />
          </label>
          <label className="mb-5 block">
            <span className="text-gray-700">Email</span>
            <input
              {...register('email', { required: true })}
              className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-primary-color"
              placeholder="example@gmail.com"
              type="email"
            />
          </label>
          <label className="mb-5 block">
            <span className="text-gray-700">Comment</span>
            <textarea
              {...register('comment', { required: true })}
              className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-primary-color"
              placeholder="What is on your mind?"
              rows={8}
            />
          </label>

          {/* handle error messages */}
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">
                ▪️ The Name Field is required
              </span>
            )}
            {errors.email && (
              <span className="text-red-500">
                ▪️ The Email Field is required
              </span>
            )}
            {errors.comment && (
              <span className="text-red-500">
                ▪️ The Comment Field is required
              </span>
            )}
          </div>

          <input
            type="submit"
            className="focus:shadow-outline cursor-pointer rounded bg-primary-color py-2 px-4 font-bold text-white shadow hover:bg-black focus:outline-none"
          />
        </form>
      </article>
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
    revalidate: 3600 * 24,
  };
};
