import React, {useState} from "react";
import styles from './Tasks.module.css';
import Title from "./title";
import Task from "./task";


const Tasks = (props) => {
    return (
        <div className={styles.tasks}>
            <Title/>


            <Task key={Math.random()} id={Math.random()}/>
            <Task key={Math.random()} id={Math.random()}/>
        </div>
    )
}

export default Tasks;