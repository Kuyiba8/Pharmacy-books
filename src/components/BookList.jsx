


import React from 'react';
import Book from '../components/Book';

function BookList({books}) {

  

  return (
    <div className='max-w-5xl sm:w-5/6 mx-auto'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-1'>
      {books.map(book => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
          imageUrl={book.imageUrl}
          pdfUrl={book.pdfUrl}
        />
      ))}
    </div>
    </div>
  );
}

export default BookList;


