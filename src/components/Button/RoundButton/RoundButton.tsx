import { MouseEventHandler, ReactElement } from "react"
import * as icons from 'phosphor-react'
import styles from './RoundButton.module.css'

interface RoundBtnProps {
    iconName?: string | ReactElement,
    onClick?: MouseEventHandler<HTMLDivElement>
    weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone'
    height?: 0| 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1 | 2 | 2.5 |3 | 3.5 | 3| 4
    width?: 0| 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1| 2| 2.5 |3 |3.5 |3| 4
    padding?: -0.1 |0| 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1
}

export const RoundBtn = ({ iconName, onClick, weight, width, height, padding}: RoundBtnProps) => {
    let PhosphorIcon: any = icons[iconName as keyof typeof icons]
    

    return (
            <div className={styles.containerButton} onClick={onClick} style={{padding:`${padding}rem`}} >

                <PhosphorIcon weight={weight} className={styles.propsIcon} style={{ width: `${width}rem`, height: `${height}rem`}} />

            </div>
          
    )
}