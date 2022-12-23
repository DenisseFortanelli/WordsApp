import styles from './ModalDelete.module.css'
import BasicBtn from '../../Button/BasicButton/BasicButton';
import { ChangeEvent, useContext, useState } from 'react';
import { deleteUserData } from '../../../hooks/useUsers';
import  { ModalContext } from '../index'
import { IUser } from '../../../interface/FetchAllUserResponse';

interface ModalDeleteProps {
	title?: string,
	body?: string,
	text?: string,
}

export const ModalDelete = ({ title, body, text }: ModalDeleteProps) => {

	const initialValue = {
		auth0_id: '',
		birthday: '',
		email:    '',
		id:       '',
		/* image:    Image;*/
		is_admin: true,
		language: '',
		lastname: '',
		middlename:'',
		name:     '',
		phone:    '',
		timezone:  '',
	  }
	  const [user, setUser] = useState<IUser>(initialValue)
	  const { setIsOpenModal } = useContext(ModalContext)
  
	  const { mutate } = deleteUserData()
	  
	  function handleChange(e: ChangeEvent<HTMLInputElement>) {
		  setUser(
			  { ...user, [e.target.id]: e.target.value }
		  )
	  }
	  function handleSubmit() {
		  mutate(user)
		  setUser(initialValue)
		  setIsOpenModal(false)
	  }	
	return (
		<div className={styles.content}>
			<div className={styles.border}>
				<h4 className={styles.titleH4}>{title}</h4>
				<p className={styles.textoContent}>{body}</p>
			</div>

			<div className={styles.linea} />
			<div className={styles.border2}>

				<BasicBtn
				
					size='sm'
					text='Cancel'
					fontWeight={700}
					onClick={()=>setIsOpenModal(false)}
					backgroundColor='var(--white)'
					colorText='var(--neutral900)'
					borderColor='var(--neutral300)'
				/>
				<BasicBtn
					size='sm'
					text='Delete'
					onClick={handleSubmit}
					fontWeight={700}
					backgroundColor='var(--red400)'
					borderColor='var(--red400)'
					colorText='var(--white)'
				/>


			</div>
		</div>
	)
}

export default ModalDelete
ModalDelete.defaultProps = {
	title: 'Delete Users',
	body: 'The users you selected will be permanently deleted, do you want to continue?'
}