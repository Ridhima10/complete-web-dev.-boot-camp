import React, { useEffect } from 'react'

const Nav = ({ color }) => {

  // runs everytime (when the component is mounted)
  useEffect(() => {
    alert("Runs everytime")
  })


  // runs one time (when the component is mounted)
  useEffect(() => {
    alert("Runs one time when the page is loaded")
  }, [])

  // runs when color is triggered (when the component is mounted)
  useEffect(() => {
    alert("Runs  when color is triggered")
  }, [color])


  // Example of cleanup function (unmount) comment out nav component and then it will run to show that the component is unmount
  useEffect(() => {
    alert("Welcome to the website")

    return () => {
      alert("Component is unmount")
    }
  }, [])


  return (
    <div>
      I am a navbar of {color} color
    </div>
  )
}

export default Nav
