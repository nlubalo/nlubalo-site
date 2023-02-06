import React from 'react'

function Section (props) {
  return (
    <div className='py-1 text-white text-2xl w-6/6 md:w-4/4 flex-col flex items-center justify-center text-center'>
      <h2 id={props.name} className='text-4xl py-2 font-bold'>
        {props.name}
      </h2>
      <div className='py-0 w-full flex justify-center items-center'>{props.children}</div>
    </div>
  )
}
export default Section