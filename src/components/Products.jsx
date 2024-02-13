import React from 'react'
import recky from "../assets/recky.jpg"
import ProductCard from './ProductCard'
import Buildings from "../assets/Buildings.jpg"
import Accountant from "../assets/Accountant.jpg"
import Hut from "../assets/Hut.jpg"
import stones from "../assets/stones.jpg"

const FeaturedProducts = [
    {
        title:"React Space",
        pic:Accountant,
        description:"Handy tool best to create Amazing AR cmponents in React App, with redux integration with middleware"
    },
    {
        title:"React Infinite Scroll",
        pic:Hut,
        description:"A scrollable bottom sheet with visualization support, native animations at 60 FPS and fully implemented in JS Land"
    },
    {
        title:"Photo Gallery",
        pic:Buildings,
        description:"A ONE-stop shop for photgraphers to sgare and monetize their photos, allowing them to have a second source of income."
    },
    {
        title:"Event Planner",
        pic:stones,
        description:"A mobile Application for leisure seekers to discover unique events and activites in their city with a few taps."
    },
]


export default function Products() 
{
    const check = FeaturedProducts.map(element=><ProductCard pic={element.pic} title={element.title} description={element.description} />)
    return (
        <div id="Products" className='px-5  bg-green-900 text-white flex flex-col items-center py-intro'>
            <h1 className='w-[100%] text-left text-white text-xl font-bold'>Featured Products</h1>
            <div className="w-[100%] flex flex-row justify-around flex-wrap">
                {check}
            </div>
        </div>
    )
}
