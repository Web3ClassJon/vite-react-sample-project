import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react';
import { getBookById, updateBook } from '../../api/book-data-access';
import { insertBook } from '../../api/book-data-access';

const BookForm = () => {

    const params = useParams();
    const bookId = params.bookId ?? 0;

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    useEffect(() => {
        if(bookId > 0){
        getBookById(bookId).then((book) => {
            setTitle(book.title)
            setAuthor(book.author)
        })}
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(title && author){
            if(bookId > 0){
            const book = {id: bookId, title: title, author: author};
            updateBook(book).then(() => {navigate("/books")});
        }else{
            // insert
            const book = {title, author};
            insertBook(book).then(() => {navigate("/books")});
        }
        }else{
            console.log("form is not valid")
        }
    }



  return (
    <form onSubmit={handleSubmit}>
        <label>Title</label>
            <br />
            <input type="text" value={title} onChange={(evt) => {return setTitle(evt.target.value)}} />
            <br />
            <label>Author</label>
            <br />
            <input type="test" value={author} onChange={(evt) => {return setAuthor(evt.target.value)}} />
            <br />
            <button>SAVE</button>
    </form>
  )
}

export default BookForm