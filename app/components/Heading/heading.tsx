import React from 'react'

interface props {
    name: string

}

const Heading: React.FC<props> = ({ name }) => {
    return (
        <>

            <p className='text-2xl font-semibold '>{name}</p>

        </>
    )
}

export default Heading