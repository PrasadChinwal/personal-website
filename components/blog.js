import Link from 'next/link'

export default function Blog({allPosts}) {
return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-2xl mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
            <div>
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Posts</h2>
            </div>
            <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {allPosts.map((post) => (
                <div key={post.title} className="rounded-lg shadow-lg p-5">
                    <p className="text-sm text-gray-500">
                        <time dateTime={post.published}>{post.published}</time>
                    </p>
                    <Link href={"/posts/" + post.slug}>
                        <a className="mt-2 block">
                            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                            <p className="mt-3 text-base text-gray-500" title="description">{post.excerpt}</p>
                        </a>
                    </Link>
                    <div className="mt-3">
                        <Link href={"/posts/" + post.slug}>
                            <a className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                            Read full story
                            </a>
                        </Link>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
)
}