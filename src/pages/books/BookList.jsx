import { useEffect, useState } from 'react'
import { getAllBooks } from '../../api/book-data-access';
import BookListItem from './BookListItem';
import { Link } from 'react-router-dom';

function BookList() {  

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks().then(books => setBooks(books));
        //console.log(books);
    }, []);

  return (
    <>
        <h2>Book List</h2>
        <Link to="/books/add">Add Book</Link>
        <ul>
            {books.map((b) => {return <BookListItem key={b.id} book={b} />})}
        </ul>
    </>
  )
}

export default BookList