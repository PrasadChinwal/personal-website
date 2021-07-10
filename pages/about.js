import Layout from '../components/layout'
import Head from 'next/head'
import { LINKS } from '../lib/constants';
import Link from 'next/link'

const user = {
    name: 'Chinwal Prasad',
    role: 'Full Stack Developer',
    imageUrl: '/prasad-chinwal.jpeg',
}


export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>Chinwal Prasad - About</title>
        </Head>
        <main className="my-10 mx-5 md:mx-auto p-5 max-w-full md:max-w-4xl rounded-lg">
            <div className="my-4 rounded-lg bg-white overflow-hidden shadow-md">
                <h2 className="sr-only" id="profile-overview-title">
                Profile Overview
                </h2>
                <div className="bg-white p-6">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="sm:flex sm:space-x-5">
                            <div className="flex-shrink-0">
                                <img className="mx-auto h-20 w-20 rounded-full" src={user.imageUrl} alt="" />
                            </div>
                            <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                <p className="text-sm font-medium text-gray-600">Hi, I am</p>
                                <p className="text-xl font-bold text-gray-900 sm:text-2xl">{user.name}</p>
                                <p className="text-sm font-medium text-gray-600">{user.role}</p>
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center sm:mt-0">
                            <div className="flex space-x-2 justify-center items-center">
                            {LINKS.map((item) => (
                                <a key={item.name} href={item.href} target="_blank" rel="noreferrer" title="Prasad's Email">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                </a>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shadow-lg relative bg-white">
                <div className="lg:absolute lg:inset-0">
                    <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                        <img
                            className="h-56 rounded-lg w-full object-cover lg:absolute lg:h-full"
                            src="/prasad-chinwal2.jpg"
                            alt="Prasad Chinwal"
                            title="Prasad Chinwal"
                        />
                    </div>
                </div>
                <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
                    <div className="lg:col-start-2 lg:pl-8">
                        <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
                            <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">A few words</h2>
                            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            About Me
                            </h3>
                            <p className="mt-8 text-lg text-gray-500">
                                I'm a full-stack developer at University of Illinois, Springfield. Currently living in Springfield, Illinois, United States of America 🇺🇸.
                            </p>
                            <div className="mt-5 prose prose-indigo text-gray-500">
                                <p>
                                    Originally from Goa, India 🇮🇳, I came to United States to pursue higher degree (Master's in Computer Science) in Fall 2016.
                                </p>
                                <p>
                                    I like to learn new technologies and use them in production applications. Lately I have been spending a lot of time learning DevOps, in hopes of shifting my career towards DevOps. I am also working towards getting my AWS certification.
                                </p>
                                <p>
                                    In my free time I also like to
                                    <Link href="/books">
                                        <a className="mx-1 text-indigo-500 no-underline">
                                            read
                                        </a>
                                    </Link>.
                                    Check out my books section to find out the books I have read and love.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
      </Layout>
    </>
  )
}
