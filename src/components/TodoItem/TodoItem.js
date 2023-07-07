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
                ? todos.map((todo, index) => {
                      if (todo.complited && todo.deleted === false) {
                          return (
                              <Todo
                                  key={index}
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
                ? todos.map((todo, index) => {
                      if (todo.complited === false && todo.deleted === false) {
                          return (
                              <Todo
                                  active={active}
                                  key={index}
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
                  todos.map((todo, index) => {
                      if (todo.deleted) {
                          return (
                              <Todo
                                  active={active}
                                  setActive={setActive}
                                  key={index}
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
