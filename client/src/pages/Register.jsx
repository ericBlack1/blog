import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [inputs, setInputs] = useState({
        username:"",
        email:"",
        password:"",
    })

const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: [e.target.value]}))
}

const handleSubmit = async e => {
    e.preventDefault()
    try {
        const res = await axios.post("/register", inputs)
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}

  return (
    <div className='auth'>
            <div className='bg-white p-3 rounded w-45'>
                <h2>Register</h2>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='text'><strong>Username</strong></label>
                        <input required type='text' placeholder='Enter Username' onChange={handleChange} name='username' className='form-control rounded-0'/>
                    </div>
					<div className='mb-3'>
                        <label htmlFor='email'><strong>Username</strong></label>
                        <input required type='email' placeholder='Enter Email' onChange={handleChange} name='email' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input required type='password' placeholder='Enter Password' onChange={handleChange} name='password' className='form-control rounded-0'/>
                    </div>
                    <button onClick={handleSubmit} type='submit' className='btn btn-dark w-100 rounded-0'><strong>Register</strong></button>
                    <p>You agree to our terms and conditions</p>
                    <Link to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                </form>
            </div>
        </div>
  )
}

export default Register