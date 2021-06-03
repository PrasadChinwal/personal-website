import Layout from '../components/layout'
import Head from 'next/head'
import { getAllPosts } from '../lib/api'

export default function Home( {allPosts} ) {
  return (
    <>
      <Layout>
        <Head>
          <title>Chinwal Prasad - Home</title>
        </Head>
        <main className="my-10 mx-5 md:mx-auto p-5 max-w-full md:max-w-4xl rounded-lg bg-gray-100">
          <h1 className="font-bold">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
        </main>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'published',
    'slug',
    'cover',
    'excerpt',
  ])
  return {
    props: { allPosts },
  }
}