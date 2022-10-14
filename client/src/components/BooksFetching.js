import React, {useState, useEffect} from 'react'
import axios from 'axios';

function BooksFetching() {
    const [books, setBooks] = useState([])
    useEffect(() => {
        axios
            .get("http://localhost:3000/books")
            .then(res => {
                console.log(res)
                setBooks(res.data)
            })
            .catch(err => { 
                console.log(err)
            })
    },[]);

    return (
        <div>
            <h1>List of Books:</h1>
            <ol>
             {books.map(book => (
                    <li key={book.id}>Name: {book.name}, Author: {book.author}, Book Categry: {book.category}</li>
             ))}
            </ol>
                
        </div>
    )
}
export default BooksFetching;