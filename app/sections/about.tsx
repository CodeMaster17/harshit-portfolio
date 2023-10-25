
import Image from 'next/image'
import React from 'react'
import myImage from '../../public/assets/my-app.jpeg'
const About = () => {
    return (
        <div className=' rounded-sm flex justify-center items-center w-full shadow-box-shadow p-4'>
            <div className='w-[60vw]  flex justify-center items-center ' >
                <Image
                    src={myImage}
                    alt="Picture of the author"
                    width={80}
                    height={80}
                    className='rounded-full'
                />
                <p className='text-left ml-5 text-sm '>
                    Software Engineer who loves to develop software and solutions which can solve peoples problems.
                </p>
            </div>
        </div>
    )
}

export default About