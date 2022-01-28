import React from "react";
import classNames from "classnames";
import styles from "./Folder.module.css";
import Badge from "../../UI/Badge";
import removeIcon from '../../../assets/images/remove_icon.svg';


const Folder = ({setActive, name, color, active, icon, isRemovable, removeFolder}) => {
    let className = classNames(styles.folder, {
        [styles.active]: active
    })

    return (
        <div onClick={setActive} className={className}>
            {icon
                ? <img  className={styles.icon} src={icon} alt="icon"/>
                : <Badge color={color} type={'small'}/>}

            <div className={styles.text}>{name}</div>

            {isRemovable
            && <div onClick={removeFolder} className={styles.removeIcon}>
                   <img src={removeIcon} alt="remove icon"/>
                </div>}
        </div>
    )
}


export default Folder;