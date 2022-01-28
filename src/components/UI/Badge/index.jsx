import React from "react";
import styles from './Badge.module.css';
import cn from 'classnames';

const  Badge = ({color, type, setColor, active}) => {

    const className = cn(styles.badge, styles[color], {
        [styles[`badge-${type}`]] : type === 'small',
        [styles[`badge-${type}`]] : type === 'big',
        [styles.active] : active,
    })

    return (
        <div className={styles.container}>
            <div onClick={setColor} className={className}></div>
        </div>
    )
}


export default Badge;