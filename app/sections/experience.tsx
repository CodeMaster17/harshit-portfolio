'use client'
import React from 'react'
import { companies } from "../../data/data"
import Heading from '../components/Heading/heading'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion"
import Link from 'next/link'
import Image from 'next/image'


const Experience = () => {

    return (
        <div className='w-full rounded-[10px] bg-color-white p-4 shadow-box-shadow'>
            <div className='flex gap-2 border-b-2 pb-2'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#ADFA1D" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7  text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
                </svg>
                <Heading name="Experience" />

            </div>
            <div className="w-full md:m-2">
                <div className=" w-full rounded-2xl bg-white p-2">
                    <Accordion type="single" collapsible className="mt-2 ">
                        {companies.map((item, index) => {
                            const descriptionLines = item.description.split(' - ');

                            return (

                                <AccordionItem value={`item-${index}`} className='mt-2 rounded-md px-2 shadow-box-shadow' key={item._id} >
                                    <AccordionTrigger className='flex hover:no-underline'>
                                        <div className='flex items-center gap-4'>
                                            <div className='h-[40px] w-[40px]  rounded-sm '>

                                                {item.src && (
                                                    <Link target='_blank' href={(!item.companyLink) ? "/" : item.companyLink}>
                                                        <Image alt="image" src={item.src} className='h-full w-full rounded-sm' width={100} height={100} />
                                                    </Link>
                                                )}
                                            </div>
                                            <p className="text-left font-medium">

                                                {item.role}
                                            </p>

                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className='items-left mt-2 flex w-full flex-col justify-between md:flex-row md:items-center'  >
                                            <Link target="_blank" className='flex text-sm font-bold text-black hover:underline md:text-md' href={(!item.companyLink) ? "/" : item.companyLink} >{item.company}
                                            </Link>
                                            <div className="text-sm text-black md:text-md">
                                                {item.startDate} - {(!item.endDate) ? "Present" : item.endDate}
                                            </div>
                                        </div>
                                        <ul className='mt-4'>
                                            {
                                                descriptionLines.map((line, lineIndex) => (

                                                    <li className='mt-1 list-disc text-sm text-black md:text-sm' key={`line-${lineIndex}`}>

                                                        {line}


                                                    </li>
                                                ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>

                            )
                        })}
                    </Accordion >


                </div>
            </div>

        </div>
    )
}

export default Experience