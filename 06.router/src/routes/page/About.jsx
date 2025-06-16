import React from 'react'
import { Link } from 'react-router'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        {/* 요청되어 App.jsx에 따라 Home으로 렌더링 */}
        <Link to={"/"}>Home 이동</Link>  
    </div>
  )
}

export default About