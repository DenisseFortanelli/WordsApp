import {PencilSimple} from 'phosphor-react'
import styles from './CountWords.module.css'
import { CounterWordsProps } from './interface'



const CounterWords = ({number, onClick}:CounterWordsProps) => {
    return (
        <button className={styles.button} onClick={onClick}>
            <div className={styles.containerButton}>
                <p>{number}</p>
                <p className={styles.textButton}>Words</p>
            </div>
        </button>
    )
}

export default CounterWords

