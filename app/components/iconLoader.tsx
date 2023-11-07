import React from 'react'
import { BiLogoReact } from 'react-icons/bi'

interface props {
    icon: string,
    key: number
}

const IconLoader = ({ icon, key }: props) => {
    if (icon === 'React') {
        return (
            <>

                <BiLogoReact
                    size={26}
                    className=" hover:bg-[#ADFA1D] rounded-full"

                />
            </>
        )
    }
}

export default IconLoader