import Link from 'next/link'
import React from 'react'

const UnderDevelopment = () => {
    return (
        <div className='w-full  min-h-full flex flex-col gap-4 justify-center items-center text-xl '>
            This page  is under  development
            <br />
            <Link href="/" className='p-2 shadow-box-shadow rounded-md' >
                Go to  Home
            </Link >
        </div >
    )
}

export default UnderDevelopment