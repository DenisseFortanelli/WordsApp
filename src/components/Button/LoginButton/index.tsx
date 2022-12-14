import { useAuth0 } from '@auth0/auth0-react';
import { SignIn, SignOut } from 'phosphor-react';
import styles from './LoginButton.module.css'
import Avatar from '../../Avatar/Avatar';

const LoginButton = () => {
	const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

	return (
		<>
			{
				isAuthenticated ?
					<button type='button' className={styles.dropdown}>
						<div className={styles.imageProfile}>
							<Avatar
								size='lg'
								text={user?.name}
								numberOfCharacters={2}
								imageSrc={user?.picture}
								backgroundColor='var(--orange500)'
							/>
						</div>
						<div className={styles.dropdownContent}>
							<div className={styles.containerText}>
								<SignOut size='1.6rem' color='#737373' className={styles.icon} />
								<p onClick={() => logout()} className={styles.desc}>Log Out</p>
							</div>
						</div>
					</button>
					:
					<button type='button' className={styles.dropdown}>
						<div className={styles.imageProfile}>
							<Avatar
								size='lg'
								imageSrc='https://sxprotection.com.au/wp-content/uploads/2016/07/team-placeholder.png'
							/>
						</div>
						<div className={styles.dropdownContent}>
							<div className={styles.containerText}>
								<SignIn size='1.6rem' color='#737373' className={styles.icon} />
								<div>
									<p onClick={loginWithRedirect} className={styles.desc}>Login</p>
								</div>
							</div>
						</div>
					</button>

			}
		</>
	)
}

export default LoginButton