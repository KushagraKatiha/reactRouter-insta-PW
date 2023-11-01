import React from 'react'

function FormComp({label, type}) {
  return (
    <form className='m-3'>

        <input type={type}  placeholder={label} className='border-none outline-none p-1 rounded-md'/>

    </form>
  )
}

export default FormComp