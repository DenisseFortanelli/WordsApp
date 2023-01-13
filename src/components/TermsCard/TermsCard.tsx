import React, { RefObject, useState } from 'react'
import { Term } from './Term'
import styles from './TermsCard.module.css'
import { v4 } from 'uuid'
import { ItemsProps } from '../../pages/WordsPage'

interface TermsCardProps {
  header: string,
  terms: ItemsProps[],
  active: boolean
}

export const TermsCard = React.forwardRef(({ header, terms, active }: TermsCardProps, ref: any) => {
  const [selectedItems, setSelectedItems] = useState<ItemsProps[]>(terms)
  return (
    <div className={styles.containerCard} id={header} ref={ref}>
      <h2 className={styles.h2style} style={{ color: active ? 'var(--orange600)' : 'black' }}>{header}</h2>
      <div className={styles.containerGrid}>
        {selectedItems.map((item) => <Term key={v4()} item={item} />)}
      </div>
    </div>
  )
})
