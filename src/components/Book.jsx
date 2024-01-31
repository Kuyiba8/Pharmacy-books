import React from 'react';
// import  '../main/Color.css'

function Book({ title, author, description, imageUrl, pdfUrl }) {
  return (
    <div className='flex flex-col justify-center m-6'>
      <img 
         src={imageUrl} 
         alt={title} 
         className='w-50 h-44' 
         />
      <h2 className='w-50 my-4'>{title}</h2>
      <p className='w-50 my-2'><b className='text-green-800'>Author:</b> {author}</p>
      {/* <p>{description}</p> */}
      <a 
        href={pdfUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className='bg-gradient-to-b from-blue-300 to-green-400 text-white text-xl text-center rounded-xl p-3 my-2'>
           Read or Download PDF
      </a>
    </div>
  );
}

export default Book;
