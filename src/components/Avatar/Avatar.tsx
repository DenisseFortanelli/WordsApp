import { User } from 'phosphor-react'
import React from 'react'
import CircleSkeleton from '../../Skeletons/CircleSkeleton'
import styles from './Avatar.module.css'
import { AvatarProps } from './interface'


const Avatar = ({size, imageSrc, isLoading, backgroundColor, createBy, text, numberOfCharacters,onClick,textName}:AvatarProps) => {
    
    return (
        
        <div role='avatar' className={styles.containerText}>
        <div 
            role='clickAvatar'
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
        <p role='paragraph1' className={styles.textCreateBy}>{createBy}</p>
        <p role='paragraph2' className={styles.textCreateByPerson}>{textName}</p>
        </div>
        </div>
        </div>
    )
}

export default Avatar

Avatar.defaultProps={
    size:'md'
}