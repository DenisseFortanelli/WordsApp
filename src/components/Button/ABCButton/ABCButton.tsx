import { MouseEvent, MouseEventHandler, ReactElement } from "react";
import styles from './ABCButton.module.css'

interface ABCButtonProps{
    letter?:string,
    onClick?:MouseEventHandler<HTMLDivElement>,
	active?:boolean,
	disable?:boolean
}

export const ABCButton = ({ letter, onClick, active, disable}: ABCButtonProps) => {

	return (
		<div onClick={onClick} style={{ width: 32, height: 32, background: active? 'var(--orange600)':'none', color: active? 'white':'var(--neutral500)'}}  className={styles.containerButton}>
           <p className={styles.orange}>{letter?.toUpperCase()}</p>
		</div>
	)
}