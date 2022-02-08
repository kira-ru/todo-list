import React, {useEffect, useState} from "react";
import styles from './todo.module.scss';
import Context from "./context";
import SideBar from "../sidebar";
import Tasks from "../tasks";
import API from '../../API/index';
import Preloader from "../UI/Preloader";
import {Routes, Route, useLocation} from 'react-router-dom';


const TodoListApp = () => {
    const [folders, setFolders] = useState(null);
    const [activeItem, setActiveItem] = useState(null);
    const [colors, setColors] = useState(null);
    let location = useLocation();


    useEffect(async () => {
        let folders = await API.getFolders();
        setFolders(folders);

        let colors = await API.getColors();
        setColors(colors);
    }, [])

    useEffect(() => {
        let activeItem = location.pathname.split('folders/')[1];
        activeItem ? setActiveItem(Number(activeItem)) : setActiveItem(0)
    }, [folders, location.pathname])


    async function addFolder (name, colorId, colorObj) {
        let response = await API.addFolder({name, colorId});

        setFolders([...folders, {...response, color: colorObj}]);
    }

    const removeFolder = (folderId) => {
        setActiveItem(0)
        setFolders(folders.filter(folder => folder.id !== folderId));
        let res = API.deleteFolder(folderId);
    }

    function onEditFolderName(id, name) {
        let newFolders = folders.map(folder => {
            if (folder.id === id) {
                folder.name = name
            }
            return folder
        })
        setFolders([...newFolders]);
        API.updateFolder(id, name);
    }

    async function onAddTask(task) {
        const taskWithID = await API.addTask(task);

        let newList = folders.map(folder => {
            if (folder.id === taskWithID.listId) {
                folder.tasks = [...folder.tasks, taskWithID]
            }
            return folder;
        })

        setFolders(newList);
    }

    function deleteTask(taskID, folderID) {
        const newList = folders.map(folder => {
            if (folder.id === folderID) {
                folder.tasks = folder.tasks.filter(task => task.id !== taskID);
            }
            return folder;
        })

        API.deleteTask(taskID);
        setFolders(newList)
    }

    function editTask(taskID, taskText, folderID) {
        const newText = prompt('Текст задачи', taskText)

        if (newText) {return}

        const newList = folders.map(folder => {
            if (folder.id === folderID) {
                folder.tasks = folder.tasks.map(task => {
                    if (task.id === taskID) {
                        task.text = newText;
                    }
                    return task
                })
            }

            return folder
        })

        API.updateTask(taskID, newText);
        setFolders(newList);
    }

    const contextValue = {
        addFolder,
        removeFolder,
    }


    if (!colors && !folders) {
        return <Preloader/>
    }

    return (

        <Context.Provider value={contextValue}>

            <div className={styles.container}>

                <div className={styles.todo}>
                    <SideBar folders={folders} colors={colors} activeItem={activeItem} setActiveItem={setActiveItem}/>

                    <div className={styles.tasksRow}>
                        <Routes>
                            <Route path='/folders/:id' element={
                                !!activeItem && <Tasks
                                    folder={folders[activeItem - 1]}
                                    onEditFolderName={onEditFolderName}
                                    onAddTask={onAddTask}
                                    onDelete={deleteTask}
                                    onEdit={editTask}
                                />
                            }/>

                            <Route path='/' element={
                                !activeItem && folders.map(folder => <Tasks
                                        key={folder.id}
                                        folder={folder}
                                        onEditFolderName={onEditFolderName}
                                        onAddTask={onAddTask}
                                        onDelete={deleteTask}
                                        onEdit={editTask}
                                    />
                                )
                            }/>
                        </Routes>
                    </div>
                </div>
            </div>

        </Context.Provider>
    )
}

export default TodoListApp;