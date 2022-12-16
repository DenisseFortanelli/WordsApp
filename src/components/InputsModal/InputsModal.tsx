
import styles from './InputsModal.module.css'
import { InputsModalsProps } from './Interface'

export const InputModal = ({ textTitle, size, type, eventHandler, onChange, text, name, value }: InputsModalsProps) => {
	return (
		<div>
			<p className={`${styles.textTitle}`}>{textTitle}</p>
			<div className={`${styles[size]} ${styles.borders}`}>
				<input className={`${styles.contenido}`} type={type} value={value} name={name} onChange={onChange} placeholder={text} />
			</div>
		</div>

	)
}

export default InputModal
InputModal.defaultProps = {
	type: 'text',
	text: 'User@email.com',
	size: 'lg',
	textTitle: 'Email*'
}