import React from 'react'
import {Link} from 'react-router-dom'
import FormComp from './FormComp'
import Button from './Button'
function SignUp() {
  return (
    <>
       <div className='bg-slate-200 p-4 rounded-md w-1/3 m-auto flex flex-col'>
        <img src="./Insta.png" alt="insta" className='h-24 w-auto' />
        <FormComp label='Name' type='text' />
        <FormComp label='Email' type='email' />
        <FormComp label='Password' type='password' />
        <FormComp label='Confirm Password' type='password' />
        <Button btnText='SignUp' />

        <p>Already have an Account ??</p>
        <Link to='/'>
          <span className='text-blue-500'>Login</span>
        </Link>
    </div>
    </>
  )
}

export default SignUp