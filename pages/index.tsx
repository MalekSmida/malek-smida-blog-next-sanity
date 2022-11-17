// local files
import { Post as PostComponent } from '../components';
import { Main } from '../containers';
import { getAllPostsQuery } from '../services/queries';
import { sanityClient } from '../services/sanity';
import { Post } from '../typings';

// typing
interface PropsHome {
  posts: Post[];
}

export default function Home({ posts }: PropsHome) {
  return (
    <Main>
      {/* posts */}
      <div
        className="grid grid-cols-1 gap-3 p-6 sm:grid-cols-2 md:gap-6 lg:grid-cols-3"
        data-testid="posts-container"
      >
        {posts.map((post) => (
          <PostComponent post={post} key={post._id} />
        ))}
      </div>
    </Main>
  );
}

// server side rendering of home page
export const getServerSideProps = async () => {
  // fetch all posts
  const posts = await sanityClient.fetch(getAllPostsQuery);

  return {
    props: {
      posts,
    },
  };
};
