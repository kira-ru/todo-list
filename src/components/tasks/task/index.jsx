import React from "react";
import styles from './Task.module.css';
import checkMark from '../../../assets/images/check.svg';


const Task = (props) => {

    const toggleColor = (e) => {

    }

    return (
        <div className={styles.task}>

            <div className={styles.checkbox}>
                <input id={`task-${props.id}`} type="checkbox"/>
                <label className={styles.container} htmlFor={`task-${props.id}`}>
                    <svg     width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </label>
            </div>

            <div className={styles.text}>
                <span>TASK</span>
            </div>

        </div>
    )
}

export default Task;