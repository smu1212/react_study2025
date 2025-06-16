import React from 'react'
import { useState } from 'react';
import CountBox from './CountBox';
import useCountStore from '../stores/useCountStore';

// App.jsx에서 호출되는 컴포넌트
const Count = () => {

    // const [count, setCount] = useState(0);
    // useCountStore.js에 있는 함수들 주입
    const { count, increase, increaseBy, decrease } = useCountStore();

    const handleAddCount = () => {
        increase();
    }

    const handleSubCount = () => {
        decrease();
    }

    return (
        <div>
            <h1>Count:{count}</h1>
            {/* 클릭 시 1 증가 버튼 */}
            <button onClick={handleAddCount}>증가+1</button>
            {/* increaseBy 함수에 10을 대입 -> 클릭 시 10 증가 버튼 */}
            <button onClick={()=>increaseBy(10)}>증가+10</button>
            {/* 클릭 시 1 감소 버튼 */}
            <button onClick={decrease}>감소-1</button>

            {/* CountBox.jsx 호출 */}
            <CountBox/>
        </div>
    )
}

export default Count