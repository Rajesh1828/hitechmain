import React from 'react'
import { assets } from '../../../assets/assets'

const AboutOverView = () => {
  return (
    <>
    <div className='justify-center  items-center mt-7'   >
        <h2 className='md:text-4xl text-xl font-bold text-center mt-2 mb-3 px-5'>Welcome to a new era of elegance and organization.
</h2>
<p className='md:text-center md:px-30 px-5  text-justify'>Our New Arrivals collection brings together the finest in modern stationery — from premium planners and elegant writing tools to luxurious paper designed to inspire. Whether you're journaling your dreams, organizing your schedule, or simply expressing yourself, these thoughtfully crafted items blend timeless style with everyday practicality.

</p>
    </div>
    <div className='flex flex-col md:flex-row justify-evenly items-center w-full gap-19'>
      <div className='md:w-1/2 px-10 md:py-10 py-5'>
        <img src={assets.about_blog_banner} alt="" className='w-full' />
      </div>
      <div className='md:w-1/2 w-full'>
      <h2 className='text-xl md:text-3xl font-bold md:px-10 px-5'>"Write Bold. Plan Smart. Live Inspired."

</h2>
<div className='mt-5 flex flex-col gap-3 px-5 md:px-10 md:py-10'>

        <p className=' text-justify'>At HiTech Stationery, we specialize in providing premium-quality files and folders designed to meet both professional and academic needs. Our products are crafted with durability, style, and functionality in mind, ensuring that you can organize and protect your important documents with ease</p>
        <p className=' text-justify'>We take pride in being a trusted distributor of stationery files and 
          folders across Andhra Pradesh, delivering excellence to offices, institutions, and individuals. Whether it’s for corporate use, educational purposes, or personal organization, 
          our wide range of products ensures there’s a perfect solution for every requirement.</p>
        <p className=' text-justify'>With a strong focus on quality and customer satisfaction, HiTech Stationery continues to set benchmarks in the stationery distribution sector. Our files and folders are not only practical but also designed to enhance productivity and create a professional impression.
        </p>
</div>
      </div>
    </div>

    </>
  )
}

export default AboutOverView