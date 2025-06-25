import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useState } from "react";

// GoodsItem.jsx에서 이미지 클릭 시 PrivateRoute.jsx를 통해
// 로그인됐으면 넘어가는 상세 페이지 -> App.jsx 참조
// /goods/상품id
const GoodsDetail = () => {
  
  // 상품정보를 저장하는 state를 정의하시오.
  // state명: good
  const [good, setGood] = useState(null);

  // GoodsItem에서 넘겨받은 상품id를 저장하는 변수를 정의하시오.
  // useParams() 활용 -> url에서 번호, id 등을 추출
  const {id} = useParams();
  console.log("상품 id:", id);

  // 상품리스트에서 특정 상품정보만 JSON서버로부터 가져온 후, good state에 저장하는
  // getGoods함수를 구현하시오.
  // 요청URL : http://localhost:3000/goods_list/상품id
  const getGood = async () => {
    let res = await axios.get(`http://54.180.250.70:8089/lunch/api/goods_list/${id}`);
    let data = res.data;

    console.log(data);
    setGood(data);
  }

  // useEffect()를 이용하여 getGoods 함수를 한 번만 호출하시오.
  useEffect(() => {
    getGood();
  }, [])

  return (
    // 상품이 있으면 아래 형식으로 상품 정보 출력
    <>
      {good === null ? 
      (<p>로딩 중...</p>) 
      : 
      (// className -> .css파일에 있는 디자인 코드 호출
      <div className="goods-detail-box">
        <div className="goods-detail-box-thumb">
          <img src={good.detail.sub_thumb} alt="이미지" />
        </div>
        <div className="goods-detail-box-info">
          <div className="goods-detail-title">
            <div className="goods-icon">
              {/* 해당 상품이 new인지 best인지 조건부 렌더링을 통해 출력하시오. */}
              {good.new ? (<em className="goods-new">new</em>):
               good.best ? (<em className="goods-best">best</em>) : ("")}
            </div>
            <p className="goods-detail-name">{good.name}</p>
            <p className="goods-detail-txt">{good.detail.txt}</p>
            <div className="goods-detail-price-box">
              <strong>{good.price}</strong>
              <span>원</span>
            </div>
          </div>
          <div className="goods-detail-summary">{good.detail.summary}</div>
        </div>
      </div>)}
    </>
    
  );
};

export default GoodsDetail;
