import { User } from 'phosphor-react'
import React from 'react'
import styles from './TimeZone.module.css'
import { TimeZoneProps } from './interface'


const TimeZone = ({time, zone}:TimeZoneProps) => {
    
    return (
        
        <div className={styles.containerText}>
        <div className={styles.space}>
        <div className={styles.createBy}>
        <p className={styles.textCreateBy}>{time}</p>
        <p className={styles.textCreateByPerson}>{zone}</p>
        </div>
        </div>
        </div>
    )
}

export default TimeZone

TimeZone.defaultProps={
    size:'md'
}