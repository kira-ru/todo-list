import React from "react";
import styles from './button.module.css'
import classNames from "classnames";

const Button = ({text, handleClick, type}) => {
    const className = classNames(styles.button, {
        [styles.grey]: type,
    })


    return (
        <button onClick={handleClick} className={className}>
            <span className={styles.text}>{text}</span>
        </button>
    )
}


export default Button;