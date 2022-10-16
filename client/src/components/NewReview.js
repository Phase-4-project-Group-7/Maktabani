import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'



const NewReview = () => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState("")
  const history = useHistory();
  const { bookId } = useParams();


  useEffect(() => {
    const loadBook = async () => {
      const resp = await fetch(`http://localhost:3000/books/${bookId}`)
      const data = await resp.json();
      setBook(data);
      setLoading(false);
    }
    loadBook();
  }, [bookId])

  if (loading) { return <h3>Loading...</h3> };


  const handleChange = e => {
    setState(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {review: state}
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(data)
    }
    // debugger
    await fetch(`http://localhost:3000/books/${bookId}/reviews`, options)
    //history(`/books/${bookId}`);
  }

  return (
    <div>
      <h3>Create Review for {book.name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Review: </label>
        <input type="text" id="name" value={state} onChange={handleChange} autoFocus={true} />
        <br />
        <br />
        <input type="submit" value="Enter Review" />
      </form>
    </div>
  )
}

export default NewReview