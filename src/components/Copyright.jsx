import React from 'react'
import { FaRegCopyright } from "react-icons/fa";

export default function Copyright() {
    return (
        <div className='py-2 h-10  bg-black text-center text-gray-700 '>
            <div className='w-[8%] mx-auto flex item items-center'>
                <h1>Recky {" "}</h1>
                <FaRegCopyright className='text-gray-700' />
                <h1>{"  "}2024</h1>
            </div>
        </div>
    )
}
