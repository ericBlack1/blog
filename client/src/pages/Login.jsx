import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
            <div className='bg-white p-3 rounded w-45'>
                <h2>Sign-In</h2>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='text'><strong>Username</strong></label>
                        <input required type='text' placeholder='Enter Username' className='form-control rounded-0'/>
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input required type='password' placeholder='Enter Password' className='form-control rounded-0'/>
                    </div>
                    <button type='submit' className='btn btn-dark w-100 rounded-0'><strong>Log in</strong></button>
                    <p>You agree to our terms and conditions</p>
                    <Link to='/register' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register</Link>
                </form>
            </div>
        </div>
  )
}

export default Login