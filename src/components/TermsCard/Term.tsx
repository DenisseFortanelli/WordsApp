import React, { useState } from 'react'
import { ItemsProps } from '../../pages/WordsPage'
import { PopOver } from './PopOver'
import styles from './TermsCard.module.css'

export const Term = ({item}: {item: ItemsProps}) => {
    const [openPopOver, setOpenPopOver] = useState<boolean>(false)
  return (
    <div className={styles.containerTerm} onMouseUp={()=>setOpenPopOver(true)} onMouseLeave={()=>setOpenPopOver(false)}>
    <p>{item.text}</p>
    {
        openPopOver&&
        <div className={styles.containerPopOver}>
        <PopOver item={item}/>
        </div>
    }
    </div>


  )
}
