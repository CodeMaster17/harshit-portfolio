import React from 'react'
import Heading from '../components/Heading/heading'
import Card from '../components/card/card'

const Skills = () => {
    return (
        <div className='w-full gap-3 rounded-[10px] bg-color-white p-4 shadow-box-shadow' >
            <div className='flex gap-2 border-b-2 pb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ADFA1D" viewBox="0 0 24 24" strokeWidth={1} stroke="black" className="h-6 w-6 border-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>

                <Heading name="Skills" />
            </div>

            <div className='mt-2 flex gap-2'>
                <p>Javascript Frameworks : &nbsp;</p>
                <Card name="ReactJs" />
                <Card name="NextJs" />
            </div>
            <br />
            <div className='flex flex-wrap gap-2
            '>
                <p>Language : &nbsp;</p>
                <Card name="Javascript" />
                <Card name="Typescript" />
                <Card name="C" />
                <Card name="C++" />
                <Card name="Java" />
            </div>
            <br />
            <div className='flex flex-wrap gap-2'>
                <p>Styling : &nbsp;</p>
                <Card name="Vanilla CSS" />
                <Card name="TailwindCSS" />
                <Card name="Boostrap" />
                <Card name="SCSS" />
            </div>
            <br />
            <div className='flex gap-2'>
                <p>Backend : &nbsp;</p>
                <Card name="ExpressJs" />
            </div>
            <br />
            <div className='flex gap-2'>
                <p>Database : &nbsp;</p>
                <Card name="SQL" />
                <Card name="Postgres" />
                <Card name="Mongo DB" />
            </div>

        </div>
    )
}

export default Skills