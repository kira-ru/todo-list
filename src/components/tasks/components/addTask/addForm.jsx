import React, {useState} from "react";
import styles from './addTask.module.css';
import Button from "../../../UI/Button";
import Input from "../../../UI/Input";


const AddForm = ({toggle, folderID, onAddTask}) => {
    const [inputValue, setInputValue] = useState('');

    function handleChange (e) {
        setInputValue(e.target.value);
    }

    function onAdd () {
        if (!inputValue) {
            alert('Введите название задачи')
            return;
        }

        let taskObj = {
            "listId": folderID,
            "text": inputValue,
            "completed": false,
        }

        onAddTask(taskObj);
        setInputValue('');
        toggle(false);
    }

    return (
        <div className={styles.addForm}>
            <div className={styles.form}>
                <Input handleChange={handleChange} placeHolder={'Текст задачи'}/>
            </div>
            <div className={styles.addButton}>
                <Button handleClick={onAdd} text={'Добавить задачу'} />
            </div>
            <div className={styles.cancelButton}>
                <Button handleClick={() => toggle(false)} text={'Отмена'} type={'grey'}/>
            </div>
        </div>
    )
}

export default AddForm;