import React from 'react'
import './grid.css'
import { assets } from '../../../assets/assets';



const Grid = () => {
  return (
    <div className='min-h-auto justify-center items-center px-4 mb-2 '>
          <div className="grid grid-cols-5  md:px-2  grid-rows-5 gap-2 w-full md:h-[400px]">
        <div className="col-span-2 row-span-5 overflow-hidden">
          <img src={assets.hero_b1} alt="" className="w-full h-full object-cover hover:scale-110 transition duration-300 rounded-2xl" />
        </div>
        <div className="col-start-3 col-span-2 row-span-3 overflow-hidden">
          <img src={assets.hero_b2} alt="" className="w-full h-full object-cover hover:scale-110 transition duration-300 rounded-2xl" />
        </div>
        <div className="col-start-3 row-start-4 row-span-2 overflow-hidden">
          <img src={assets.hero_b3} alt="" className="w-full h-full object-cover hover:scale-110 transition duration-300 rounded-2xl" />
        </div>
        <div className="col-start-4 row-start-4 row-span-2 overflow-hidden">
          <img src={assets.hero_b4} alt="" className="w-full h-full object-cover hover:scale-110 transition duration-300 rounded-2xl" />
        </div>
        <div className="col-start-5 row-start-1 row-span-5 overflow-hidden">
          <img src={assets.hero_b1} alt="" className="w-full h-full object-cover hover:scale-110 transition duration-300 rounded-2xl" />
        </div>
      </div>
    </div>
  )
}

export default Grid