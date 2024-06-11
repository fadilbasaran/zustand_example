"use client";
import AddTodo from "@/states/AddTodo";
import { useTodosStore } from "@/states/todos";
import { useShallow } from 'zustand/react/shallow'

export default function Home() {

  const {todos,removeTodo}=useTodosStore(
    useShallow(
      (state)=>({
        todos:state.todos,
        removeTodo:state.removeTodo,
      }),
    )
    
  )
  // const removeTodo = useTodosStore(state => state.removeTodo)
  // const todos = useTodosStore(state =>state.todos); 
  
  return (
    <>
    {
      todos.length==0 &&(
        <div>Hiç todo yok</div>
      )
    }
    {
      todos.map((todo,key) =>(
        <div key={key}>
          {todo.title}<br />
          {todo.completed? "Tamamlandı":"Bekliyor"}<br />
          <button onClick={()=>removeTodo(key)}>Sil</button>
        </div>
      ))
    }
    <AddTodo/>
    
    </>
  );
}
