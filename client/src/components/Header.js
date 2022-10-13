import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <div className='sect-info'>
        <div className='text'>
            <h1>A PLACE IS <br/> NOT A PLACE <br/> UNTIL </h1>
            <h3>it has a collection of books</h3>
        </div>
        <div className='image-sect'>
            <img src={"https://media.istockphoto.com/vectors/beauty-girl-sitting-on-pile-of-booksfemale-character-reading-book-or-vector-id1158861397?k=20&m=1158861397&s=612x612&w=0&h=aF8TddZqMBNFvxmrVhrtTVWXuP0XzvFVRF3tw8X7J1U=" } alt = "book" />
        </div>
      
    </div>
  )
}

export default Header
