import React, { useState } from "react";
import styles from "./TodoItem.module.css";
import Todo from "../Todo/Todo";

export default function TodoItem({
    todos,
    active,
    setActive,
    done,
    setDone,
    currentActive,
    setCurrentActive,
    setTodos,
}) {
    return (
        <ul className={styles.Todo__Lists}>
            {currentActive === "active"
                ? todos.map((todo) => {
                      if (todo.complited && todo.deleted === false) {
                          return (
                              <Todo
                                  active={active}
                                  setActive={setActive}
                                  done={done}
                                  setDone={setDone}
                                  setTodos={setTodos}
                                  todoText={todo.text}
                                  todos={todos}
                                  todo={todo}
                              />
                          );
                      }
                  })
                : currentActive === "done"
                ? todos.map((todo) => {
                      if (todo.complited === false && todo.deleted === false) {
                          return (
                              <Todo
                                  active={active}
                                  setActive={setActive}
                                  done={done}
                                  setDone={setDone}
                                  setTodos={setTodos}
                                  todoText={todo.text}
                                  todos={todos}
                                  todo={todo}
                              />
                          );
                      }
                  })
                : currentActive === "delete" &&
                  todos.map((todo) => {
                      if (todo.deleted) {
                          return (
                              <Todo
                                  active={active}
                                  setActive={setActive}
                                  done={done}
                                  setDone={setDone}
                                  setTodos={setTodos}
                                  todoText={todo.text}
                                  todos={todos}
                                  todo={todo}
                              />
                          );
                      }
                  })}
        </ul>
    );
}
