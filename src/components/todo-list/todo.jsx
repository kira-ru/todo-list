import React, {useEffect, useState} from "react";
import styles from './todo.module.scss';
import Context from "./context";
import SideBar from "../sidebar";
import Tasks from "../tasks";
import API from '../../DAL/index';

const TodoListApp = (props) => {
    const [folders, setFolders] = useState([
        {
            "id": 1,
            "name": "Продажи",
            "colorId": 5
        },
        {
            "id": 2,
            "name": "Фронтенд",
            "colorId": 4
        },
        {
            "id": 3,
            "name": "Фильмы и сериалы",
            "colorId": 3
        },
        {
            "id": 4,
            "name": "Книги",
            "colorId": 2
        },
        {
            "id": 5,
            "name": "Личное",
            "colorId": 1
        },
        {
            "id": 6,
            "name": "Спорт",
            "colorId": 3,

        },
        {
            "id": 7,
            "name": "Курс по ReactJS ToDo",
            "colorId": 7,
        }
    ]);

    const [colors, setColors] = useState([
        {
            "id": 1,
            "hex": "#C9D1D3",
            "name": "grey"
        },
        {
            "id": 2,
            "hex": "#42B883",
            "name": "green"
        },
        {
            "id": 3,
            "hex": "#64C4ED",
            "name": "blue"
        },
        {
            "id": 4,
            "hex": "#FFBBCC",
            "name": "pink"
        },
        {
            "id": 5,
            "hex": "#B6E6BD",
            "name": "lime"
        },
        {
            "id": 6,
            "hex": "#C355F5",
            "name": "purple"
        },
        {
            "id": 7,
            "hex": "#110133",
            "name": "black"
        },
        {
            "id": 8,
            "hex": "#FF6464",
            "name": "red"
        }]);

    const getInitState = async () => {
        let folders = await API.getFolder();
        setFolders(folders);

        let colors = await API.getColors();
        setColors(colors);
    }

    useEffect(() => {
        getInitState();
        debugger;
    }, [])

    const addFolder = (id, name, colorId) => {
        setFolders([...folders, {id, name, colorId}])
    }

    const removeFolder = (folderId) => {
        setFolders(folders.filter(folder => folder.id !== folderId));
    }


    const foldersWithColor = () => {
        folders.map(item => {
            item.color = colors.find(color => color.id === item.colorId).name;
        })
        return folders;
    }

    const contextValue = {
        addFolder,
        removeFolder,
    }

    return (
        <Context.Provider value={contextValue}>

            <div className={styles.todo}>
                <SideBar folders={foldersWithColor()} colors={colors}/>
                <Tasks/>
            </div>

        </Context.Provider>
    )
}

export default TodoListApp;