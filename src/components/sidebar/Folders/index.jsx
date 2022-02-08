import React, {useContext, useState} from "react";
import Folder from "./components/Folder/Folder";
import icon from '../../../assets/images/Vector.svg'
import styles from "./components/Folder/folder.module.css";
import AllFolders from "./components/Folder/AllFolders";


const Folders = ({folders, activeItem, setActiveItem}) => {

    return (
        <div className={styles.folders}>

            <AllFolders
                setActive={() => setActiveItem(0)}
                active={activeItem === 0}
                icon={icon}
            />

            {folders && folders.map((item) => <Folder
                    setActive={() => setActiveItem(item.id)}
                    key={item.id}
                    item={item}
                    name={item.name}
                    color={item.color.name}
                    active={activeItem === item.id}
                />
            )}
        </div>
    )
}


export default Folders;