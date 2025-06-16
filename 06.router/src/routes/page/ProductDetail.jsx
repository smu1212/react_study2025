import React from 'react'

import { useParams } from 'react-router'

const ProductDetail = () => {

    // useParams -> URL 경로의 값을 가져옴 -> 붙여진 주소창에 /2 입력하면 2로 가져옴!
    // -> 요청 URL 경로에서 동적 세그먼트(/path/:key)를 가져오는 방식
    const {pro_no} = useParams();

    return (
        <div>
            <h1>ProductDetail</h1>
            {/* 주소가 /2면 '2번 상품입니다!' -> /(숫자)에 따라 달라짐 */}
            <h4>{pro_no}번 상품입니다!</h4>  
            </div>
        
    )
}

export default ProductDetail