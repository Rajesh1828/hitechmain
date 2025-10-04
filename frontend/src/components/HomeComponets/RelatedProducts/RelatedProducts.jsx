import React, { useContext, useEffect, useState } from 'react'
import { FileContext } from '../../../Context/FileContext'
import Productitem from '../ProductItems/Productitem'

const RelatedProducts = ({  category}) => {
    const{collection}= useContext(FileContext)
    const[relatedProducts, setRelatedProducts] = useState([])
    useEffect(()=>{
        if(collection.length>0){
            let productsCopy = collection.slice();
            productsCopy = productsCopy.filter((item)=>category === item.category);
            setRelatedProducts(productsCopy.slice(0,5));
        }
    },[collection])
  return (
    <div className='my-20'>
        <div className=' text-center text-3xl py-2'>
            <h2 className='text-xl md:text-3xl font-bold'>Related Products <span className='w-10 h-1 inline-block bg-black'></span> </h2>
        </div>
  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 gap-y-6'>
   {relatedProducts.map((item,index)=>(
    <Productitem key={index} id={item._id} name={item.name} images={item.images[0]}/>
   ))}
  </div>
    </div>
  )
}

export default RelatedProducts