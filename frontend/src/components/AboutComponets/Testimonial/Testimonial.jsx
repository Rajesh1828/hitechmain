import React from 'react'

const Testimonial = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-5 px-4'>
     <h2 className='text-3xl font-bold text-center md:text-3xl mt-2 mb-3 '>
        Testimonial
    </h2>  
    <p>our customers love us </p>
      <section className="text-gray-600 body-font  flex-row ">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          
          {/* Testimonial 1 */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://media.istockphoto.com/id/1344317121/photo/portrait-of-a-hispanic-businesswoman.webp?a=1&b=1&s=612x612&w=0&k=20&c=DjPkQN-9PrMTn98t3iu91fN1JmKd54OfYF8LjKTdqZ8="
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's
                cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag
                drinking vinegar cronut adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p className="text-gray-500"></p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://media.istockphoto.com/id/1135381120/photo/portrait-of-a-young-woman-outdoors-smiling.webp?a=1&b=1&s=612x612&w=0&k=20&c=Zjx-YHpFhpRMDCp9auPFX9Yk1htL4oidkCXttyTM0lc="
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's
                cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag
                drinking vinegar cronut adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                ALPER KAMU
              </h2>
              <p className="text-gray-500"></p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="lg:w-1/3 lg:mb-0 p-4">
            <div className="h-full text-center">
              <img
                alt="testimonial"
                className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                src="https://media.istockphoto.com/id/1060638258/photo/portrait-of-a-beautiful-hispanic-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=MNQDjHOsviJIVVYIsrTq1jHWlfzYTTiod58NNdvG_xU="
              />
              <p className="leading-relaxed">
                Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's
                cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag
                drinking vinegar cronut adaptogen squid fanny pack vaporware.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HENRY LETHAM
              </h2>
              <p className="text-gray-500"></p>
            </div>
          </div>

        </div>
      </div>
    </section> 
    </div>
  )
}

export default Testimonial