import React, { useState, useEffect } from 'react'
import ReviewCard from './ReviewCard'


const ReviewList = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadReviews = async () => {
      const resp = await fetch('https://maktabani.herokuapp.com/reviews')
      const data = await resp.json();
      setReviews(data)
      setLoading(false);
    }
    loadReviews();
  }, [])
  if (loading) { return <h3>Loading...</h3> }

  const removeReview = id => {
    setReviews(reviews.filter(review => review.id !== id))
  }


  const deleteReview = async id => {
    await fetch(`https://maktabani.herokuapp.com/reviews/${id}`, { method: "DELETE" })
    removeReview(id);
  }

  const reviewCard = reviews.map((review, index) => <ReviewCard key={index} review={review} book={review.book} deleteReview={deleteReview} />)

  return (
    <div>
      <h1>Here are your books' reviews!</h1>
      {reviewCard}


      { <p>Click a book from the book List to add a new Review.</p> }

    </div>
  )
}

export default ReviewList
