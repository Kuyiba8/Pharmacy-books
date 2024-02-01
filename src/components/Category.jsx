import React from 'react';
import { Link } from 'react-router-dom';

function Category({  categoryName }) {
 
 
  return (
      <div className='rounded-3xl h-[200px] bg-gradient-to-b from-blue-300 to-green-400 shadow-lg flex justify-center text-center  w-4/5 hover:scale-105 duration-500 mx-auto  '>
      <Link to={`/category/${categoryName}`} className="text-center text-white text-xl my-auto">{categoryName} Books</Link>
      </div>
  );
}

export default Category;
