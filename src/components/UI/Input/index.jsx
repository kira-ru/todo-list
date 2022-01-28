import React from "react";
import styles from './Input.module.css'

const Input = ({placeHolder, handleChange}) => {
    return (
        <div className={styles.input}>
            <input onChange={handleChange} className={styles.field} placeholder={placeHolder} type='text'/>
        </div>
    )
}


export default Input;