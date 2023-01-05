import {PencilSimple} from 'phosphor-react'
import styles from './BasicButton.module.css'
import { BasicButton } from './Interface'



const BasicBtn = ({type,backgroundColor,size, text, colorText, onClick, borderColor, fontWeight}:BasicButton) => {
    return (
        <button type={type} className={`${styles[size]} ${styles.button}`} style={{backgroundColor:backgroundColor,color:colorText,borderColor: borderColor}} onClick={onClick}>
            <div className={styles.containerButton}>
                <p className={styles.textButton} style={{fontWeight:fontWeight}}>{text}</p>
            </div>
        </button>
    )
}

export default BasicBtn

BasicBtn.defaultProps={
    size:'md'
}