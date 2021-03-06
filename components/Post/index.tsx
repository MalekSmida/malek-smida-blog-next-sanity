// node modules
import Link from 'next/link';

// local files
import { Post } from '../../typings';
import { urlFor } from '../../services/sanity';

interface Props {
  post: Post;
}

function index({ post }: Props) {
  return (
    <Link href={`/post/${post.slug.current}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border">
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
              {post.description} by {post.author.name}
            </p>
          </div>
          <img
            className="ml-3 h-12 w-12 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt={post.author.name}
          />
        </div>
      </div>
    </Link>
  );
}

export default index;
