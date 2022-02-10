# My blog

This example shows how to use Next.js (v12), Incremental Static Regeneration (ISR), [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3), TypeScript and Sanity CMS (GROQ query language)

## Preview

Preview live on [Wanderer Bolg](https://wanderer-blog.vercel.app/):

[<img src="https://res.cloudinary.com/deebb8zh7/image/upload/v1644522760/wanderer-blog_ccpshs.png">](https://wanderer-blog.vercel.app/)

## How to use

1- Download or clone the project <br />
2- Run `$ npm install` to add the dependencies <br />
3- Run the project locally `$ npm run dev` <br />

In order to use Sanity CMS follow this steps:

1- Create project in [Sanity](https://www.sanity.io/)
2- Create `.env.local` and add this variables

```bash
NEXT_PUBLIC_SANITY_DATASET=
NEXT_PUBLIC_SANITY_PROJECT_ID=
SANITY_API_TOKEN=
```

3- open sanityblog folder <br />

```bash
$ cd sanityblog
```

4- Run `$ npm install` to add the dependencies <br />
5- Run Sanity dashboard locally `$ sanity start` <br />

## How to use

### Next.js App

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

### Sanity project

Under the folder `\sanityblog` run the command `$ sanity deploy`
