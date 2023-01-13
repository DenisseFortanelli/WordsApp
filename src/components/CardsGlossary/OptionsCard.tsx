import React from 'react'
import styles from "./CardsGlossary.module.css";

interface OptionCardProps{
  id?:string
}

export const OptionsCard = ({id}:OptionCardProps) => {
  return (
    <div className={styles.containerPopOver}>
    <div className={styles.containerOptions}>
        <div className={styles.option}><button>Edit</button></div>
        <div className={styles.option}><button>Delete</button></div>
    </div>
    </div>
  )
}
