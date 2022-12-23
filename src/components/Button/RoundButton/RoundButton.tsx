import { MouseEvent, MouseEventHandler, ReactElement, useEffect, useState } from "react";
import * as icons from 'phosphor-react'
import styles from './RoundButton.module.css'

interface RoundBtnProps {
    iconName?: string | ReactElement,
    onClick?: MouseEventHandler<HTMLDivElement>,
    
}

export const RoundBtn = ({ iconName, onClick}: RoundBtnProps) => {
    let PhosphorIcon: any = icons[iconName as keyof typeof icons]
    

    return (
            <div style={{ width: 32, height: 32 }} className={styles.containerButton} onClick={onClick}>
                <PhosphorIcon size='100%' weight='bold' className={styles.propsIcon} />
            </div>
          
    )
}