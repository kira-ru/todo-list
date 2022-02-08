import React from "react";
import styles from './title.module.css';
import edit from '../../../../assets/images/edit.svg';


const Title = ({name, onEditTitle, color}) => {

    return (
        <div className={styles.title}>
            <div style={{color: color.hex}} className={styles.text}><span>{name}</span></div>
            <div className={styles.edit}><img onClick={onEditTitle} src={edit} alt="edit icon"/></div>
        </div>
    )
}

export default Title;