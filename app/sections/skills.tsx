import React from 'react'
import Heading from '../components/Heading/heading'
import Card from '../components/card/card'

const Skills = () => {
    return (
        <div className='w-full shadow-box-shadow p-4 gap-3 bg-color-white rounded-[10px]' >
            <div className='flex gap-2 border-b-2 pb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ADFA1D" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>

                <Heading name="Skills" />
            </div>

            <div className='flex gap-2 mt-2'>
                <p>Javascript Frameworks : &nbsp;</p>
                <Card name="React" />
                <Card name="Next Js" />
            </div>
            <br />
            <div className='flex gap-2 flex-wrap
            '>
                <p>Language : &nbsp;</p>
                <Card name="Javascript" />
                <Card name="Typescript" />
                <Card name="C" />
                <Card name="C++" />
                <Card name="Java" />
            </div>
            <br />
            <div className='flex gap-2 flex-wrap'>
                <p>Styling : &nbsp;</p>
                <Card name="Vanilla CSS" />
                <Card name="Tailwind CSS" />
                <Card name="Boostrap" />
                <Card name="SCSS" />
            </div>
            <br />
            <div className='flex gap-2'>
                <p>Backend : &nbsp;</p>
                <Card name="Express Js" />
                <Card name="Mongo DB" />
            </div>

        </div>
    )
}

export default Skills