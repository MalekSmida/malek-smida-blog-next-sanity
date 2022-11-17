// node modules
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

// local files
import { commentSchema } from '../../utils/validationSchema';
import { PropsComment } from '../CommentList';
import useCreateComment from '../../hooks/useCreateComment';

// typing
export interface IFormInput {
  _id: string;
  name: string;
  email: string;
  comment: string;
}

interface PropsErrorMessage {
  field: string;
}

/**
 * Comment form by the end of Post page
 */
const CommentForm: React.FC<PropsComment> = ({ post }) => {
  // hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(commentSchema),
  });
  // custom hook
  const { isCreated, isLoading, handleCreateComment } = useCreateComment();

  // handle form submit to create new comment
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handleCreateComment(data);
  };

  if (isCreated) {
    return (
      <div className="my-10 mx-auto flex w-full max-w-2xl flex-col bg-primary-color p-12 text-white">
        <h3 className="mb-3 text-3xl font-bold">
          Thank you for submitting your comment
        </h3>
        <p>Once it has been approved, it will appear below</p>
      </div>
    );
  }

  /**
   * Error message text
   */
  const ErrorMessage: React.FC<PropsErrorMessage> = ({ field }) => (
    <span className="text-red-500">▪️ The {field} Field is invalid</span>
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mb-10 flex w-full max-w-2xl flex-col bg-gray-100 p-12"
    >
      <h3 className="text-3xl">Leave a comment bellow</h3>
      <hr className="mt-2 py-4" />

      <input {...register('_id')} type="hidden" name="_id" value={post._id} />

      <label className="mb-5 block">
        <span className="text-gray-700">Name</span>
        <input
          {...register('name')}
          className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-primary-color"
          placeholder="John Doe"
          type="text"
        />
      </label>
      <label className="mb-5 block">
        <span className="text-gray-700">Email</span>
        <input
          {...register('email')}
          className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-primary-color"
          placeholder="example@gmail.com"
          type="email"
        />
      </label>
      <label className="block">
        <span className="text-gray-700">Comment</span>
        <textarea
          {...register('comment')}
          className="form-textarea mt-1 block w-full rounded border py-2 px-3 shadow outline-primary-color"
          placeholder="What is on your mind?"
          rows={4}
        />
      </label>

      {/* handle error messages */}
      <div className="flex flex-col p-5">
        {errors.name && <ErrorMessage field="Name" />}
        {errors.email && <ErrorMessage field="Email" />}
        {errors.comment && <ErrorMessage field="Comment" />}
      </div>

      <input
        type="submit"
        disabled={isLoading}
        className="focus:shadow-outline cursor-pointer rounded bg-primary-color py-2 px-4 font-bold text-white shadow transition-colors duration-200 ease-in-out hover:bg-indigo-700 focus:outline-none disabled:bg-indigo-700"
      />
    </form>
  );
};

export default CommentForm;
