import React from 'react'

interface props {
    name: string | number,
}

const Card: React.FC<props> = ({ name }) => {
    return (
        <p className='bg-[#ADFA1D] rounded-[10px] py-1 px-4 text-color-black w-fit'>{name}</p>
    )
}

export default Card