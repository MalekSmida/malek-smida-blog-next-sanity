import { object, string } from 'yup';

const commentSchema = object({
  _id: string().required(),
  name: string().max(20).required(),
  email: string().email().required(),
  comment: string().max(5000).required(),
});

export { commentSchema };
