import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from 'app/data/data'
import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'


const Navbar = () => {
    return (
        <header className="text-gray-600 body-font w-full bg-white  shadow-box-shadow top-0 sticky z-10 ">
            <div className="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center">
                <div className='flex justify-between items-center'>

                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <span className="ml-3 text-[2rem]">Harshit Yadav &nbsp; &nbsp;

                        </span>
                    </Link>
                    <span className='text-[1.5rem] font-thin '>

                        |  &nbsp; &nbsp;     Next Js Developer  &nbsp; &nbsp; | &nbsp; &nbsp;  React Js Developer </span>
                </div>
                <div className='flex gap-8'>

                    <Link href={GITHUB_URL}>
                        <FaGithub size={30} className="hover:text-highlighter  hover:bg-color-gray hover:rounded-full hover:p-1" />
                    </Link>

                    <Link href={INSTAGRAM_URL}>
                        <FaInstagram size={30} className="hover:text-highlighter  hover:bg-color-gray hover:rounded-full hover:p-1" />
                    </Link>
                    <Link href={LINKEDIN_URL}>
                        <FaLinkedinIn size={30} className="hover:text-highlighter  hover:bg-color-gray hover:rounded-full hover:p-1" />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar