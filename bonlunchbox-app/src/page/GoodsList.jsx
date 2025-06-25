import React, { useEffect, useState } from "react";
import GoodsItem from "../components/GoodsItem";
import axios from "axios";

const GoodsList = () => {

  // 1.axios를 이용하여 상품정보를 가진 URL로 요청한 후, 응답받은 데이터를
  // 상품리스트 state에 저장하는 getGoodsList함수를 구현하시오.
  // URL: http://localhost:3000/goods_list
  const [goods, setGoods] = useState();

  const getGoodsList = async () => {
    const GOODS_URL = "http://54.180.250.70:8089/lunch/api/goods_list";
      // axios를 이용해 url에 있는 정보 가져오기
    let res = await axios.get(GOODS_URL);
    // 가져온 정보의 데이터를 저장
    let data = res.data;

    console.log(data);
    // 저장된 데이터를 goods에 넣음
    setGoods(data);
  }

  // 2.useEffect() 를 이용하여 getGoodsList함수를 한 번만 호출하시오.
  // -> 렌더링되는 순간 getGoodsList 함수를 실행
  useEffect(() => {
    getGoodsList();
  }, [])

  return (
    <div className="goods-list">
      {/* 3.상품리스트 안에 있는 정보를 GoodsItem 컴포넌트를 활용해 출력하시오. */}
      {/* -> goods가 채워져 있으면 map으로 요소명을 item으로 정한 다음, item으로 GoodsItem.jsx을 순회하며 실행
          -> GoodsItem.jsx를 통해 썸네일 이미지, 이름, 가격을 출력! 
      */}
      { goods && goods.map((item) => (
        <GoodsItem key={item.id} item={item}/>
      )) }
    </div>
  );
};

export default GoodsList;
