import { CheckCircle } from 'phosphor-react'
import { useState } from 'react'
import styles from './InputCodeCategory.module.css'

interface InputCodeProps{
onChange?:React.ChangeEventHandler<HTMLInputElement>,
value?:string
}

export const InputCodeCategory = ({onChange}:InputCodeProps) => {
  const [value, setValue] = useState('')
  return (
    <div style={{marginTop:16}}>
    <label className={styles.tittleHeader}>Code</label>
    <div className={styles.container}>
    <input type="text" placeholder="ej. COE228" style={{width:134, border:'none',outline:'none'}} onChange={(e)=> setValue(e.target.value)} value={value.toUpperCase()}/>
    {
      value && value.length ===6 &&
      <div style={{position:'absolute',right:'1.2rem', top:'1.2rem' }}>
      <CheckCircle weight='fill' color='var(--lime600)' size={16}/>
    </div>}
        
    </div>
    </div>
  )
}
