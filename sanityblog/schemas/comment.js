export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'email',
      type: 'string',
    },
    {
      name: 'comment',
      type: 'text',
    },
    {
      name: 'post',
      type: 'reference',
      to: [{ type: 'post' }],
    },
    {
      title: 'Approved',
      name: 'approved',
      type: 'boolean',
      description: "Comment won't show on the blog without approval",
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
};
