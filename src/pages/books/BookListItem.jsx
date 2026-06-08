import React from 'react'
import { Link } from 'react-router-dom'

const BookListItem = ({book}) => {
  return (
    <li>
        <b>{book.title}</b>
        <Link to={"/books/" + book.id}>View Details</Link>
    </li>
  )
}

export default BookListItem