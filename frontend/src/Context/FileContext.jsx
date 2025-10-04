import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { backend_url } from "../../../admin/src/App";
// import { collection } from "../assets/assets";

export const FileContext = createContext(null);

export const StoreContextFileProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [collection, setCollection] = useState([]);
   const currency = "₹";
   const backend_url="https://hitechstation-2.onrender.com"

  // Function to add an item to the cart
const addToCart = (itemId, size) => {
  let cartData = structuredClone(cartItems);

  if (!size) {
    toast.error("Please select a size");
    return;
  }

  if (cartData[itemId]) {
    if (cartData[itemId][size]) {
      cartData[itemId][size] += 1;
    } else {
      cartData[itemId][size] = 1;
    }
  } else {
    cartData[itemId] = {};
    cartData[itemId][size] = 1;
  }

  setCartItems(cartData);
  toast.success("Item added to cart");
};


  // Update quantity
  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  // Fetch collection safely
  const fetchCollection = async () => {
    try {
      const response = await fetch(`${backend_url}/api/products/list`);
      const data = await response.json();
      console.log("Fetched data:", data);

      if (Array.isArray(data)) {
        setCollection(data);
      } else if (Array.isArray(data.products)) {
        setCollection(data.products);
      } else {
        console.warn("Unexpected API format — using empty array.");
        setCollection([]);
      }
    } catch (error) {
      console.error("Error fetching collection:", error);
      setCollection([]); // Prevent crash
    }
  };

  useEffect(() => {
    fetchCollection();
  }, []);

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        try {
          if (cartItems[items][size] > 0) {
            totalCount += cartItems[items][size];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

// Function to remove an item from the cart

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = {
    collection,
    cartItems,
    addToCart,
    removeFromCart,
    currency,
    getCartCount,
    updateQuantity
  };

  return (
    <FileContext.Provider value={contextValue}>
      {children}
    </FileContext.Provider>
  );
};
