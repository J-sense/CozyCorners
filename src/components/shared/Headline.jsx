import React from 'react'

const Headline = ({ children }) => {
  return (
    <h1 className='font-bannerfont text-3xl font-bold my-6'>
      {children}
    </h1>
  )
}

export default Headline
