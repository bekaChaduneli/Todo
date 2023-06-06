import React from "react";
import styles from "./TodoItem.module.css";

export default function TodoItem() {
    return (
        <ul className={styles.Todo__Lists}>
            <li className={styles.Todo__Lists__List}>
                <div className={styles.Todo__Lists__Left}>
                    <input
                        type="checkbox"
                        className={styles.Todo__Lists__Checkbox}
                        id="list-checkbox-1"
                        name="list-checkbox"
                    />
                    <label for="list-checkbox-1"></label>
                    <label
                        className={styles.Todo__Lists__Text}
                        for="list-checkbox-1"
                    >
                        git fetch
                    </label>{" "}
                </div>
                <figure className={styles.Todo__Lists__DeleteIcon}>
                    <ListDeleteButt />
                </figure>
            </li>
            <li className={styles.Todo__Lists__List}>
                <div className={styles.Todo__Lists__Left}>
                    <input
                        type="checkbox"
                        className={styles.Todo__Lists__Checkbox}
                        id="list-checkbox-2"
                        name="list-checkbox"
                    />
                    <label
                        className={styles.Todo__Lists__CustomCheckbox}
                        for="list-checkbox-2"
                    ></label>
                    <label
                        className={styles.Todo__Lists__Text}
                        for="list-checkbox-2"
                    >
                        git fetch
                    </label>{" "}
                </div>
                <figure className={styles.Todo__Lists__DeleteIcon}>
                    <ListDeleteButt />
                </figure>
            </li>
        </ul>
    );
}

function ListDeleteButt() {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M21 5.97998C17.67 5.64998 14.32 5.47998 10.98 5.47998C9 5.47998 7.02 5.57998 5.04 5.77998L3 5.97998"
                stroke="#DD5F55"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                stroke="#DD5F55"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M18.8499 9.13998L18.1999 19.21C18.0899 20.78 17.9999 22 15.2099 22H8.7899C5.9999 22 5.9099 20.78 5.7999 19.21L5.1499 9.13998"
                stroke="#DD5F55"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M10.33 16.5H13.66"
                stroke="#DD5F55"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            <path
                d="M9.5 12.5H14.5"
                stroke="#DD5F55"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
}
