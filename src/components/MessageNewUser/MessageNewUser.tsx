import { ThumbsUp } from 'phosphor-react'
import { MouseEventHandler, useState } from 'react'
import styles from './MessageNewUser.module.css'

interface Props{
    onClick?:MouseEventHandler<HTMLButtonElement>,
}


export const MessageNewUser = ({onClick }:Props) => {

	return (
        
            <div className={styles.containerMessage} >
            <div className={styles.containerTxt}>
                <ThumbsUp size={24} style={{color:'white'}}/>
                <p className={styles.styleFont}>Great! You've created new user</p>
               
            </div>
            <button className={styles.buttonOK} onClick={onClick} style={{background:'none', border: 'none'}}>
                   <p className={styles.OK}>OK</p> 
            </button>
            
            
		</div>
       
	)
}