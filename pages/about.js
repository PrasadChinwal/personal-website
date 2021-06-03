import Layout from '../components/layout'
import Head from 'next/head'

const user = {
    name: 'Chinwal Prasad',
    role: 'Full Stack Developer',
    email: 'mailto:prasadchinwal5@gmail.com',
    twitter: 'https://twitter.com/ChinwalPrasad',
    instagram: 'https://www.instagram.com/chinwal.prasad/',
    linkedin: 'https://www.linkedin.com/in/prasadchinwal',
    github: 'https://github.com/PrasadChinwal',
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

                                <a href={user.email} target="_blank" rel="noreferrer" title="Prasad's Email">
                                    <svg className="w-5 h-5 text-red-400" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>Gmail</title>
                                        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
                                    </svg>
                                </a>

                                <a href={user.twitter} target="_blank" rel="noreferrer" title="Prasad's Twitter">
                                    <svg className="w-5 h-5 text-blue-400" fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                                        <title>Twitter</title>
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>

                                <a href={user.instagram} target="_blank" rel="noreferrer" title="Prasad's Instagram">
                                    <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24">
                                        <title>Instagram</title>
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>

                                <a href={user.linkedin} target="_blank" rel="noreferrer" title="Prasad's LinkedIn">
                                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" viewBox="0 0 24 24">
                                        <title>LinkedIn</title>
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>

                                <a href={user.github} target="_blank" rel="noreferrer" title="Prasad's Github">
                                    <svg className="w-5 h-5" fill="currentColor" stroke="currentColor" stroke-linecap="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <title>Github</title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                                    </svg>
                                </a>
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
                                In my free time I also like to read. Check out my books section to find out the books I have read and love.
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
