// node modules
import Link from 'next/link';

// local files
import { Post } from '../../typings';
import { urlFor } from '../../services/sanity';

interface PropsPost {
  post: Post;
}

/**
 * Post card component that is shown in home page
 */
const PostCard: React.FC<PropsPost> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug.current}`}>
      <div
        className="group cursor-pointer overflow-hidden rounded-lg border"
        data-testid="post-card-container"
      >
        <img
          className="h-48 w-full object-cover transition-transform duration-200 ease-in-out group-hover:scale-105"
          src={urlFor(post.mainImage).url()!}
          alt={post.slug.current}
        />
        <div className="flex justify-between bg-white p-5">
          <div>
            <p className="mb-1 text-lg font-bold text-dark-color">
              {post.title}
            </p>
            <p className="text-xs text-dark-color">
              <span className="mr-1 rounded-md bg-blue-50 py-0.5 px-1.5 text-primary-color">
                {post.description}
              </span>
              by {post.author.name}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
