import Link from 'next/link'
import React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
const NavigationButton = () => {
    return (
        <div className='md:hidden rounded-sm flex justify-center items-center w-full shadow-box-shadow p-4'>
            <Link className="w-full flex justify-center item-center gap-2 pointer" href='/anchoring' target="_blank">
                <span>
                    Know More
                    &nbsp;
                </span>
                <span className="text-black">
                    :
                    &nbsp;
                    Ancoring

                </span>
                <span>

                    <BiLinkExternal
                        size={24}
                        className="cursor-pointer hover:bg-[#ADFA1D] rounded-full"
                    />
                </span>
            </Link>
        </div>
    )
}

export default NavigationButton
