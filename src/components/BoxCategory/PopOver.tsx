import { RoundBtn } from "../Button/RoundButton/RoundButton"
import styles from './BoxCategory.module.css'
import { TermProperties } from "./Term"

export const PopOver = ({name, description}: { name: string, description: string}) => {
    return (
      <div className={styles.wordsInformation}>
        <div className={styles.headerInformation}>
          <h3 className={styles.h3style}>{name}</h3>
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
        <div className={styles.badge}><p>Non-conformity</p></div>
  
        <p>{description}</p>
        <div className={styles.footer}>
      <p>Definition by</p>
    <p style={{color:'var(--blue400)',fontWeight:500}}>Martha Rodríguez</p>
    </div>
      </div>
    )
  }
  