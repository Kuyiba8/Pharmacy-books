import React from 'react';
import { useParams } from 'react-router-dom';
import BookList from '../components/BookList';
import booksData from '../data/books.json';

function CategoryPage() {
  const { categoryName } = useParams();
  const filteredBooks = booksData.filter(book => book.category === categoryName );

  return (
    <div className='w-full h-full mx-auto my-10 flex flex-col justify-center items-center'>
      <h1 className='text-3xl  text-center'>{categoryName} Books</h1>
      <div className='my-10 mx-auto'>
      <BookList books={filteredBooks} />
      </div>
    </div>
  );
}

export default CategoryPage;
