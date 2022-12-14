import {PencilSimple} from 'phosphor-react'
import styles from './ButtonEdit.module.css'
import { ButtonEdit } from './Interface'



const ButtonIcon = ({backgroundColor,size, text,onClick}:ButtonEdit) => {
    return (
        <button className={`${styles[size]} ${styles.button}`} style={{backgroundColor:backgroundColor}} onClick={onClick}>
            <div className={styles.containerButton}>
                <div>
                    <PencilSimple size='1.6rem' color="#fff" />
                </div>
                <p className={styles.textButton}>{text}</p>
            </div>
        </button>
    )
}

export default ButtonIcon

ButtonIcon.defaultProps={
    size:'md'
}