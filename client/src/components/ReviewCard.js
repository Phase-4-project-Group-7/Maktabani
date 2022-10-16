import React from 'react';

const ReviewCard = ({review, book, deleteReview}) => {
  
  return (
    <li>
      {review.review} for {book.name} <button onClick={() => deleteReview(review.id)}>Delete</button>
    </li>
  )
}

export default ReviewCard
