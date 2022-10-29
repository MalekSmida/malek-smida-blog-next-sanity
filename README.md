# My blog

This example shows how to use [Next.js](https://nextjs.org/) [(v12)](https://nextjs.org/blog/next-12), [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) (ISR), [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3), TypeScript and [Sanity CMS](https://www.sanity.io/) (GROQ query language)

## Preview

Preview live => [Wanderer Bolg](https://www.maleksmida.blog/):

[![image](https://user-images.githubusercontent.com/58492485/185740638-32885d95-d167-44a0-b772-45dc343e5c46.png)](https://www.maleksmida.blog/)

## How to use

1- Download or clone the project <br />
2- Run `$ npm install` to add the dependencies <br />
3- Run the project locally `$ npm run dev` <br />

In order to use Sanity CMS follow this steps:

1- Create project in [Sanity](https://www.sanity.io/) <br />
2- Create `.env.local` and add this variables <br />

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
