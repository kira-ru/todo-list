import React from "react";
import classNames from "classnames";
import styles from "./folder.module.css";
import {useNavigate} from "react-router-dom";


const AllFolders = (props) => {
    const {setActive, active, icon} = props

    let navigate = useNavigate();

    let className = classNames(styles.folder, {
        [styles.active]: active
    })

    function handleClick() {
        setActive();
        navigate('/')
    }

    return (
        <div className={className}>
            <div onClick={handleClick} className={styles.item}>
                <img className={styles.icon} src={icon} alt="icon"/>
                <div className={styles.text}>Все задачи</div>
            </div>
        </div>
    )
}

export default AllFolders;