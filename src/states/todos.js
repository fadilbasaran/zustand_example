import {create} from "zustand";
export const useTodosStore = create((set) => ({
    todos: [
        {
            title: 'Todos1',
            completed: false,
        },
        {
            title: 'Todos2',
            completed: true,
        },
    ],
    title:'',
    completed:false,
    
    addTodo: (item) => set((state) => ({
        todos: [...state.todos, item],
    })),
    removeTodo: (id) => set((state) => ({
        todos: state.todos.filter((_, key) => id !== key),
    })),
}));
