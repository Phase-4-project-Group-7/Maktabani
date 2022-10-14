import React from 'react'
import { NavLink } from 'react-router-dom'

const BookCard = ({ book, deleteBook }) => {
  return (
    <li>
      <NavLink to={`/books/${book.id}`}>{book.name}</NavLink> - <button onClick={() => deleteBook(book.id)}>Delete</button>
    </li>
  )
}

export default BookCard
