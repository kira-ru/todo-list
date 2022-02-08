import styles from './PopUp.module.css'
import React, {useContext, useState} from "react";
import Input from "../../../../UI/Input";
import Button from "../../../../UI/Button";
import close from '../../../../../assets/images/close.svg';
import Colors from "./Colors";
import Context from "../../../../todo-list/context";


const PopUp = ({colors, toggle}) => {
    const [inputValue, setInputValue] = useState('');
    const [activeColor, setActiveColor] = useState(1);
    const {addFolder} = useContext(Context);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const onAdd = () => {

        if (!inputValue) {
            alert('Введите название папки');
            return;
        }

        let colorObj = colors.find(color => color.id === activeColor);
        addFolder(inputValue, activeColor, colorObj);
        toggle();
    }

    return (
        <div className={styles.popUp}>

            <div onClick={toggle} className={styles.close}>
                <img src={close} alt="Закрыть"/>
            </div>

            <Input placeHolder={'Название папки'} handleChange={handleChange}/>
            <Colors colors={colors} setColor={setActiveColor} activeColor={activeColor}/>
            <Button  handleClick={onAdd} text={'Сохранить'}/>
        </div>
    )
}


export default PopUp;