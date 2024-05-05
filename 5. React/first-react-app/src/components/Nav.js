import React from 'react'

const Nav = ({logoText}) => {
  return (
    <div>
      <div className='logo'>{logoText}</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact Us</li>
      </ul>
    </div>
  )
}

export default Nav
