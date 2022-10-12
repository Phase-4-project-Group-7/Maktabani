import React from 'react'
import { useState } from 'react';

const Signup = () => {

    // state for signup
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // state for checking errors
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);

    // handle name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmit(false) 
    };

    // handle email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmit(false) 
    };

    // handle password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmit(false) 
    };

    // handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name === '' || email === '' || password === '') {
        setError(true);
      }
      else {
        setSubmit(true);
        setError(false);
      }
    };

    // success message
    const successMessage = () => {
      return (
        <div className='success' style={{display:submit ? '' :'none'}}>
            <h2>{name} signed up successfully </h2>
        </div>
      );
    };

    // error message
    const errorMessage = () => {
      return (
         <div className='error' style= {{display: error ? '' : 'none',}}>
            <h2>Enter all the fields</h2>
      </div>
       )
      };

  return (
    <div className='signup'>

      <div>
        <h1>Signup Form</h1>
      </div>
      
      <div className='messages' >
        {errorMessage()}
        {successMessage()}

      </div>

      <form>
        <label className="label">Name</label>
        <input onChange={handleName} className= "input" value={name} type="text"/>

        <label className="label">Email</label>
        <input onChange={handleEmail} className= "input" value={email} type="email"/>

        <label className="label">Password</label>
        <input onChange={handlePassword} className= "input" value={password} type="password"/>

        <button onClick={handleSubmit} className="btn" type="submit">Submit</button>
      </form>
      
    </div>
  )
}

export default Signup
