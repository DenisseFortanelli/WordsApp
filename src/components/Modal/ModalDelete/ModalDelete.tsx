import styles from './ModalDelete.module.css'
import BasicBtn from '../../Button/BasicButton/BasicButton';


interface ModalDeleteProps {
	title: string,
	body: string,
	text: string,
}

export const ModalDelete = ({ title, body, text }: ModalDeleteProps) => {
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
					backgroundColor='var(--white)'
					colorText='var(--neutral900)'
					borderColor='var(--neutral300)'
				/>
				<BasicBtn
					size='sm'
					text='Delete'
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