import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from 'app/data/data'
import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'


const Navbar = () => {
    return (
        <>
            <header className="body-font top-0 z-10 w-full  bg-white text-gray-600 shadow-box-shadow md:sticky  md:block ">
                <div className="container mx-auto flex flex-col flex-wrap items-center justify-between  p-5  md:flex-row">
                    <div className='flex flex-col items-center justify-center gap-8 md:flex-row md:justify-between'>

                        <Link href="/" className="title-font flex items-center font-medium text-gray-900 md:mb-0 ">
                            <span className="font-dancingScript text-[2rem] md:ml-3">Harshit Yadav

                            </span>
                        </Link>
                        <span className='flex flex-col items-center justify-center text-[1.3rem] font-thin md:flex-row md:gap-8 md:text-[1.5rem]'>
                            <span>
                                Next.Js Developer
                            </span>
                            <span>
                                React.Js Developer
                            </span>
                        </span>
                    </div>
                    <div className='mt-2 flex gap-8 md:mt-0'>

                        <Link href={GITHUB_URL}>
                            <FaGithub size={30} className="hover:rounded-full  hover:bg-color-gray hover:p-1 hover:text-highlighter" />
                        </Link>

                        <Link href={INSTAGRAM_URL}>
                            <FaInstagram size={30} className="hover:rounded-full  hover:bg-color-gray hover:p-1 hover:text-highlighter" />
                        </Link>
                        <Link href={LINKEDIN_URL}>
                            <FaLinkedinIn size={30} className="hover:rounded-full  hover:bg-color-gray hover:p-1 hover:text-highlighter" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar