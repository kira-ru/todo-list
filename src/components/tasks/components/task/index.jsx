import React from "react";
import styles from './task.module.css';
import removeIcon from '../../../../assets/images/remove_icon.svg';
import editIcon from '../../../../assets/images/edit.svg';


const Task = ({item, onDelete, onEdit}) => {

    function deleteHandler () {
        if (!window.confirm('Вы действительно хотите удалить задачу?')) {return}
        onDelete(item.id, item.listId)
    }

    return (
        <div className={styles.task}>

            <div className={styles.checkbox}>
                <input id={`task-${item.id}`} type="checkbox"/>
                <label className={styles.container} htmlFor={`task-${item.id}`}>
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                              stroke="black"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"/>
                    </svg>
                </label>
            </div>

            <div className={styles.text}>
                <span>{item.text}</span>
            </div>

            <div onClick={() => onEdit(item.id, item.text, item.listId)} className={styles.edit}>
                <img src={editIcon} alt="edit icon"/>
            </div>

            <div onClick={deleteHandler} className={styles.removeIcon}>
                <img src={removeIcon} alt="remove icon"/>
            </div>

        </div>
    )
}

export default Task;