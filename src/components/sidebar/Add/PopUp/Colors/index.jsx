import styles from './Colors.module.css';

import React from "react";
import Badge from "../../../../UI/Badge";


const Colors = ({colors, activeColor, setColor}) => {
    return (
        <div className={styles.colors}>

            {colors.map((color) =>
                <Badge
                    setColor={() => setColor(color.id)}
                    key={color.id}
                    color={color.name}
                    type={'big'}
                    active={activeColor === color.id}
                />
            )}

        </div>
    )
}


export default Colors;