import React, { CSSProperties, ReactElement, ReactNode } from 'react'
import styles from './Table.module.css'
const Td = ({children, style}:{children:ReactNode|ReactNode[], style?:CSSProperties}) => {
    return (
        <td style={style} className={styles.rowBody}>{children}</td>
    )
}

export default Td