import React from 'react'
import { Link as Anchor } from 'react-router-dom'

export default function Anchors() {
  return (
      <>
        <Anchor to='/' >Home</Anchor>
        <Anchor to='/cities'>Cities</Anchor>
        <Anchor to='/signup'>Sign Up</Anchor>
        <Anchor to='/signin'>Sign In</Anchor>
      </>
  )
}