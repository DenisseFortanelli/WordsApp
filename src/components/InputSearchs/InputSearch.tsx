import { Icon } from '../Iconography/Icon';
import styles from './InputSearch.module.css'
import { InputSearchs } from './Interface/Index';


export const InputSearch = ({ value, onChange, size, type, text, icon, background }: InputSearchs) => {
  return (
    <div className={`${styles[size]} ${styles.borders}`} style={{ background: background }} >
      <Icon color='var(--gray500)' iconName={icon} size='1.6rem' />
      <input
        className={`${styles.contenido}`}
        style={{ background: background }}
        type={type} 
        onChange={onChange}
        placeholder={text}
        value={value}
      />
    </div>
  )
}