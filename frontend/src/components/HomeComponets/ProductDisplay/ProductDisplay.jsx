import React, { useContext } from "react";
import { FileContext } from "../../../Context/FileContext";
import Productitem from "../ProductItems/Productitem";

const ProductDisplay = ({ isActive, selectedSize }) => {
  const { collection } = useContext(FileContext);

  // ✅ Always work with array
  const collections = Array.isArray(collection) ? collection.slice(0, 20) : [];

  const filtered = collections.filter((item) => {
    // ✅ Match category (DB field is `category`)
    const matchCategory = isActive === "All" || item.category === isActive;

    // ✅ Match size (DB stores sizes as an array)
    const matchSize = !selectedSize || item.sizes?.includes(selectedSize);

    return matchCategory && matchSize;
  });

  return (
    <div className="mt-10">
      <h2 className="text-xl md:text-3xl font-bold text-center inter underline underline-offset-4 decoration-[1px]">
        To products near you
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 px-5 gap-4 mt-5">
        {filtered.map((item) => (
          <Productitem
            key={item._id}
            id={item._id}
            name={item.name}
            images={item.images[0] || item.images}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
