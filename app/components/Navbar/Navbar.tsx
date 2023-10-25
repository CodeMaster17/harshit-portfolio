import { GITHUB_URL, INSTAGRAM_URL, LINKEDIN_URL } from 'app/data/data'
import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa'


const Navbar = () => {
    return (
        <header className="text-gray-600 body-font w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col justify-between md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    {/* <Image src={logo} alt="logo" width={100} className='' /> */}
                    <span className="ml-3 text-[2rem]">Harshit Yadav &nbsp; &nbsp;  |  &nbsp; &nbsp;
                        <span className='text-[1.5rem] font-thin '>

                            Next Js Developer  &nbsp; &nbsp; | &nbsp; &nbsp;  React Js Developer </span>
                    </span>
                </Link>
                <div className='flex gap-2'>

                    <Link href={GITHUB_URL}>
                        <FaGithub size={30} />
                    </Link>

                    <Link href={INSTAGRAM_URL}>
                        <FaInstagram size={30} />
                    </Link>
                    <Link href={LINKEDIN_URL}>
                        <FaLinkedinIn size={30} />
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar