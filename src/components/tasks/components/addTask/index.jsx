import React, {useState} from "react";
import styles from './addTask.module.css';
import addIcon from '../../../../assets/images/add.svg';
import AddForm from "./addForm";


const AddTask = ({onAddTask, folderID}) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    return (
        <div className={styles.container}>

            {!isFormVisible
            && <div onClick={() => setIsFormVisible(true)} className={styles.newTask}>
                <div className={styles.icon}><img src={addIcon} alt=""/></div>
                <div className={styles.text}>Новая задача</div>
            </div>}

            {isFormVisible
            && <AddForm toggle={setIsFormVisible} onAddTask={onAddTask} folderID={folderID}/>}
        </div>
    )
}

export default AddTask;