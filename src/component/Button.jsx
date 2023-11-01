import React from 'react'

function Button({btnText}) {
  return (
        <input type="submit" value={btnText} className='py-1 px-3 text-white font-semibold text-base bg-blue-500 rounded-md mt-2' />
  )
}

export default Button