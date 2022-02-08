import React from "react";
import styles from './tasks.module.css';
import Task from "./components/task";
import Title from "./components/title";
import AddTask from "./components/addTask";


const Tasks = ({folder, onEditFolderName, onAddTask, onDelete, onEdit}) => {

    function onEditName () {
        let newName = window.prompt("Название папки", folder.name);
        if (newName) {
            onEditFolderName(folder.id, newName);
        } else {
            alert("Введите название папки");
        }
    }

    return (
        <div className={styles.tasks}>

            <Title onEditTitle={onEditName} name={folder.name} color={folder.color}/>

            {!!folder.tasks?.length
                ? folder.tasks.map(task => <Task key={task.id} item={task} onDelete={onDelete} onEdit={onEdit}/>)
                : <div className={styles.tasksMiss}><span>Задачи отсутствуют</span></div>
            }
            <AddTask key={folder.id} onAddTask={onAddTask} folderID={folder.id}/>
        </div>
    )
}

export default Tasks;