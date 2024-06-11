
"use client";
import { useState } from "react"
import { useTodosStore } from "./todos";

export default function AddTodo(){
    const addTodo=useTodosStore(store=>store.addTodo)
    const [title,setTitle] =useState("");
    const [completed,setCompleted] = useState(false);
    
    const submitHandler =e=>{
        e.preventDefault();
        addTodo({title,completed});
        setTitle("");
        setCompleted(false);
    }

    return(
        <form onSubmit={submitHandler}>
            <input type="text" value={title} onChange={e=>setTitle(e.target.value)} placeholder="Todo ekle"/><br/>
            <label>
                <input type="checkbox" checked={completed} onChange={e=>setCompleted(e.target.checked)}/>
                {completed?"Tamamlandı":"Bekleniyor"}
            </label><br/>
            <button type="submit">Ekle</button>
        </form>
    )
}