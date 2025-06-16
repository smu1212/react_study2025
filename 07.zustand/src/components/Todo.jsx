import React from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
  return (
    <div>
        <h1>할 일 목록</h1>
        {/* TodoForm.jsx 호출 */}
        <TodoForm/>
        <hr/>
        {/* TodoList.jsx 호출 */}
        <TodoList/>
    </div>
  )
}

export default Todo