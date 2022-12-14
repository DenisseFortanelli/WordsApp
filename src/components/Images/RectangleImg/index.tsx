import styles from "./RectangleImg.module.css";
import Avatar from '../../Avatar'
import { useAuth0 } from '@auth0/auth0-react';

const ImageRectangle = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        <>
            <div className={styles.containerHeader}>
                <img src="https://media-exp1.licdn.com/dms/image/C5616AQHRqt9MQ6Ymrw/profile-displaybackgroundimage-shrink_350_1400/0/1649781235841?e=1673481600&v=beta&t=iSVI-z5pojQUER90g0YrqKBb3ODsm5gNb5IFOyIMsCQ" alt="img-top" className={styles.topImg} />
                <div className={styles.containerAvatar}>
                {
                    isAuthenticated ?
                   
                        <Avatar
                            size='xl'
                            text='Juan'
                            numberOfCharacters={2}
                            imageSrc={user?.picture}
                            backgroundColor='var(--orange500)'
                        />
                        
                        :
                        <Avatar
                            size='xl'
                            text='Juan'
                            numberOfCharacters={2}
                            imageSrc='https://sxprotection.com.au/wp-content/uploads/2016/07/team-placeholder.png'
                            backgroundColor='var(--orange500)'
                        />
                }
            </div>
            </div>
            
        </>
    )
}

export default ImageRectangle