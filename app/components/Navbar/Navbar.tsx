import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from 'app/data/data'
import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'


const Navbar = () => {
    return (
        <>
            <header className="text-gray-600 body-font w-full bg-white  shadow-box-shadow top-0 md:sticky z-10  md:block ">
                <div className="container mx-auto flex flex-col md:flex-row flex-wrap p-5  justify-between  items-center">
                    <div className='flex flex-col md:flex-row justify-center md:justify-between gap-8 items-center'>

                        <Link href="/" className="flex title-font font-medium items-center text-gray-900 md:mb-0 ">
                            <span className="md:ml-3 text-[2rem]">Harshit Yadav

                            </span>
                        </Link>
                        <span className='md:text-[1.5rem] text-[1.3rem] font-thin md:gap-8 flex md:flex-row flex-col justify-center items-center'>
                            <span>
                                Next.Js Developer
                            </span>
                            <span>
                                React.Js Developer
                            </span>
                        </span>
                    </div>
                    <div className='flex gap-8 md:mt-0 mt-2'>

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
        </>
    )
}

export default Navbar