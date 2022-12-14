import { User } from 'phosphor-react'
import React from 'react'
import CircleSkeleton from '../../Skeletons/CircleSkeleton'
import styles from './AvatarUsers.module.css'
import { AvatarUsersProps } from './interface'


const AvatarUsers = ({size, imageSrc, isLoading, backgroundColor, createBy, text, numberOfCharacters,onClick,emailUser}:AvatarUsersProps) => {
    
    return (
        
        <div className={styles.containerText}>
        <div 
            className={`${styles[size]} ${styles.container}`}
            style={{backgroundColor:imageSrc?'transparent':backgroundColor}}
            onClick={onClick}
        >
            {imageSrc&&
                !isLoading?
                <img src={imageSrc} alt='avatar'/>:
                isLoading?<CircleSkeleton/>:
                <p>{text?.slice(0,numberOfCharacters?numberOfCharacters:2).toUpperCase()}</p>
            }
        </div>
        <div className={styles.space}>
        <div className={styles.createBy}>
        <p className={styles.textCreateBy}>{createBy}</p>
        <p className={styles.textCreateByPerson}>{emailUser}</p>
        </div>
        </div>
        </div>
    )
}

export default AvatarUsers

AvatarUsers.defaultProps={
    size:'md'
}