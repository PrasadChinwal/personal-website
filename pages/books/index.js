import Layout from '../../components/layout'
import { StarIcon, BookOpenIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import { books } from './booklist';

export default function Books() {
  return (
    <>
      <Layout>
        <Head>
          <title>Chinwal Prasad - About</title>
        </Head>
        <main className="my-10 mx-5 md:mx-auto p-5 max-w-full md:max-w-4xl rounded-lg">
            <div className="my-5 p-5 rounded-lg shadow-lg md:flex md:items-center md:justify-between md:space-x-5">
                <div className="flex items-start space-x-5">
                    <div className="pt-1.5">
                        <h1 className="inline-flex px-2 space-x-2 text-2xl font-bold text-gray-900">
                          <BookOpenIcon className="w-8 h-8"></BookOpenIcon>
                          <span>Books</span>
                        </h1>
                        <p className="text-sm font-medium text-gray-500">
                            Here are some of my favourite books.
                        </p>
                    </div>
                </div>
            </div>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
            {books.map((book) => (
                <li
                key={book.name}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
                >
                    <div className="flex-1 flex flex-col p-8">
                        <img className="w-48 h-60 flex-shrink-0 mx-auto bg-contain bg-black rounded-lg" src={book.imageUrl} alt="" />
                        <h3 className="mt-6 text-gray-900 text-sm font-medium">{book.name}</h3>
                        <dl className="mt-1 flex-grow flex flex-col justify-between">
                        <dt className="sr-only">Title</dt>
                        <dd className="text-gray-500 text-sm">{book.author}</dd>
                        <dt className="sr-only">Role</dt>
                        <dd className="mt-3">
                            <span className="inline-flex items-center px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                            <StarIcon className="w-4 h-4"></StarIcon>
                            {book.rating}
                            </span>
                        </dd>
                        </dl>
                    </div>
                </li>
            ))}
            </ul>
        </main>
      </Layout>
    </>
  )
}
