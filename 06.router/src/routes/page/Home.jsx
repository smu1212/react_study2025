import React from 'react'
import { Link } from 'react-router'

// <Link/> : 글자 클릭 시 다른 컴포넌트 페이지로 이동!

const Home = () => {
  return (
    <div>
        <h1>Home</h1>
        {/* 
          URL 요청으로 App.jsx에 있는 경로를 요청! 
          -> 이 때 다른 페이지를 import하지 않았기 때문
        */}
        <Link to={"/about"}>About 이동</Link>
        <Link to={"/prdList"}>ProductList 이동</Link>
        <Link to={"/mypage"}>MyPage 이동</Link>
    </div>
  )
}

export default Home