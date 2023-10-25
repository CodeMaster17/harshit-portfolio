'use client'
import React, { useState } from 'react'
import Example from './Combobox'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../logo.png'

const Sidebar = () => {
    const [cardLight, setCardLight] = useState(false)
    const [dropdownState, setDropdownState] = useState(false)
    const handleDropdown = () => {
        setDropdownState(!dropdownState)
    }

    return (
        <div className='w-[15vw]  flex justify-center items-start border-r-2 border-color-black bg-white' >
            <div className='w-[80%] pt-5 ' >
                <div className=' flex justify-center  items-center w-full'>

                    {/* <Image src={logo} alt="logo" width={100} className='border-2 w-[100%] ' /> */}
                    <span className="ml-3 text-[2rem] font-dancingScript">Harshit Yadav</span>
                </div>
                <ul className='w-full'>
                    <p className='font-bold mt-2 font- '>HOME</p>
                    <Link href="/" className='mt-2'>

                        <li className='sidebarLinkStyles'  >About</li>
                    </Link>
                    <Link href="/resources" >
                        <li className='sidebarLinkStyles'>Projects</li>
                    </Link>
                    <Link href="/add.member" >
                        <button >
                            <li className='sidebarLinkStyles'>Skills</li>
                        </button>
                    </Link>
                    <Link href="/events" >
                        <li className='sidebarLinkStyles'>Expereince</li>
                    </Link>
                </ul>
                <ul className='w-full'>
                    <p className='font-bold mt-4 font- '>KNOW more about ME</p>
                    <Link href="/" className='mt-2'>

                        <li className='sidebarLinkStyles'  >Anchoring</li>
                    </Link>
                    <Link href="/resources" >
                        <li className='sidebarLinkStyles'>Technical Lead at MLSA</li>
                    </Link>
                    <Link href="/add.member" >
                        <li className='sidebarLinkStyles'>Enterprenaurship Experience</li>
                    </Link>
                    <Link href="/events" >
                        <li className='sidebarLinkStyles'>Learning from startups</li>
                    </Link>
                </ul>
                <ul className='w-full'>
                    <p className='font-bold mt-2'>CONTACT</p>
                    <Link href="/" className='mt-2'>
                        <li className='sidebarLinkStyles'  >Contact Me</li>
                    </Link>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar