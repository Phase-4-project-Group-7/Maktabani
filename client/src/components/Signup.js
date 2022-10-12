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
    


  return (
    <div>
      
    </div>
  )
}

export default Signup
