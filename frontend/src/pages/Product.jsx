import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FileContext } from '../Context/FileContext';
import { MessageCircle, X } from 'lucide-react';
import RelatedProducts from '../components/HomeComponets/RelatedProducts/RelatedProducts';
const Product = () => {
  const { productId } = useParams();
  const { currency, collection, addToCart } = useContext(FileContext);
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [size, setSize] = useState('');

  // Fetch product based on productId
  const fetchProductData = () => {
    const prod = collection.find(item => item._id === productId);
    if (prod) {
      setProduct(prod);
      setSelectedImage(prod.images[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, collection]);

  // Calculate discount %
  const discountPercent =
    product?.mrp && product?.price && product.mrp > product.price
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : 0;

  // WhatsApp order link
  const whatsappMessage = `Hi, I want to order ${product?.name} in size ${size || 'N/A'}.`;
  const whatsappLink = `https://wa.me/9849186401?text=${encodeURIComponent(whatsappMessage)}`;

  if (!collection || !product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-lg">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Product Images */}
          <div className="flex-1 flex flex-col lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-2 lg:w-1/5 overflow-x-auto lg:overflow-y-auto ">
              {product?.images?.map((item, index) => (
                <img
                  key={index}
                  src={item}
                  alt={`${product?.name} - ${index + 1}`}
                  onClick={() => setSelectedImage(item)}
                  className={`w-30 h-30 object-cover rounded-lg border-1 shadow-md shadow-gray-500 cursor-pointer 
                    ${selectedImage === item ? 'border-black' : 'border-gray-300'}`}
                />
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 shadow-md shadow-gray-900 rounded-2xl">
              <img
                src={selectedImage}
                alt={product?.name}
                className="w-full h-full object-cover rounded-xl shadow-md"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4 uppercase">{product?.name}</h1>
            <p className="text-gray-600 mb-4 capitalize">{product?.description}</p>

            {/* Price + MRP + Discount */}
            <div className="mb-6">
              {/* Offer Price */}
              <p className="text-lg font-bold bg-gradient-to-r from-red-400 via-red-600 to-red-400 bg-[length:200%_auto] animate-shine text-transparent bg-clip-text">
                Offer Price: {currency} {product?.price}
              </p>

              {/* MRP */}
              {product?.mrp && (
                <p className="text-gray-800 text-medium">
                  MRP: {currency}{" "}
                  <div className="relative inline-block">
                    <span className="text-gray-900 text-lg font-bold"> {product.mrp}</span>
                    <span className="absolute top-3 left-[53%] -translate-x-1/2 -translate-y-1/2 text-red-500 font-light text-3xl">
                      ✘
                    </span>
                  </div>
                </p>
              )}

              {/* Discount */}
              {discountPercent > 0 && (
                <p className="text-lg font-bold bg-gradient-to-r from-green-400 via-green-600 to-green-400 bg-[length:200%_auto] animate-shine text-transparent bg-clip-text">
                  Discount: {discountPercent}%
                </p>

              )}
            </div>


            {/* Info Table */}
            <div className="bg-white rounded-xl shadow-md shadow-gray-950 border p-6">
              <table className="w-full text-sm text-left border-collapse">
                <tbody>
                  <tr className='border-b'>
                    <th className="py-2 font-semibold text-gray-700">Sizes</th>
                    <td className="py-2">
                      {Array.isArray(product?.sizes) && product.sizes.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => setSize(item)}
                          className={`border border-green-300 px-4 py-2 rounded-lg mr-2 transition 
                            ${size === item ? 'bg-pink-500 text-white border-pink-600' : 'bg-white hover:bg-gray-100'}`}
                        >
                          {item}
                        </button>
                      ))}
                    </td>
                  </tr>

                  <tr className="border-b">
                    <th className="py-2 font-semibold w-[30%] text-gray-900">Material</th>
                    <td className="py-2">{product?.material}</td>
                  </tr>
                  <tr className="border-b">
                    <th className="py-2 font-semibold text-gray-900">Model</th>
                    <td className="py-2">{product?.model}</td>
                  </tr>

                  <tr className="border-b">
                    <th className="py-2 font-semibold text-gray-700">Brand</th>
                    <td className="py-2">{product?.brand}</td>
                  </tr>
                  <tr>
                    <th className="py-2 font-semibold text-gray-700">Features</th>
                    <td className="py-2">{product?.features}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => {
                  if (!size) {
                    alert('Please select a size');
                    return;
                  }
                  addToCart(product._id, size);
                }}
                className="px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>

              {/* WhatsApp Order Button */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 cursor-pointer bg-green-700 text-white py-2  rounded-xl flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                  <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fill-rule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clip-rule="evenodd"></path>
                </svg>                Order Now
              </a>
            </div>

            {/* Footer Info */}
            <hr className="w-[98%] h-px mt-10 bg-gray-200 border-0 dark:bg-slate-400" />
            <div className="text-sm text-gray-900 mt-5 flex md:flex-row flex-col gap-2">
              <p className='text-black'>100% Original Products</p> |
              <p className='text-black'>20 Years of Experience</p> |
              <p className='text-black'>Best In Market</p>
            </div>
          </div>
        </div>

        {/* Description & Reviews */}
        <div className='mt-15'>
          <div className='flex'>
            <b className='border px-5 py-3 text-sm'>Description</b>
            <p className='border px-5 py-3 text-sm'>Reviews (120)</p>
          </div>
          <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500 mt-10'>
            <p className='text-sm text-gray-700'>
              Cost-effective and durable: Products are lightweight, made from plastic/PVC materials for everyday office use.
            </p>
            <p className='text-sm text-gray-700'>
              Variety of formats: Many designs including strip files, clip files, button files, side/top opening covers, etc.
            </p>
          </div>
        </div>

        {/* Related Products */}
        <div className='flex mt-10'>
          <RelatedProducts category={product?.category} />
        </div>
      </div>
    </div>
  );
};

export default Product;
