import React, {useContext, useState} from "react";
import Folder from "./Folder";
import icon from '../../../assets/images/Vector.svg'
import styles from "./Folder.module.css";
import Context from "../../todo-list/context";


const Folders = ({folders}) => {
    const [activeItem, setActiveItem] = useState(999);
    const {removeFolder} = useContext(Context);

    return (
        <div className={styles.folders}>
            {/* Папка "все задачи*/}
            <Folder
                setActive={() => setActiveItem(999)}
                key={999}
                name={"Все задачи"}
                icon={icon}
                active={activeItem === 999}
            />

            {/* Остальные папки */}
            {folders.map((item, index) => <Folder
                    setActive={() => setActiveItem(index)}
                    key={index}
                    name={item.name}
                    color={item.color}
                    active={activeItem === index}
                    isRemovable={true}
                    removeFolder={() => removeFolder(item.id)}
                />
            )}
        </div>
    )
}


export default Folders;