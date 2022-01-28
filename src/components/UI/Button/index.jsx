import React from "react";
import styles from './button.module.css'

const Button = ({text, onAdd}) => {

    return (
        <div className={styles.button__container}>
            <button onClick={onAdd} className={styles.button}>
                <span className={styles.text}>{text}</span>
            </button>
        </div>
    )
}


export default Button;