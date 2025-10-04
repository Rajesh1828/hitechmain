import React from 'react'

const AboutContent = () => {
    return (
        <div className='px-4'>
            <h2 className='text-2xl font-bold  md:text-3xl mt-2 mb-3 '>Sri Jaya Durga Enterprises</h2>
            <p className='font-normal text-base text-slate-700'> <span className='font-semibold'>  Established in the year of 2000, Sri Jaya Durga Enterprises is the leading manufacturer of Button File Folder, Strip File, Office File </span> and much more. Our offered products are processed as per the industry set norms with  latest machines and equipments by our experienced team of professionals. These products are highly appreciated owing to their attributes such as premium quality and long life. We assure our clients that these products are also stringently checked against numerous parameters in order to provide qualitative products to the clients.
            </p>
            <p className='font-normal text-base text-slate-700 mt-5'> <span className='font-semibold text-slate-900'>Mr. M. Suresh Madisetty,</span> is the mentor of our company, whose experience and knowledge have enabled us to cater to the demands of customers. His leadership qualities have enabled us to attain goals of our organization.</p>
            <div className=''>
                <h2 className='text-2xl font-bold  md:text-3xl mt-2 mb-3 '>Company Album</h2>
                <div className='flex flex-col mb-5  md:flex-row justify-center items-center gap-5 overflow-hidden'>

                    <img className=" md:w-[200px] w-[300px] h-[300px] md:h-[300px]  rounded-2xl " src="https://images.unsplash.com/photo-1683205556671-339f1192a1be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tcGFueSUyMG91dGxldHN8ZW58MHx8MHx8fDA%3D" alt="" />
                    <img className="   md:w-[200px] w-[300px] h-[300px] md:h-[300px] rounded-2xl" src="https://images.unsplash.com/photo-1671536615568-84becd6c8c4a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMG91dGxldHN8ZW58MHx8MHx8fDA%3D" alt="" />
                    <img className=" md:w-[200px] w-[300px] h-[300px] md:h-[300px]  rounded-2xl " src="https://images.unsplash.com/photo-1448301858776-07f780e9c9da?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbXBhbnklMjBvdXRsZXRzfGVufDB8fDB8fHww" alt="" />
                    <img className="  md:w-[200px] w-[300px] h-[300px] md:h-[300px] rounded-2xl " src="https://images.unsplash.com/photo-1671536615568-84becd6c8c4a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcGFueSUyMG91dGxldHN8ZW58MHx8MHx8fDA%3D" alt="" />
                    <img className="  md:w-[200px] w-[300px] h-[300px] md:h-[300px]  rounded-2xl" src="https://plus.unsplash.com/premium_photo-1710193817300-a2edf01839e8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29tcGFueSUyMG91dGxldHN8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
            </div>
            <hr className=' w-[100%] h-px mb-10  bg-gray-200 border-0 dark:bg-gray-700' />
            <div className='flex flex-col justify-center items-center'>
                <h2 className='text-2xl font-bold  md:text-3xl mt-2 mb-3 '>Factsheet</h2>
            </div>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left">Field</th>
                                <th className="px-4 py-2 text-left">Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {[
                                ['Nature of Business', 'Wholesaler/Distributor'],
                                ['Additional Business', 'Wholesale Business, Retail Business'],
                                ['Company CEO', 'M. Suresh Madisetty'],
                                ['Total Number of Employees', 'Up to 15 People'],
                                ['GST Registration Date', '01-07-2017'],
                                ['Legal Status of Firm', 'Proprietorship'],
                                ['Annual Turnover', '₹2.3cr'],
                                ['GST Partner Name', 'Suresh Madisetty'],
                            ].map(([field, value], i) => (
                                <tr key={i} className="even:bg-gray-50">
                                    <td className="px-4 py-2 font-medium">{field}</td>
                                    <td className="px-4 py-2">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Statutory Profile */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Statutory Profile</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border border-gray-300">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left">Field</th>
                                <th className="px-4 py-2 text-left">Details</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {[
                                ['Banker', 'STATE BANK OF INDIA (×2)'],
                                ['GST No.', '37AIRPM9388A1ZN'],
                            ].map(([field, value], i) => (
                                <tr key={i} className="even:bg-gray-50">
                                    <td className="px-4 py-2 font-medium">{field}</td>
                                    <td className="px-4 py-2">{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Packaging, Payment & Shipment Details */}
            <section className='mb-10'>
                <h2 className='md:text-2xl text-lg font-semibold mb-4'>Packaging, Payment & Shipment Details</h2>
                <div className='overflow-x-auto'>
                    <table className='min-w-full table-auto border border-gray-300 '>
                        <thead className='bg-gray-100'>
                            <tr>
                                <th className='px-4 py-2 text-left'>Field</th>
                                <th className='px-4 py-2 text-left'>Details</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200'>
                            {[['Payment Mode', 'Cash', 'Credit Card', 'Cheque', 'DD', 'Online'],
                            ['shipment', 'Mode', 'By Road']].map(([field, value], i) => (
                                <tr key={i} className='even:bg-gray-50'>
                                    <td className='px-4 py-2 font-medium '>{field}</td>
                                    <td className='px-4 py-2'>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default AboutContent