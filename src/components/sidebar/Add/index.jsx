import styles from "./addButton.module.scss";
import addImg from "../../../assets/images/add.svg";
import React, {useState} from "react";
import PopUp from "./components/PopUp";


const Add = ({colors}) => {
    const [isVisible, setIsVisible] = useState(false);

    const togglePopUp = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div className={styles.container}>

            <div onClick={togglePopUp} className={`${styles.addButton}`}>
                <img className={styles.icon} src={addImg} alt="icon"/>
                <span className={styles.text}>Добавить папку</span>
            </div>

            { isVisible && <PopUp colors={colors} toggle={togglePopUp}/>}
        </div>
    )
}


export default Add;