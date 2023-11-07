'use client'
import React from 'react'
import { projects } from "../../data/data"
import Heading from '../components/Heading/heading'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion"
import Link from 'next/link'
import Image from 'next/image'
import { BiLinkExternal, BiLogoReact } from 'react-icons/bi'
import { AiOutlineGithub } from 'react-icons/ai'
import IconLoader from '../components/iconLoader'


const Projects = () => {



    return (
        <>
            <div className='w-full shadow-box-shadow  p-4 bg-color-white rounded-[5px] '>
                <div className='flex gap-2 border-b-2 pb-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#ADFA1D" viewBox="0 0 24 24" strokeWidth={1} stroke="black" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                    </svg>

                    <Heading name="Projects" />
                </div>
                <div className="w-full mt-2  ">
                    <div className=" w-full rounded-2xl bg-white p-2">
                        <Accordion type="single" collapsible key="index" className="mt-2 ">
                            {projects.map((item, index) => {
                                return (

                                    <AccordionItem value={`item-${index}`} className='shadow-box-shadow px-2 rounded-md mt-2' key={item.id} >
                                        <AccordionTrigger className='flex hover:no-underline'>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-[30px] h-[30px]  rounded-sm '>
                                                    {item.imageSrc && (
                                                        <Link target='_blank' href={(!item.link) ? "/" : item.link}>
                                                            <Image alt="image" src={item.imageSrc} className='w-full rounded-sm h-full' width={100} height={100} />
                                                        </Link>
                                                    )}
                                                </div>
                                                <p className='text-black text-left'>

                                                    {item.title}
                                                </p>

                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent>
                                            <p className='px-4 text-left'>

                                                {item.description}
                                            </p>
                                            <br />
                                            <div className=' w-full flex justify-between  items-center px-4'>
                                                <div className='w-3/4 flex flex-wrap gap-2'  >
                                                    {item.subtitle.map((icon, index) => {
                                                        return (
                                                            <>
                                                                <div key={index} className=' text-black p-2 flex justify-center items-center  bg-slate-300 rounded-sm'>
                                                                    {icon}
                                                                </div>
                                                            </>
                                                        )
                                                    }
                                                    )}
                                                </div>

                                                <div className='flex w-1/4 justify-end gap-4 items-center'>

                                                    {item.githubLink &&

                                                        <Link href={item.githubLink} className='flex gap-5' >
                                                            <AiOutlineGithub
                                                                size={26}
                                                                className="cursor-pointer hover:bg-[#ADFA1D] rounded-full"
                                                            />
                                                        </Link>
                                                    }
                                                    <Link href={item.link} target="_blank" className='flex gap-5' >
                                                        <BiLinkExternal
                                                            size={24}
                                                            className="cursor-pointer hover:bg-[#ADFA1D] rounded-full"
                                                        />
                                                    </Link>
                                                </div>
                                            </div>


                                        </AccordionContent>
                                    </AccordionItem>

                                )
                            })}
                        </Accordion >
                    </div>
                </div>
            </div>
        </>
        // <div className='w-full shadow-box-shadow  p-4 bg-color-white rounded-[5px]'>
        //     <div className='flex gap-2 border-b-2 pb-2'>
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="#ADFA1D" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        //             <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        //             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        //         </svg>

        //         <Heading name="Projects" />
        //     </div>
        //     <div className="w-full mt-2  ">
        //         <div className=" w-full rounded-2xl bg-white p-2">
        //             <Disclosure defaultOpen>
        //                 {({ open }) => (
        //                     <>
        //                         <Disclosure.Button className="flex  w-full justify-between rounded-lg px-4 py-4 text-left text-sm font-medium focus:outline-none focus-visible:ring-opacity-75 bg-color-white hover:scale-[1.04] shadow-box-shadow focus:text-color-black focus:border-2 focus:border-color-black">
        //                             <span className='text-color-black'>Maze Official Website</span>
        //                             <ChevronUpIcon
        //                                 className={`${open ? ' transform text-color-black' : ''
        //                                     } h-5 w-5 text-color-black rotate-180 `}
        //                             />
        //                         </Disclosure.Button>
        //                         <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
        //                             <p>Maze officila website built from scratch, using react js, tailwind css, and framer motion.</p>
        //                             <br />
        //                             <Link href="/">

        //                                 <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg></span>
        //                             </Link>
        //                         </Disclosure.Panel>
        //                     </>
        //                 )}
        //             </Disclosure>
        //             {projects.slice(1).map((item, index) => {
        //                 return (
        //                     <>

        //                         <Disclosure as="div" key="index" className="mt-2">
        //                             {({ open }: any) => (
        //                                 <>
        //                                     <Disclosure.Button className="flex  w-full justify-between rounded-lg px-4 py-4 text-left text-sm font-medium focus:outline-none focus-visible:ring-opacity-75 hover:scale-[1.04] bg-color-white shadow-box-shadow focus:text-color-black focus:border-2 focus:border-color-black ">
        //                                         <span>{item.title}</span>
        //                                         <ChevronUpIcon
        //                                             className={`${open ? 'rotate-180 transform text-color-black' : ''
        //                                                 } h-5 w-5 text-color-black focus:text-color-black`}
        //                                         />
        //                                     </Disclosure.Button>
        //                                     <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
        //                                         <p>{item.description}</p>
        //                                         <br />
        //                                         {item.linkState == true ? <Link href="/">

        //                                             <span><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg></span>
        //                                         </Link> : <p className='flex gap-2'>
        //                                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        //                                                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
        //                                             </svg>

        //                                             Under Development</p>}

        //                                     </Disclosure.Panel>
        //                                 </>
        //                             )}
        //                         </Disclosure>
        //                     </>
        //                 )
        //             })}


        //         </div>
        //     </div>

        // </div>
    )
}

export default Projects