import React from 'react'
import { useRef } from 'react';
import useTodoStore from '../stores/useTodoStore';

const TodoForm = () => {

    // useRef -> 컴포넌트 내부에서 변수 저장 (자동으로 렌더링 X)
    const todoRef = useRef();
    const dateRef = useRef();

    // useTodoStore.js의 addTodo 가져오기!
    const { addTodo } = useTodoStore();

    // addTodo에 값 입력 준비!
    const handleAddTodo = (e) => {
        e.preventDefault();

        // ref -> .current 필수!
        let todo = todoRef.current.value;
        let date = dateRef.current.value;

        //  useTodoStore.js에 있는 addTodo에 todo와 date 대입!
        addTodo(todo, date);
    };

    return (
        <div>
            <form>
                {/* 문자 입력, 날짜 입력 후 등록하고 목록 출력! */}
                <input type="text" ref={todoRef}/>
                <input type="date" ref={dateRef}/>
                <input type="submit" value="등록" onClick={handleAddTodo}/>
            </form>
        </div>
    )
}

export default TodoForm