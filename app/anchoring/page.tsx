import { anchoring } from 'app/data/data'
import Image from 'next/image'
import React from 'react'
import styles from "./page.module.css"

const Anchoring = () => {
    return (
        <div className={`border-2 w-full `}>

            <div className=' m-auto w-[80%] mt-4 '>
                <p className='text-lg mt-8 w-full rounded-md  p-4 shadow-box-shadow'>
                    &quot;Every time I step on that stage with a mic in my hand,
                    <br />
                    I feel like Im setting sail on an endless sea of stories, each waiting to be discovered, shared, and celebrated.&quot;</p>
                <br />

                <div className={`w-full  flex justify-between `} >
                    <div className='w-full    relative' >
                        <video src="/assets/video.mp4" loop autoPlay={true} muted={true} className='w-full '>

                        </video>
                        <div className=' textAboveVideo text2AboveVideo absolute  w-3/4  h-full  top-0 flex justify-left  items-center  bgGradient2'>
                            <p className='text-anchorHeading text-white ml-4'>
                                <span className='text-[40px]'>
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
                                <span className='text-[30px] text-highlighter  border-2 p-2'>

                                    Pitcher&apos;s pilot event
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className=" mt-8 mb-8 gap-8  flex justify-center items-center ">
                    {anchoring.map((item, index) => {
                        return (
                            <>
                                <div className={`${styles.card}`}>
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
                                        {/* <a href="#" className="button">
                                            Find out more
                                            <span className="material-symbols-outlined">arrow_right_alt</span>
                                        </a> */}
                                    </div>
                                </div>

                            </>
                        )
                    })}


                </div>
            </div>
        </div>
    )
}

export default Anchoring