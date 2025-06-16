import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes, Navigate } from 'react-router'
import './App.css'
import ProductList from './routes/page/ProductList'
import Home from './routes/page/Home'
import About from './routes/page/About'
import ProductDetail from './routes/page/ProductDetail'
import ProductDetail2 from './routes/page/ProductDetail2'
import Login from './routes/page/Login'

function App() {

  // 인증 준비
  const [authenticate, setAuthenticate] = useState(false);

  // 인증 성공 시 마이페이지로, 아니면 로그인 화면으로 이동
  // -> 인증 성공이 안 된 상태에서 /mypage로 가면 /login페이지로 이동
  const PrivateRoute = () => {
    return authenticate === true ? <MyPage/> : <Navigate to={"/login"}/>;
  }

  return (
    // Routes -> 사용자가 요청한 URL 중 일치하는 컴포넌트를 렌더링해줌
    // Route -> path에 정의된 요청이 들어왔을 때 element에 정의된 컴포넌트를 렌더링해줌

    // Routes : URL 요청 시 알맞는 컴포넌트를 실행해주는 역할
    <Routes>
      {/* Home 렌더링 */}
      <Route path="/" element={<Home/>}/> 
      {/* about 요청 시 About 렌더링 */}
      <Route path="/about" element={<About/>}/>  
      {/* prdList 요청 시 ProductList 렌더링 */}
      <Route path="/prdList" element={<ProductList/>}/>

      {/* 
        [페이지 이동 시 데이터를 전달하는 방식 2가지]
        useParams()
        - 요청 URL 경로에서 동적 세그먼트(/path/:key)를 가져오는 방식
          ex) /product/1 -> {pro_no:1} 반환
        - 활용 : 블로그 포스트 ID, 회원 ID, 상품 ID 등

          useSearchParams()
          - 요청 URL 경로에서 쿼리스트링(?key=value)를 가져오는 방식
            ex) /product?pro_no=1 -> query.get("pro_no")로 값 추출
          - 활용 : 검색어, 정렬, 필터 등
      */}

      {/* ProductList.jsx에서 받아와서 처음 주소는 /prdDetail/1(여기서 pro_no = 1)로 시작 */}
      {/* -> 이 때 pro_no는 직접 변경 가능!*/}
      <Route path="/prdDetail/:pro_no" element={<ProductDetail/>}/>
      {/* ProductList.jsx에서 받아와서 처음 주소는 /prdDetail2?pro_no=15로 시작 */}
      <Route path="/prdDetail2" element={<ProductDetail2/>}/>

      <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
      <Route path="/mypage" element={<PrivateRoute/>}/>
    </Routes>
  )
}

export default App
