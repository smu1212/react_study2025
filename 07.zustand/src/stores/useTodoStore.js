import {create} from "zustand"

const useTodoStore = create((set) => ({
    todos:[],
    // TodoForm.jsx에서 todo, date를 대입!
    addTodo:(todo, date) => set((state) => ({
        // ...state.todos -> 지금까지의 리스트
        todos:[...state.todos, {id:Date.now(), todo, date}]
    }))
}))

export default useTodoStore