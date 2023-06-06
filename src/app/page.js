"use client";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import TodoItem from "@/components/TodoItem/TodoItem";
import AddTodo from "@/components/AddTodo/AddTodo";

export default function Home() {
    return (
        <>
            <section className={styles.Todo}>
                <Header />
                <TodoItem />
                <AddTodo />
            </section>
        </>
    );
}
