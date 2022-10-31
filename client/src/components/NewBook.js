import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const NewBook= () => {
  const [name, setName] = useState("")
  const navigate = useNavigate();

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
  
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const body = { name: name }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }
    await fetch('https://maktabani.herokuapp.com/books', options);
    
     navigate("/books");
  }


  return (
    <div>
      <h1>Add a new book here.</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={name} onChange={handleChange} autoFocus={true} />
        </div>
        <br />
        <input type="submit" value="Enter Book" />
      </form>
    </div>
  )
}

export default NewBook
