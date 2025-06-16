import React from 'react'
import GoodsDetail from '../page/GoodsDetail'
import { Navigate } from 'react-router';

// 로그인 상태에 따라 다른 페이지로 이동되도록 구현하시오.
// 로그인 상태 : 상품상세페이지로 이동
// 비로그인 상태 : 로그인페이지로 이동

const PrivateRoute = ({authenticate}) => {
  // 로그인됐으면 상세 페이지로 이동, 아니면 로그인으로 이동
  return authenticate === true ? <GoodsDetail/> : <Navigate to={"/login"}/>;
}

export default PrivateRoute