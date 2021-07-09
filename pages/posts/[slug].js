import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import PostBody from '../../components/postbody'
import "prismjs/themes/prism-tomorrow.css";

export default function Post({ post, morePosts, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
      <>
        <Layout>
            <Head>
                <title>Chinwal Prasad | Posts - { post.title }</title>
            </Head>
            <article className="mb-32">
                <main className="my-10 mx-5 md:mx-auto p-5 max-w-full md:max-w-4xl rounded-lg">
                    <div className="my-4 rounded-lg bg-white overflow-hidden shadow-md">
                        <h2 className="sr-only" id="profile-overview-title">Post</h2>
                        <div className="bg-white p-6">
                            <div className="sm:flex sm:items-center sm:justify-between">
                                <div className="sm:flex sm:space-x-5">
                                    <div className="flex-shrink-0">
                                        <img className="mx-auto h-20 w-20 rounded-full" src={post.cover} alt="Post Cover" />
                                    </div>
                                    <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                        <p className="text-sm font-medium text-indigo-600">{ post.published }</p>
                                        <p className="text-xl font-bold text-gray-900 sm:text-2xl">{post.title}</p>
                                        <p className="text-sm font-medium text-gray-600">{post.excerpt}</p>
                                    </div>
                                </div>
                                <div className="mt-5 flex justify-center sm:mt-0">
                                    <div className="flex space-x-2 justify-center items-center">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PostBody content={post.content} />
                </main>
            </article>
        </Layout>
      </>
    )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'published',
    'slug',
    'cover',
    'excerpt',
    'content'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}