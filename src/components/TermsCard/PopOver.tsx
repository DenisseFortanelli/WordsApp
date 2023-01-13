import React from 'react'
import { ItemsProps } from '../../pages/WordsPage'
import { RoundBtn } from '../Button/RoundButton/RoundButton'
import styles from './TermsCard.module.css'


export const PopOver = ({ item }: { item: ItemsProps }) => {
  return (
    <div className={styles.wordsInformation}>
      <div className={styles.headerInformation}>
        <h3 className={styles.h3style}>{item.text}</h3>
        <div className={styles.icons}>
          <RoundBtn
            iconName="PencilSimple"
            weight="regular"
            height={2}
            width={2}
            padding={0.6}
          />
          <RoundBtn
            iconName="Trash"
            weight="regular"
            height={2}
            width={2}
            padding={0.6}
          />
        </div>
      </div>
      <div className={styles.badge}><p>{item.category}</p></div>

      <p>{item.description}</p>
      <div className={styles.footer}>
      <p>Definition by</p>
    <p style={{color:'var(--blue400)',fontWeight:500}}>{item.user}</p>
    </div>
    </div>
  )
}
