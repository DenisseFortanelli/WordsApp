import { useState } from 'react'
import styles from './InputDescriptionCategory.module.css'


interface InputProps{
  characterLimit?:number
} 

export const InputDescriptionCategory = ({characterLimit}:InputProps) => {
  const [value, setValue] = useState('')

  return (
    <div style={{marginTop:16}}>
    <div className={styles.header}>
    <label className={styles.tittleHeader}>Description</label>
    { characterLimit &&<p style={{color: value.length >= characterLimit? 'red': '#737373'}}>{value.length}/{characterLimit}</p>}
    </div>
    <div className={styles.container} style={{borderColor: characterLimit && value.length >= characterLimit? 'red': ''}}>
    <textarea name="textarea" className={styles.textarea} placeholder={'Description...'} onChange={(e)=> setValue(e.target.value)}></textarea>
    </div>
    </div>
  )
}
