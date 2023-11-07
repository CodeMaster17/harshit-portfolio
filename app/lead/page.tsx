import Image from 'next/image'
import React from 'react'

const Lead = () => {
    return (
        <div className='w-full border-2'>
            <div className='w-[80vw]  m-auto border-2'>
                <div className="mockup-phone">
                    <div className="camera"></div>
                    <div className="display">
                        <div className="artboard artboard-demo phone-1">
                            <Image
                                src="/assets/lead/my-mg.png"
                                width={900}
                                height={900}
                                alt="my image"
                                className="w-full h-full"
                            >

                            </Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lead