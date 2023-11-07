import React from 'react'

interface props {
    name: string

}

const Heading: React.FC<props> = ({ name }) => {
    return (
        <>

            <p className='font-semibold text-2xl'>{name}</p>

        </>
    )
}

export default Heading