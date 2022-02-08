import React from "react";
import styles from './Input.module.css'

const Input = ({placeHolder, handleChange}) => {
    return (
        <input
            onChange={handleChange}
            className={styles.field}
            placeholder={placeHolder}
            type='text'/>
    )
}


export default Input;