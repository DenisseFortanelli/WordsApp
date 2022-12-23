import { User } from 'phosphor-react'
import React from 'react'
import styles from './TimeZone.module.css'
import { TimeZoneProps } from './interface'


const TimeZone = ({time}:TimeZoneProps) => {
    
    const resp = time?.split('/')
    
    return (
        
        <div className={styles.containerText}>
        <div className={styles.space}>
        <div className={styles.createBy}>
        <p className={styles.textCreateBy}>{resp[0]}</p>
        <p className={styles.textCreateByPerson}>{resp[1]}</p>
        </div>
        </div>
        </div>
    )
}

export default TimeZone

TimeZone.defaultProps={
    size:'md'
}