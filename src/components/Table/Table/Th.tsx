import React, { CSSProperties, ReactElement } from 'react'
import styles from './Table.module.css'

const Th = ({children, style}:{children:ReactElement|ReactElement[], style?:CSSProperties}) => {
    return (
        <th style={style} className={styles.spaceHeader}>{children}</th>
    )
}

export default Th