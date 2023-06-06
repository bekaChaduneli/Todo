"use client";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import TodoItem from "@/components/TodoItem/TodoItem";
import AddTodo from "@/components/AddTodo/AddTodo";
import { useState } from "react";

export default function Home() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <>
            <section className={styles.Todo}>
                <Header
                    todos={todos}
                    setTodos={setTodos}
                    inputValue={inputValue}
                />
                <TodoItem
                    todos={todos}
                    setTodos={setTodos}
                    inputValue={inputValue}
                />
                <AddTodo
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    todos={todos}
                    setTodos={setTodos}
                />
            </section>
        </>
    );
}
