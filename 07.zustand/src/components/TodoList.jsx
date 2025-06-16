import React from 'react'
import useTodoStore from '../stores/useTodoStore';

const TodoList = () => {

    // useTodoStore.js에 있는 todos 가져오기!
    const { todos } = useTodoStore();

    return (
        <div>
            {/* todos가 채워져 있다면 map으로 요소들(item)을 순회해 목록과 날짜 출력 */}
            {todos && todos.map((item) => (
                // todos의 id를 key로 삼아 할 일과 날짜 출력!
                <p key={item.id}>{item.todo}({item.date})</p>
            ))}
        </div>
    )
}

export default TodoList