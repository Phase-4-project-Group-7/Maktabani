import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const BookDetails = () => {
  const [book, setBook] = useState([]);
  const { id } = useParams();
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const loadBooks = async () => {
      const resp = await fetch(`http://localhost:3000/books/${id}`)
      const data = await resp.json();

      setBook(data);
      setLoad(false);
    }
    loadBooks();
  }, [id])

  if (load) {
    return <h3>Loading...</h3>
  } else {

    const removeReview = id => {
      setBook({
        ...book,
        reviews: book.reviews.filter(review => review.id !== id)
      })
    }

    const deleteReview = async id => {
      await fetch(`http://localhost:3000/reviews/${id}`, {method: "DELETE"})
      removeReview(id);
    }

    const reviewCards = book.reviews?.map((review, index) => <ReviewCard key={index} review={review} deleteReview={deleteReview} book={book} />)


    return (
      <div>
        <h1>Review Details</h1>
        <h3>{book.name}</h3>
        {reviewCards}
        <h4>Or add a new review below.</h4>
        <p><NavLink to={`/books/${book.id}/reviews/new`}>Add Review</NavLink></p>
      </div>
    )
  }
}

export default BookDetails
