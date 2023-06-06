import React from "react";
import styles from "./AddTodo.module.css";

export default function AddTodo() {
    return (
        <div className={styles.Todo__CreateTodo}>
            <input
                type="text"
                placeholder="New Task"
                className={styles.Todo__CreateTodo__input}
            />
            <div className={styles.Todo__CreateTodo__AddTodo}>
                <AddButt />
            </div>
        </div>
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
