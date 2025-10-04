import React, { useContext, } from 'react'
import './Productitem.css'
import { Link } from 'react-router-dom'
import { FileContext } from '../../../Context/FileContext'

const Productitem = ({ id, name, images }) => {

    const { currency } = useContext(FileContext)
    return (
        <div className=' rounded-2xl px-5 py-4 animation-fadeIn' >
            <Link to={`/product/${id}`}>
                <div>
                    <img src={images} alt="" className=' w-full border-1  h-[200px] bg-gray-50 p-2 hover:shadow-2xl shadow-gray-950  transition duration-500 ease-in-out hover:scale-103 rounded-2xl' />
                    <div className='flex justify-center mt-1  gap-3'>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='text-base md:text-md text-green-700 font-xs uppercase '>{name}</h2>
                    
                </div>
            </Link>

        </div>
    )
}

export default Productitem