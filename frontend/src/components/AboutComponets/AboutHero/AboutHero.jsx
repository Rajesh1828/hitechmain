import React from 'react'
import { assets } from '../../../assets/assets'

const AboutHero = () => {
  return (
    <div>
      <img src={assets.HeroBanner}  className=' bg-black w-full h-[400px]' alt="" /> 
      <div className='flex flex-col justify-center items-center absolute inset-x-0 top-[300px] '>
      <h2 className='text-3xl text-white font-bold text-center md:text-5xl mt-2 mb-3 '>About</h2>
      <p className='text-justify text-white  font-bold md:text-center max-w-3xl mb-6'>We provide high-quality stationery files and folders designed for durability, style, and everyday efficiency.</p>
          <div className="mt-6 animate-bounce">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M19 9l-7 7-7-7" />
            </svg>
          </div>
      </div>   
    
    </div>
  )
}

export default AboutHero