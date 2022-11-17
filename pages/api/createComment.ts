// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// node modules
import type { NextApiRequest, NextApiResponse } from 'next';
import sanityClient from '@sanity/client';

// local files
import { feedbackMessages } from '../../utils/contants';

// Sanity instance
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-03-25',
};
const client = sanityClient(config);

// service
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { _id, name, email, comment } = JSON.parse(req.body);

  try {
    // create comment sanity service
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: feedbackMessages.FAILED_COMMENT, error });
  }

  res.status(201).json({ message: feedbackMessages.SUCCESS_COMMENT });
}
