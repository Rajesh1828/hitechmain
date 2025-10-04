import React, { useEffect, useState, useContext } from 'react';
import { FileContext } from '../Context/FileContext';
import Productitem from '../components/HomeComponets/ProductItems/Productitem';
import { ChevronUp, ChevronDown } from "lucide-react";


const Collections = () => {
  const { collection } = useContext(FileContext);

  const [showFilters, setShowFilters] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState([]);
  const [sizes, setSizes] = useState([]);

  // Category checkbox handler
  const filterCategory = (e) => {
    const value = e.target.value;
    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [...prev, value]);
    }
  };

  // Size checkbox handler
  const filterSize = (e) => {
    const value = e.target.value;
    if (sizes.includes(value)) {
      setSizes((prev) => prev.filter((item) => item !== value));
    } else {
      setSizes((prev) => [...prev, value]);
    }
  };

  // Initial load
  useEffect(() => {
    setFilteredData(collection);
  }, [collection]);

  // Filtering logic
  useEffect(() => {
    let filteredCopy = collection.slice();

    // Filter by category
    if (category.length > 0) {
      filteredCopy = filteredCopy.filter((item) =>
        category.includes(item.category?.toLowerCase())
      );
    }

    // ✅ Filter by sizes (check if any selected size is in item.sizes)
    if (sizes.length > 0) {
      filteredCopy = filteredCopy.filter(
        (item) =>
          Array.isArray(item.sizes) && item.sizes.some((sz) => sizes.includes(sz))
      );
    }

    setFilteredData(filteredCopy);
  }, [category, sizes, collection]);


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 mb-10'>
      {/* Filter options */}
      <div className='min-w-60 sm:ml-3 md:ml-5'>
        <p
          onClick={() => setShowFilters(!showFilters)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          Filters
          <span>
            {showFilters ? (
              <span className='text-3xl sm:hidden'>  <ChevronDown /> </span>
            ) : (
              <span className='text-3xl sm:hidden'> <ChevronUp /></span>
            )}
          </span>
        </p>

        {/* Category filter */}
        <div
          className={`border border-gray-400 pl-5 py-3 mt-6 ${showFilters ? '' : 'hidden'
            } sm:block`}
        >
          <p className='mb-3 text-sm font-bold'>Categories</p>
          <div className='flex flex-col gap-2'>
            <label className='flex gap-2'>
              <input type='checkbox' value='hitechbooks' onChange={filterCategory} />
              HitechBooks
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='buttonfiles' onChange={filterCategory} />
              ButtonFiles
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='certificates' onChange={filterCategory} />
              CertificateFiles
            </label>

            <label className='flex gap-2'>
              <input type='checkbox' value='DocumentFile' onChange={filterCategory} />
              DocumentFile
            </label>

            <label className='flex gap-2'>
              <input type='checkbox' value='zipfiles' onChange={filterCategory} />
              ZipFiles
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='stripfiles' onChange={filterCategory} />
              StripFile
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='clipFiles' onChange={filterCategory} />
              Clip Files
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='envelops' onChange={filterCategory} />
              Envelops
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='clothcovers' onChange={filterCategory} />
              cloth covers
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='sheetprotectors' onChange={filterCategory} />
              Sheet Protectors
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='reportfiles' onChange={filterCategory} />
              Report Files
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='expandingfiles(visa)' onChange={filterCategory} />
              Expanding Files (Visa)
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='l.shapefolders' onChange={filterCategory} />
              L-Shape Folders
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='transparentpouches' onChange={filterCategory} />
              Transparent Pouches
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='toporsideopenpouches' onChange={filterCategory} />
              Top or Side Open Pouches
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='clothpouches' onChange={filterCategory} />
              Cloth Pouches
            </label>
          </div>
        </div>

        {/* Size filter */}
        <div
          className={`border border-gray-400 pl-5  ${showFilters ? '' : 'hidden'
            } sm:block`}
        >
          <p className='mb-3 text-sm font-bold'>Sizes</p>
          <div className='flex flex-col gap-2'>
            <label className='flex gap-2'>
              <input type='checkbox' value='A7' onChange={filterSize} />
              A/7
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='A6' onChange={filterSize} />
              A/6
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='A5' onChange={filterSize} />
              A/5
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='A4' onChange={filterSize} />
              A/4
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='A3' onChange={filterSize} />
              A/3
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='A2' onChange={filterSize} />
              A/2
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='B5' onChange={filterSize} />
              B/5
            </label>
            <label className='flex gap-2'>
              <input type='checkbox' value='F/C' onChange={filterSize} />
              F/C
            </label>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {filteredData.map((item, index) => (
          <Productitem
            key={index}
            id={item._id}
            name={item.name}
            images={item.images[0] || item.images}
          />
        ))}
      </div>
    </div>
  );
};

export default Collections;
