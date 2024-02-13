import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

export default function ProductCard(props) {


    const {
        title,
        pic,
        description
    } = props

    return (
        <div className="my-12 cursor-pointer shadow-md  shadow-slate-800 text-black w-[36%] h-card rounded-lg  overflow-hidden bg-white flex flex-col">
            <img className="rounded-lg overflow-hidden" src={pic} alt="" />
            <div className="flex flex-col px-5">
                <h2 className='font-bold text-cardTitle'>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="flex flex-row items-center px-5 font-semibold">
                <h3>See more {" "}</h3>
                <FaLongArrowAltRight className='text-black' />
            </div>
        </div>
    )
}
