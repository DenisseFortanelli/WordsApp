import { ThumbsUp } from 'phosphor-react'
import { MouseEventHandler, useState } from 'react'
import styles from './MessageNewUser.module.css'

interface Props {
    onClick?: MouseEventHandler<HTMLButtonElement>,
    message?: string
}


export const MessageNewUser = ({ onClick, message }: Props) => {

    return (
        <div style={{position: 'fixed', left: '3.6rem', bottom: '1.8rem'}}>
            <div className={styles.containerMessage} >
                <div className={styles.containerTxt}>
                    <ThumbsUp size={24} style={{ color: 'white' }} />
                    <p className={styles.styleFont}>{message}</p>
                </div>
                <button className={styles.buttonOK} onClick={onClick} style={{ background: 'none', border: 'none' }}>
                    <p className={styles.OK}>OK</p>
                </button>
            </div>
        </div>


    )
}