import React, {useState} from "react";
import styles from './sidebar.module.scss';
import Folders from './Folders/index'
import Add from "./Add";



const SideBar = (props) => {
    const {colors, folders, ...other} = props

    return (
        <div className={styles.sidebar}>
            <Folders folders={folders} {...other}/>
            <Add colors={colors}/>
        </div>
    )
}


export default SideBar;