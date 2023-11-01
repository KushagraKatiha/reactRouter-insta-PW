import React from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'
import FormComp from './FormComp'
function Login() {
  return (
   <>
   <div className='bg-slate-200 p-4 rounded-md w-1/3 m-auto flex flex-col'>
        <img src="./Insta.png" alt="insta" className='h-24 w-auto' />
        <FormComp label='Name' type='text' />
        <FormComp label='Password' type='password' />
        <Button btnText='Login' />

        <p>Already have an Account ??</p>
        <Link to='/signup'>
          <span className='text-blue-500'>Sign up</span>
        </Link>
    </div>
   </>
  )
}

export default Login