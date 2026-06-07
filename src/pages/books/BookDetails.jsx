import React from 'react'
import { useParams } from 'react-router-dom';

const BookDetails = () => {
    
    const params = useParams();
    const bookId = params.bookId ?? null;

  return (
    <>
        <h1>Book Details</h1>
        <p>Display the details for this book: {bookId} </p>
    </>
  )
}

export default BookDetails