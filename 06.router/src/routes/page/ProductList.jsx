import React from 'react'
import { useNavigate } from 'react-router'

const ProductList = () => {

    // useNavigate()
    // - 페이지를 이동할 때 사용하는 컴포넌트
    // - Link 컴포너트와 다른 점은 조건에 따라 페이지를 이동해야 할 때 활용!
    // - Link 컴포넌트는 바로 이동해야 할 때 활용!

    const navigate = useNavigate();  // useNavigate() : 조건에 따라 페이지를 이동함!

    const goToHome = () => {  // goToHome 함수 사용 시에 페이지를 이동시키기
        navigate("/");  // App.jsx에 따라 "/"에 해당하는 Home.jsx으로 이동!
    }

    const goToProduct = (e) => {
        if(e.target.innerText === "ProductDetail 이동") {
            // App.jsx에 따라 ProductDetail.jsx로 이동 -> 아래의 주소를 붙임
            navigate("/prdDetail/1");  
        } else {
            // App.jsx에 따라 ProductDetail2.jsx로 이동 -> 아래의 주소를 붙임
            navigate("/prdDetail2?pro_no=15&cate=pants");  
        }
    }

    return (
        <div>
            <h1>ProductList</h1>
            {/* 버튼 클릭 시 각자에 맞는 페이지로 이동 */}
            <button onClick={goToHome}>Home 이동</button>  
            <button onClick={goToProduct}>ProductDetail 이동</button>
            <button onClick={goToProduct}>ProductDetail2 이동</button>
        </div>
    )
}

export default ProductList