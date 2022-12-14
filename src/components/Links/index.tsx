import { Link } from 'react-router-dom'
import styles from './Links.module.css'

const Links = () => {
  return (
    <div className={styles.containerLinks}>
        <div className={styles.containerTitle}>
           <Link className={styles.link} to="/">Home</Link>
        </div>
        <div className={styles.containerTitle}>
           <Link className={styles.link} to="/users">Users</Link>
        </div>
        <div className={styles.containerTitle}>
           <Link className={styles.link} to="">Glossary</Link>
        </div>
        <div className={styles.containerTitle}>
           <Link className={styles.link} to="">Log</Link>
        </div>
    </div>
  )
}

export default Links