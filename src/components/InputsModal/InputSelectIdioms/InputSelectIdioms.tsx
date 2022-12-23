import styles from './InputSelectIdiom.module.css'
import { ChangeEventHandler } from 'react';

export interface InputsSelectIdiomProps {
	textTitle: string,
	size: 'sm' | 'xl',
	defaultValue?: string,
	onChange?: any,
	name?: string,
	value?: string,
	eventHandler?: ChangeEventHandler<HTMLSelectElement>
}
export const InputSelectIdiom = ({ textTitle, size, defaultValue, onChange, name, value }: InputsSelectIdiomProps) => {
	return (
		<div>
			<p className={`${styles.textTitle}`}>{textTitle}</p>
			<label htmlFor="idiom"></label>
			<select className={`${styles[size]} ${styles.borders} ${styles.contenidoOne}`} id='idiom' value={value} name={name} defaultValue={defaultValue} onChange={onChange}>
				<option className={`${styles.contenido}`} value='others'>Choose...</option>
				<option className={`${styles.contenido}`} value='Spanish'>Spanish</option>
				<option className={`${styles.contenido}`} value='English'>English</option>
			</select>
		</div>
	)
}