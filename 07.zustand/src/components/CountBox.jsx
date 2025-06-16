import React from 'react'
import useCountStore from '../stores/useCountStore';

// Count.jsx에서 호출되는 컴포넌트
const CountBox = () => {
  
    // useCountStore.js의 count 호출 -> Count.jsx와 공유!
    const { count } = useCountStore();

    return (
        <div>
            <h2>CountBox:{count}</h2>
        </div>
    )
}

export default CountBox