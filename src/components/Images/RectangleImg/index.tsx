import styles from "./RectangleImg.module.css";
import Avatar from '../../Avatar'
import { useAuth0 } from '@auth0/auth0-react';

const ImageRectangle = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        <>
            <div className={styles.containerHeader}>
                <img role='banner' src="https://res.cloudinary.com/dqlk17aue/image/upload/v1668787204/Rectangle_1626_syokab.png" alt="BannerImage" className={styles.topImg} />
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