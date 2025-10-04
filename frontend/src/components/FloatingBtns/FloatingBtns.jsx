import React from 'react'
import { MessageCircle,Mail } from 'lucide-react'
const FloatingBtns = () => {
  return (
    <>
    <a href="https://wa.me/919849186401"
    target='_blank'
    rel="noopener noreferrer"
    className=' fixed bottom-4 left-6 w-12 h-12 flex items-center justify-center bg-green-500 hover:bg-green-600 rounded-full shadow-md z-50'
    >
    <MessageCircle className='w-6 h-6 ' />    
    </a>
     
     <a href="mailto:srijayadurgaenterprises2000@gmail.com"
     className=' fixed bottom-4 right-20 w-12 h-12 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-full shadow-md z-50'
     >
     <Mail className='w-6 h-6 ' />  
     </a>

    </>
  )
}

export default FloatingBtns