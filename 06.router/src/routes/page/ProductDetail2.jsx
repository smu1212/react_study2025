import React from 'react'
import { useSearchParams } from 'react-router'

const ProductDetail2 = () => {

    // useSearchParams -> 쿼리 값을 가져옴
    // -> 요청 URL 경로에서 쿼리스트링(?key=value)를 가져오는 방식
    const [query, setQuery] = useSearchParams();

    return (
        <div>
            <h1>ProductDetail2</h1>
            {/* /pro_no=(숫자)&cate=(카테고리)의 숫자와 카테고리를 출력 */}
            <h4>{query.get("pro_no")}번째 {query.get("cate")}상품입니다.</h4>    
        </div>
    )
}

export default ProductDetail2