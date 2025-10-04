import React from 'react'

const Why = () => {
    return (
        <>
        <div className='flex flex-col justify-center  mt-5 px-4'>
            <h2 className='text-lg font-bold text-start md:text-3xl mt-2 mb-3'>Why us ?</h2>
            <p className='text-base text-slate-700 text-start'>We are a quality-conscious firm and continuously struggle hard to bring forth only premium quality products to our prestigious patrons at reasonable rates.</p>
            <h3 className='text-md font-bold text-start md:text-start mt-2 mb-3'>Unique reasons which have given us lead in this field are given below:</h3>
            <ul className="list-disc pl-5 flex md:flex-row flex-col gap-5">
                <li className="text-base font-semibold">Wide distribution network</li>
                <li className="text-base font-semibold">Prompt delivery</li>
                <li className="text-base font-semibold">Client-centric approach</li>
                <li className="text-base font-semibold">Ethical business policy</li>
                <li className="text-base font-semibold">Affordable price range</li>
            </ul>
            <h2 className='text-lg font-bold text-start md:text-2xl mt-2 mb-3'>Brands We Deal in</h2>
            <p className='text-base text-slate-700 text-start'>Hi Tech is our manufacturing brand</p>
            <p> <b>aaRPee </b> brand files & folders distributor for Andhra Pradesh, and also we deal KRAFT iT,Aeroplus,Konark stationery, Magpie </p>
        </div>
        <div className='flex flex-row overflow-scroll md:flex-row justify-center items-center mt-5 gap-5 mb-5 px-4 scroll-over'>
            <img className='w-60 h-60 rounded-2xl'  src="https://5.imimg.com/data5/NSDMERP/Location/2025/4/501050379/QL/PI/IB/4114547/4114547-location-1744007351060-1000x1000.png" alt="" />
            <img className='w-60 h-60 rounded-2xl'  src="https://5.imimg.com/data5/NSDMERP/Location/2025/4/503942861/FI/KZ/JT/4114547/4114547-location-1744963940973-1000x1000.png" alt="" />
            <img className='w-60 h-60 rounded-2xl'  src="https://5.imimg.com/data5/NSDMERP/Location/2025/4/501050377/AT/VC/VQ/4114547/4114547-location-1744007351061-1000x1000.png" alt="" />
            <img className='w-60 h-60 rounded-2xl'  src="https://5.imimg.com/data5/NSDMERP/Location/2025/4/503942861/FI/KZ/JT/4114547/4114547-location-1744963940973-1000x1000.png" alt="" />
        </div>
        </>
    )
}

export default Why