import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'

const BookList = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadBooks = async () => {
      const resp = await fetch('http://localhost:3000/books')
      const data = await resp.json();
      setBooks(data)
      setLoading(false)
    }
    loadBooks();
  }, [])

  const removeBook = id => {
    setBooks(books.filter(book => book.id !== id))
  }


  const deleteBook = async id => {
    await fetch(`http://localhost:3000/books/${id}`, { method: "DELETE" })
    removeBook(id);
  }

  if(loading) {return <h3>Loading...</h3>}

  const bookCard = books.map((book, index) => <BookCard key={index} book={book} deleteBook={deleteBook} />)

  return (
    <div>
      <h1>Here are your books!</h1>
      {bookCard}
      <h4>Click on a book to see the reviews or add a new one.</h4> 
    </div>
  )
}

export default BookList
