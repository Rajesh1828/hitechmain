import React, { useContext, useEffect, useState } from 'react';
import { FileContext } from '../Context/FileContext';
import { Trash2 } from 'lucide-react';

const Cart = () => {
  const { currency, collection, cartItems, updateQuantity } = useContext(FileContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          const foundProduct = collection.find(
            (item) => String(item._id) === String(items)
          );
          tempData.push({
            ...foundProduct,
            size: size,
            quantity: cartItems[items][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, collection]);

  // ✅ Handle WhatsApp message
  const handleWhatsApp = () => {
    if (cartData.length === 0) return;

    let message = `🛒 *My Cart Items* 🛒\n\n`;
    cartData.forEach((item, idx) => {
      message += `${idx + 1}. ${item.name} (${item.size})\nQty: ${item.quantity}\nPrice: ${currency}${item.price}\nSubtotal: ${currency}${item.price * item.quantity}\n\n`;
    });

    const total = cartData.reduce((sum, i) => sum + i.price * i.quantity, 0);
    message += `-------------------\nTotal: ${currency}${total}`;

    // Replace with your WhatsApp number (with country code, no + or spaces)
    const phoneNumber = " 98491 86401";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    // ✅ Clear cart after sending
    cartData.forEach((item) => {
      updateQuantity(item._id, item.size, 0);
    });

    setCartData([]); // clear local state
  };


  return (
    <div className='border-t pt-24 px-2 sm:px-4'>
      <h2 className='text-2xl sm:text-3xl font-bold text-center mb-8'>Your Cart</h2>

      {cartData.length > 0 ? (
        <div className='space-y-4'>
          {/* Header Row */}
          <div className='hidden sm:grid grid-cols-5 font-semibold text-gray-600 border-b pb-2 text-sm'>
            <p>Product</p>
            <p>Price</p>
            <p>Size</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>

          {/* Cart Items */}
          {cartData.map((item, index) => {
            const itemTotal = item.price * item.quantity;
            return (
              <div
                key={index}
                className='grid grid-cols-1 sm:grid-cols-5 gap-y-4 sm:gap-2 items-center text-sm sm:text-base border-b pb-4'
              >
                {/* Product Info */}
                <div className='flex items-center gap-4 sm:col-span-1'>
                  <img
                    className='w-16 h-16 object-cover rounded'
                    src={item.images[0]}
                    alt={item.name}
                  />
                  <div className='w-full break-words'>
                    <p className='font-medium text-xs sm:text-base'>{item.name}</p>
                  </div>
                </div>

                {/* Price */}
                <p className='text-gray-700 text-xs sm:text-base'>
                  {currency}
                  {item.price}
                </p>

                {/* Size */}
                <p className='text-gray-700 text-xs sm:text-base'>{item.size}</p>

                {/* Quantity Input */}
                <input
                  type='number'
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === '0'
                      ? null
                      : updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                  className='w-16 sm:w-20 px-2 py-1 border border-gray-300 rounded text-gray-700 text-xs sm:text-sm'
                />

                {/* Total + Trash */}
                <div className='flex items-center justify-between sm:justify-start gap-4'>
                  <p className='font-semibold text-gray-800 text-xs sm:text-base'>
                    {currency}
                    {itemTotal}
                  </p>
                  <Trash2
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                    className='w-5 h-5 cursor-pointer text-red-500 hover:text-red-700'
                    title='Remove item'
                  />
                </div>
              </div>
            );
          })}

          {/* ✅ WhatsApp Button */}
          <div className="flex justify-center mt-6 mb-4">
            <button
              onClick={handleWhatsApp}
              className="bg-green-300 hover:bg-green-600 text-white px-6 py-2 rounded-lg shadow-md font-semibold transition"
            >
              Send Cart via WhatsApp
            </button>
          </div>
        </div>
      ) : (
        <div className='text-center text-gray-600 text-sm sm:text-lg mt-10'>
          Your cart is empty.
        </div>
      )}
    </div>
  );
};

export default Cart;
