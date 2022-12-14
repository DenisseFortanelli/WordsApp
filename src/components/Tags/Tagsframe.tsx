import { EnvelopeSimple, Flag} from 'phosphor-react';
import styles from './Tagsframe.module.css'
import { Icon } from '../Iconography/Icon';
import { MX } from '../Iconography/Flags';
import { Tagsframe } from './interface/Index';


const Tags = ({backgroundColor,size, text, icon}:Tagsframe) => {
    
     
    return (
        <div className={`${styles[size]} ${styles.container}`}>
      
        { icon ? <Icon  size='1.8rem' color='var(--neutral500)'  iconName={icon}/> :
        <Icon  size='1.8rem' color='var(--neutral500)'  customIcon={<MX />}/> } 
        <p className={styles.textStyle} style={{color:backgroundColor}}>{text}</p>
        </div>
        
    )
}

export default Tags