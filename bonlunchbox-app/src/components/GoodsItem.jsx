import React from "react";
import { Link } from "react-router";

// GoodsList에서 받은 item = goods 요소 (url에서 받아온 정보의 데이터들) 사용!
const GoodsItem = ({item}) => {  
  return (
    // App.css에 있는 클래스에 따라 페이지를 디자인!
    <div className="goods-item" style={{ position: "relative" }}>
      <div className="goods-item-icon">
        {/* 해당 상품이 new인지 best인지 조건부 렌더링을 통해 출력하시오. */}
        {/* -> <em/> : 엠블럼 */}
        {/* new이면 new 엠블럼, best면 best 엠블럼 출력 */}
        {item.new ? (<em className="goods-new">new</em>) 
        : item.best ? (<em className="goods-best">best</em>) : ("")}

      </div>
      <div className="goods-thumb">
        {/* 
          이미지 클릭 시, Link컴포넌트를 이용해 GoodDetail.jsx로 이동하시오.
          -> 먼저 PrivateRoute.jsx로 가서 로그인 되었으면 GoodDetail.jsx로 이동!
          상세페이지 URL : /goods/상품의 id
        */}
        <Link to={`/goods/${item.id}`}>
          {/* 출력되는 이미지는 item의 메인 썸네일 이미지, 크기를 정해서 출력 */}
          <img style={{width:260, height:260}} src={item.main_thumb} alt="이미지" />
        </Link>
      </div>
      <div className="goods-name">
        {/* item의 이름 */}
        <h4>{item.name}</h4>
        <p>
          {/* item의 가격 */}
          <span>{item.price}</span>원
        </p>
      </div>
    </div>
  );
};

export default GoodsItem;
