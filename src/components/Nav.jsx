import React from 'react'
import Anchors from './Anchor'
import Button from './Button'

function Nav() {
  return (
   <>
    <div className='flex justify-around h-24'>


       <nav className='flex  items-center gap-4 mx-4'>
       <Anchors />
      <Button name='Login'/>
       </nav>
   </div>
   </>
  )
}

export default Nav