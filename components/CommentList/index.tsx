// local files
import { Post } from '../../typings';

export interface PropsComment {
  post: Post;
}

/**
 * Shows list of comments at the end of post page
 */
const CommentList: React.FC<PropsComment> = ({ post }) => {
  return (
    <div className="mx-auto mb-10 flex w-full max-w-2xl flex-col space-y-2 bg-gray-100 p-12">
      <h3 className="text-3xl">Comments</h3>
      <hr className="pb-2" />
      {!post.comments?.length && (
        <p className="text-gray-400">No comments, be the first to add one ✨</p>
      )}
      {post.comments?.map((comment) => (
        <div key={comment._id}>
          <p>
            <span className="mr-2 text-primary-color">{comment.name}:</span>
            {comment.comment}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
