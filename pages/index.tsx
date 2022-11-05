// local files
import { Post as PostComponent } from '../components';
import { Main } from '../containers';
import { sanityClient } from '../services/sanity';
import { Post } from '../typings';

// typing
interface PropsHome {
  posts: Post[];
}

export default function Home({ posts }: PropsHome) {
  return (
    <Main withHeaderImg>
      {/* posts */}
      <div className="grid grid-cols-1 gap-3 p-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {posts.map((post) => (
          <PostComponent post={post} key={post._id} />
        ))}
      </div>
    </Main>
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
