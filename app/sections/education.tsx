'use client'
import React from 'react'
import Heading from '../components/Heading/heading'
import { education } from '../../svg/svg'



const Education = () => {
    return (
        <div className='w-full shadow-box-shadow p-4 bg-color-white rounded-[10px]'>
            <div className='flex gap-2 border-b-2 pb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ADFA1D" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                </svg>

                <Heading name="Education" />
            </div>
            <p className='text-color-gray mt-2'>College :</p>
            <div className='w-full flex justify-between'>

                <p>Kalinga Institute of Industrial Technology </p>
                <p>CGPA : 8.11</p>
            </div>
            <br />
            <p className='text-color-gray'>School :</p>
            <p>10th</p>
            <div className='w-full flex justify-between'>
                <p>St. Johns School, DLW </p>
                <p>94%</p>
            </div>
            <br />
            <p>12th</p>
            <div className='w-full flex justify-between'>

                <p>St. Johns School, DLW </p>
                <p>92%</p>
            </div>
        </div>
    )
}

export default Education