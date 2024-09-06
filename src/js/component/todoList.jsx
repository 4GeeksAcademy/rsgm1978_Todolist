import React, {useState} from "react";


export const TodoList = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([])
     return (
        <div classNameNameName="container"> 
        <h1>Tareas a realizar</h1>
       
            <ul>
                <li>
                    <input 
                    type="text" 
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    onKeyUp={(e) => {
                        if (e.key === "Enter") {
                            if (inputValue.trim() === "") return
                            setTodos(todos.concat([inputValue])); 
                            setInputValue("");
                        }
                    }}
                    placeholder="Escribir aqui las tareas por realizar, luego presionar Enter"></input>
                </li>
                {todos.map((item, index) =>(
                    <li>
                        {item}{" "}
                        <i 
                        class="fas fa-trash-alt" 
                        onClick={() => setTodos(
                            todos.filter((t, currentIndex) => 
                                index != currentIndex))}></i>
                    </li>
                ))}
                
            </ul>     
            <div>{todos.length} tareas</div>       
        </div>
        
     )
}