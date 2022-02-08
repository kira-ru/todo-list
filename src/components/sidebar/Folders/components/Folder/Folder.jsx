import React, {useContext} from "react";
import classNames from "classnames";
import styles from "./folder.module.css";
import Badge from "../../../../UI/Badge";
import removeIcon from '../../../../../assets/images/remove_icon.svg';
import {useNavigate} from "react-router-dom";
import Context from "../../../../todo-list/context";


const Folder = (props) => {

    const {setActive, name, item, color, active} = props

    const {removeFolder} = useContext(Context);

    let className = classNames(styles.folder, {
        [styles.active]: active
    })

    let navigate = useNavigate();

    function handleClick() {
        setActive();
        navigate(`folders/${item.id}`)
    }

    function onRemove(folderID) {
        if (!window.confirm("Вы действительно хотите удалить папку?")) {return}
        navigate(`/`);
        removeFolder(folderID);
    }

    return (
        <div className={className}>

            <div onClick={handleClick} className={styles.item}>
                <Badge color={color} type={'small'}/>
                <div className={styles.text}>{name}</div>
            </div>


            <div className={styles.removeIcon}>
                <img onClick={() => onRemove(item.id)} src={removeIcon} alt="remove icon"/>
            </div>


        </div>
    )
}


export default Folder;