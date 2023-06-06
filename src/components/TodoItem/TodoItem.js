import React from "react";
import styles from "./TodoItem.module.css";
import Todo from "../Todo/Todo";

export default function TodoItem({ todos, setTodos }) {
    return (
        <ul className={styles.Todo__Lists}>
            {todos.map((todo) => (
                <Todo
                    setTodos={setTodos}
                    todoText={todo.text}
                    todos={todos}
                    todo={todo}
                />
            ))}
        </ul>
    );
}
