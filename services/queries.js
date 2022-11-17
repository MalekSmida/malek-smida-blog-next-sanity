/**
 * Sanity queries are written in GROQ
 */

const getAllPostsQuery = `*[_type == "post"]{
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

const getAllSlugsOfPostsQuery = `*[_type == "post"]{
    _id,
    slug{
      current
    }
  }`;

const getPostBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    author -> {
      name,
      image
    },
    'comments': *[
      _type == 'comment' && 
      post._ref == ^._id &&
      approved == true
    ],
    description,
    mainImage,
    slug,
    body
  }`;

export { getAllPostsQuery, getAllSlugsOfPostsQuery, getPostBySlugQuery };
