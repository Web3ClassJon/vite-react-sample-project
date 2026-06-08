import { useEffect, useState } from 'react'
import { getAllBooks } from '../../api/book-data-access';
import BookListItem from './BookListItem';

function BookList() {  

    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks().then(books => setBooks(books));
        //console.log(books);
    }, []);

  return (
    <>
        <h2>Book List</h2>
        <ul>
            {books.map((b) => {return <BookListItem key={b.id} book={b} />})}
        </ul>
    </>
  )
}

export default BookList