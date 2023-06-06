import React, { useEffect } from "react";
import styles from "./AddTodo.module.css";

export default function AddTodo({
    inputValue,
    setInputValue,
    todos,
    setTodos,
}) {
    function AddTodo(event) {
        setInputValue(event.target.value);
    }
    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    function sub(e) {
        console.log("fasfa");
        e.preventDefault();
        if (inputValue !== "") {
            const newTodo = {
                id: Math.random() * 1000,
                text: inputValue,
                complited: true,
                deleted: false,
                remove: false,
            };
            setTodos((prevTodos) => [...prevTodos, newTodo]);
        }
        setInputValue("");
    }
    return (
        <form className={styles.Todo__CreateTodo}>
            <input
                type="text"
                placeholder="New Task"
                required
                value={inputValue}
                onKeyDown={(e) => {
                    if (e.key === "Enter") sub(e);
                }}
                onChange={AddTodo}
                className={styles.Todo__CreateTodo__input}
            />
            <div onClick={sub} className={styles.Todo__CreateTodo__AddTodo}>
                <AddButt />
            </div>
        </form>
    );
}

function AddButt() {
    return (
        <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M1 8H15"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8 15L8 1"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}
