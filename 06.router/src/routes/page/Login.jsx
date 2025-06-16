import React from 'react'
import { Link, useNavigate } from 'react-router'

const Login = ({setAuthenticate}) => { // 인증 상태를 삽입

    const navigate = useNavigate();

    const goToHome = () => {
        setAuthenticate(true);
        navigate("/");
    }

    return (
        <div>
            <h1>Login</h1>
            <button>로그인</button>
        </div>
    )
}

export default Login