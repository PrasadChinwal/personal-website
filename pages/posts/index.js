import Layout from '../../components/layout'
import Head from 'next/head'
import { getAllPosts } from '../../lib/api'

export default function Home( {allPosts} ) {
    return (
    <>
        <Layout>
            <Head>
                <title>Chinwal Prasad - Posts</title>
            </Head>

            <main className="my-10 mx-5 md:mx-auto p-5 max-w-full md:max-w-4xl rounded-lg bg-gray-100">
                <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
                        <div>
                            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">From the Blog</h2>
                            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                            Things I have learnt and want to share with you all. I write about technical stuff and new tools.
                            </p>
                        </div>
                        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                            {allPosts.map((post) => (
                            <div key={post.title}>
                                <div>
                                    <a href="#" className="inline-block">
                                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium">
                                        {post.category}
                                        </span>
                                    </a>
                                </div>
                                <a href={post.href} className="block mt-4">
                                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                    <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
                                </a>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href={"/posts/" + post.slug} className="text-indigo-600 hover:text-indigo-900">
                                            Read More
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href="#">{post.author}</a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime={post.published}>{post.published}</time>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
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