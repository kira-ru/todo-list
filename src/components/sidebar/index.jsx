import React, {useState} from "react";
import styles from './sidebar.module.scss';
import Folders from './Folders/index'
import Add from "./Add";



const SideBar = ({folders, colors}) => {

    return (
        <div className={styles.sidebar}>
            <Folders folders={folders} />
            <Add colors={colors}/>
        </div>
    )
}


export default SideBar;