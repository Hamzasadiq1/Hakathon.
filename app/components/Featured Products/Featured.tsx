import React from 'react'

const Featured = () => {
  return (
    
    <div className="bg-gray-100 p-8" >
  <h1 className="text-2xl font-bold text-center mb-6">Featured Products</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <div/>
    
    <div className="bg-white shadow-md rounded-md overflow-hidden text-center p-4">
      
      <h2 className="text-lg font-semibold mt-2">Cantilever Chair</h2>
      <p className="text-gray-500 text-sm">Code - 126 × 22</p>
      <p className="text-gray-900 font-bold mt-1">$42.00</p>
    </div>

    
    <div className="bg-white shadow-md rounded-md overflow-hidden text-center p-4 ">
      
      <h2 className="text-lg font-semibold mt-2 ">Cantilever Chair</h2>
      <p className="text-gray-500 text-sm">Code - Y523201</p>
      <p className="text-gray-900 font-bold mt-1">$42.00</p>
      <button className="bg-green-500 text-white text-sm px-4 py-2 rounded-md mt-2">View Details</button>
    </div>

    
    <div className="bg-white shadow-md rounded-md overflow-hidden text-center p-4">
      
      <h2 className="text-lg font-semibold mt-2">Cantilever Chair</h2>
      <p className="text-gray-500 text-sm">Code - Y523201</p>
      <p className="text-gray-900 font-bold mt-1">$42.00</p>
    </div>

    
    <div className="bg-white shadow-md rounded-md overflow-hidden text-center p-4">
      
      <h2 className="text-lg font-semibold mt-2">Cantilever Chair</h2>
      <p className="text-gray-500 text-sm">Code - Y523201</p>
      <p className="text-gray-900 font-bold mt-1">$42.00</p>
    </div>
  </div>
  </div>

  )
}


export default Featured
