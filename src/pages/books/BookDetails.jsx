import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getBookById } from '../../api/book-data-access';

const BookDetails = () => {
    
    const params = useParams();
    const bookId = params.bookId ?? null;

    const [book, setBook] = useState({id:0, title:"", author:""});

    useEffect(() => {
        if(book){
            getBookById(bookId).then(book => {return setBook(book)});
        }
    }, [bookId])

  return (
    <>
        <h2>{book.title}</h2>
        <p>By: {book.author}</p>
    </>
  )
}

export default BookDetails