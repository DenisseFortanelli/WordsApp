import { MouseEvent, MouseEventHandler, ReactElement } from "react";
import * as icons from 'phosphor-react'
import styles from './CircleIconButton.module.css'

interface CircleIconButtonProps{
    iconName?: string | ReactElement,
    onClick?:MouseEventHandler<HTMLDivElement>,
}

export const CircleIcon = ({ iconName , onClick}: CircleIconButtonProps) => {
    let PhosphorIcon: any = icons[iconName as keyof typeof icons]

	return (
		<div role='button' onClick={onClick} style={{ width: 32, height: 32 }}  className={styles.containerButton}>
            
            <PhosphorIcon size='100%' weight='duotone' className={styles.propsIcon}/>
            
		</div>
	)
}