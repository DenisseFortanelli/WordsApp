import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { User } from 'phosphor-react';
import styles from './ProfileHome.module.css'

const ProfileHome = () => {
  const { user, isAuthenticated,} = useAuth0();
  return (
    <>
    {
      isAuthenticated ?
      <img src={user?.picture} className={styles.imageProfile}/>
  : 
      <User size={32} className={styles.user}/>
     
    }
    </>
  )
}

export default ProfileHome