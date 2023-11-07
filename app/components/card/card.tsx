import React from 'react'

interface props {
    name: string | number,
}

const Card: React.FC<props> = ({ name }) => {
    return (
        <p className='bg-[#ADFA1D] rounded-[10px] py-1 md:px-4 px-2 text-color-black w-fit text-sm'>{name}</p>
    )
}

export default Card