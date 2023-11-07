import { anchoring } from 'app/data/data'
import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"

const Anchoring = () => {
    return (
        <div className={`w-full border-2 `}>

            <div className=' m-auto mt-4 w-[90%] md:w-[80%] '>
                <p className='mt-8 w-full rounded-md p-4 text-sm shadow-box-shadow md:text-lg'>
                    &quot;Every time I step on that stage with a mic in my hand,
                    <br />
                    I feel like Im setting sail on an endless sea of stories, each waiting to be discovered, shared, and celebrated.&quot;</p>
                <br />

                <div className={`flex  w-full justify-between `} >
                    <div className='relative    w-full' >
                        <video src="/assets/video.mp4" loop autoPlay={true} muted={true} className='w-full '>

                        </video>
                        <div className=' textAboveVideo text2AboveVideo justify-left  bgGradient2  absolute top-0 flex h-full  w-3/4  items-center'>
                            <p className='ml-4 mt-2 text-[30px] text-white md:mt-0  md:text-[40px]'>
                                <span className=''>
                                    At
                                </span>
                                <br />
                                <span className='font-bold'>
                                    BITS,
                                    <br />
                                    Hyderabad !
                                </span>
                                <br />
                                <br />
                                <span className='hidden border-2 p-2 text-[15px] text-highlighter md:mt-0  md:block md:text-[30px]'>

                                    Pitcher&apos;s pilot event
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" my-8 flex flex-col items-center justify-center  gap-8 md:flex-row ">
                    {anchoring.map((item, index) => {
                        return (
                            
                                <div className={`${styles.card}`} key={index}>
                                    <Image
                                        src={item.imgUrl}
                                        alt=""
                                        width={900}
                                        height={900}
                                        className={`${styles.img}`}
                                    />
                                    <div className={`${styles.cardContent}`}>
                                        <h2 className=''>{item.eventName}</h2>
                                        <p>
                                            {item.topic}
                                        </p>
                                    </div>
                                </div>

                            
                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default Anchoring