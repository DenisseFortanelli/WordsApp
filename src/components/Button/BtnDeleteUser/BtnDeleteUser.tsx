import { MouseEventHandler, ReactElement } from "react";
import * as icons from 'phosphor-react'
import styles from './BtnDeleteUser.module.css'

interface BtnDeleteUserProps {
	iconName?: string | ReactElement,
	onClick?: MouseEventHandler<HTMLDivElement>,
	weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
	height?: 0| 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1 | 1.7| 2 | 2.5 |3 | 3.5 | 3.1| 4
    width?: 0| 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1| 1.7 | 2| 2.5 |3 |3.5 |3.1| 4
    padding?: -0.1 |0| 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1 | 2
}

export const BtnDeleteUser = ({ iconName, onClick, width, height, padding, weight }: BtnDeleteUserProps) => {
	let PhosphorIcon: any = icons[iconName as keyof typeof icons]

	return (
		<div style={{ width: 38, height: 38, marginRight:`${padding}rem`, paddingTop:`${padding}rem`}} 
		onClick={onClick} >
		
			<PhosphorIcon size='100%' weight={weight} className={styles.styleIcon}
			style={{ width: `${width}rem`, height: `${height}rem`}}/>
		</div>
	)


}