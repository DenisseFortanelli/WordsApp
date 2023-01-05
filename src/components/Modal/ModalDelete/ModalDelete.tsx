import styles from './ModalDelete.module.css'
import BasicBtn from '../../Button/BasicButton/BasicButton';
import { useContext, useState } from 'react';
import { deleteUserData } from '../../../hooks/useUsers';
import { User } from '../../Table/interface';
import { IUser } from '../../../interface/FetchAllUserResponse';
import { ModalContext } from '../index';


interface ModalDeleteProps {
	title?: string,
	body?: string,
	user: IUser | undefined
}

export const ModalDelete = ({ title, body, user: originalname }: ModalDeleteProps) => {


	const [user, setUser] = useState<IUser>(originalname ?? {} as IUser)
	const { setIsOpenModal } = useContext(ModalContext)

	const { mutate } = deleteUserData()

	function handleSubmit() {
		mutate(originalname ?? {} as IUser)
		console.log(originalname);
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
					onClick={() => setIsOpenModal(false)}
					size='sm'
					text='Cancel'
					fontWeight={700}
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