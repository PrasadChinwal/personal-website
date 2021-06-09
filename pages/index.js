import Layout from '../components/layout'
import Head from 'next/head'
import { getAllPosts } from '../lib/api'
import Blog from '../components/blog';

export default function Home( {allPosts} ) {
  return (
    <>
      <Layout>
        <Head>
          <title>Chinwal Prasad - Home</title>
        </Head>
        <main className="my-10 mx-5 md:mx-auto p-5 max-w-full md:max-w-4xl rounded-lg shadow-lg">
          <div className="relative px-4 sm:px-6 lg:px-8">
            <div className="text-lg max-w-prose mx-auto">
              <h1>
                <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                  Hey
                </span>
                <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  I'm Prasad Chinwal
                </span>
                <span className="mt-2 block text-base text-center text-indigo-600 font-semibold tracking-wide">
                Developer by day and <em>gamer</em> by night.
                </span>
              </h1>
              <p className="mt-8 text-xl text-gray-500 leading-8">
              I'm a developer, gamer, writer, and Manchester United fan. I'm currently building web apps and maintaining databases at Illinois Prescription Monitoring Program.
              </p>
              <p className="mt-8 text-xl text-gray-500 leading-8">
                In the past I worked as a Full Stack developer at University of Illinois Springfield where I helped built web apps for internal departments.
              </p>
            </div>
          </div>
          <Blog allPosts={allPosts}></Blog>
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