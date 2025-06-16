import React from "react";
import { Link, useNavigate } from "react-router";

// Header -> 메인 페이지의 헤더(메뉴, 로그인 버튼 등이 있는 공간) 담당

const Header = ({authenticate, setAuthenticate}) => {
  // 로그인 버튼 클릭 시, 메인페이지로 이동하는 함수를 구현하시오.
  // 로그인 -> 로그아웃 텍스트 전환
  // 로그아웃 -> 로그인 텍스트로 전환

  // useNavigate() -> 프로그래밍 방식으로 다른 페이지로 이동할 때 사용
  const navigate = useNavigate();

  // 로그인이 된 상태면 로그인 해제하고 홈 화면으로 이동
  // 그렇지 않으면 로그인 화면(Login.jsx) 이동
  const goToLogin = () => {
    if(authenticate){
      setAuthenticate(false);
      navigate("/");
    } else {
      navigate("/login");
    }
    
  }

  return (
    // App.css에 있는 클래스에 따라 디자인!
    <div className="header-box">
      <div className="header-box-logo">
        {/* 메인페이지로 이동하도록 URL를 지정하시오. */}
        <Link to={"메인"}>
          <img
            src="https://cdn.bonif.co.kr/resources/web/css/images/logo_gnb.png"
            alt="이미지"
          />
        </Link>
      </div>
      <div className="header-box-nav">
        <ul className="header-box-nav-list">
          {/* 각 메뉴버튼 클릭 시, 각 페이지가 보여지도록 URL를 정의하시오. */}
          <li>
            {/* Link를 통해 클릭해서 들어갈 페이지로, 
                to를 통해 App.jsx를 참조해서 Main.jsx로 이동!
            */}
            <Link to={"/"}>메인</Link>
          </li>
          <li>
            {/* 위처럼 Link를 통해 클릭해서 들어갈 페이지로, 
                to를 통해 App.jsx를 참조해서 GoodsList.jsx로 이동!
                -> 메뉴 정보를 화면에 출력한다!
            */}
            <Link to={"/goods"}>메뉴 소개</Link>
          </li>
        </ul>
      </div>
      <div className="header-box-util">
        {/* 로그인이 됐으면 로그아웃 버튼, 안 됐으면 로그인 버튼 */}
        <button onClick={goToLogin}>{authenticate?"로그아웃":"로그인"}</button>
      </div>
    </div>
  );
};

export default Header;
