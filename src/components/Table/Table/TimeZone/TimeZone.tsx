import styles from './TimeZone.module.css'
import { TimeZoneProps } from './interface'


const TimeZone = ({ timezone }: TimeZoneProps) => {

    return (

        <div className={styles.containerText}>
            <div className={styles.space}>
                <div className={styles.createBy}>
                    <p className={styles.textCreateBy}>{timezone}</p>
                    {/* <p className={styles.textCreateByPerson}>{zone}</p> */}
                </div>
            </div>
        </div>
    )
}

export default TimeZone

TimeZone.defaultProps = {
    size: 'md'
}