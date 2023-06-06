"use client";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import TodoItem from "@/components/TodoItem/TodoItem";
import AddTodo from "@/components/AddTodo/AddTodo";
import { useState } from "react";

export default function Home() {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);
    const [done, setDone] = useState([]);
    const [active, setActive] = useState([]);
    const [currentActive, setCurrentActive] = useState("active");
    return (
        <>
            <section className={styles.Todo}>
                <Header
                    todos={todos}
                    setTodos={setTodos}
                    inputValue={inputValue}
                    setCurrentActive={setCurrentActive}
                    currentActive={currentActive}
                    active={active}
                    setActive={setActive}
                    done={done}
                    setDone={setDone}
                />
                <TodoItem
                    todos={todos}
                    setTodos={setTodos}
                    inputValue={inputValue}
                    active={active}
                    setActive={setActive}
                    setCurrentActive={setCurrentActive}
                    currentActive={currentActive}
                    done={done}
                    setDone={setDone}
                />
                <AddTodo
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                    todos={todos}
                    setCurrentActive={setCurrentActive}
                    currentActive={currentActive}
                    setTodos={setTodos}
                />
            </section>
        </>
    );
}
