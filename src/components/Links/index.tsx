import { Link, useLocation } from 'react-router-dom'
import styles from './Links.module.css'
import { useEffect, useState, ReactNode } from 'react';

const Links = () => {

   const { pathname } = useLocation()
   console.log(pathname);

   return (
      <div className={styles.containerLinks}>
         <ContainerLink
            textLink='Home'
            pathname='/'
            currentPath={pathname}
         />
         <ContainerLink
            textLink='User'
            pathname='/users'
            currentPath={pathname}
         />
         <ContainerLink
            textLink='Glossary'
            pathname='/words'
            currentPath={pathname}
         />
         <ContainerLink
            textLink='Logs'
            pathname='/logs'
            currentPath={pathname}
         />
      </div>
   )
}

export default Links

const ContainerLink = ({ currentPath, pathname, textLink }: { currentPath: string, pathname: string, textLink: string }) => {
   const [path, setCurrentPath] = useState('')

   useEffect(() => {
      setCurrentPath(currentPath)
   }, [currentPath])

   return <div className={styles.containerTitle} style={{ borderBottom: path === pathname ? '4px solid var(--celeste600)' : 'none' }}>
      <Link className={styles.link} style={{ color: path === pathname ? 'var(--celeste600)' : 'var(--neutral400)' }} to={pathname}>{textLink}</Link>
   </div >
}