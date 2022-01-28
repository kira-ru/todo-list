import React from "react";
import styles from './Title.module.css';
import edit from '../../../assets/images/edit.svg';


const Title = (props) => {
    return (
        <div className={styles.title}>
            <div className={styles.text}><span>Frontend</span></div>
            <div className={styles.edit}><img src={edit} alt="edit icon"/></div>
        </div>
    )
}

export default Title;