import React from 'react'
import recky from "../assets/recky.jpg"

export default function Introduction() {
    return (
        <div className='bg-slate-800 text-white flex flex-col items-center h-check py-intro'>
            <div className='ml-12 mt-[5%] text-center fex flex-col'>
                <img src={recky} className='h-36 w-36 rounded-[50%]' alt="" />
                <h2 className=''>Hi, I am Recky!</h2>
            </div>
            <h1 className='text-white text-xl font-bold'>A Front-End Developer Specialist in React</h1>
        </div>
    )
}
