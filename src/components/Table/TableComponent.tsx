import React, { CSSProperties, ReactElement } from 'react'

import styles from './Table.module.css'

const TableComponent = ({children, style}:{children:ReactElement|ReactElement[], style?:CSSProperties}) => {
    return (
        <table style={style} className={styles.tableColor}>{children}</table>
    )
}

export default TableComponent