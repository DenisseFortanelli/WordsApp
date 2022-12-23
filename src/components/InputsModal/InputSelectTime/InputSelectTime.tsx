import React from 'react'
import styles from './InputSelectTime.module.css'


export interface InputsSelectTimeProps {
	textTitle: string,
	size: 'sm' | 'xl',
	defaultValue?: string,
	onChange?: any,
	name?: string,
	value?: string,
	eventHandler?: React.ChangeEventHandler<HTMLSelectElement>
}

export interface TimezoneProps{
    value: InputsSelectTimeProps
}
export const InputSelectTime = ({ textTitle, size, defaultValue, onChange, name, value }: InputsSelectTimeProps) => {
	return (
		<div>
			<p className={`${styles.textTitle}`}>{textTitle}</p>
			<label htmlFor="timezone"></label>
			<select className={`${styles[size]} ${styles.borders} ${styles.contenidoOne}`} id='timezone' value={value} name={name} defaultValue={defaultValue} onChange={onChange}>
				<option className={`${styles.contenido}`} value='others'>Choose...</option>
				<option className={`${styles.contenido}`} value='(GTM+ 05:00) Ekaterinburg/ Chicago, United States'>(GTM+ 05:00) Ekaterinburg/ Chicago, United States</option>
				<option className={`${styles.contenido}`} value='(GTM- 03:00) Greenland/ México, CDMX'>(GTM- 03:00) Greenland/ México, CDMX</option>
				<option className={`${styles.contenido}`} value='(GTM- 01:00) Cape Verde Islands/ Ottawa, Canada'>(GTM- 01:00) Cape Verde Islands/ Ottawa, Canada</option>
				<option className={`${styles.contenido}`} value='(UTC- 03:00) Montevideo/ México, CDMX'>(UTC- 03:00) Montevideo/ México, CDMX</option>
				<option className={`${styles.contenido}`} value='(GMT -05:00) Mexico/ México, CDMX'>(GMT -05:00) Mexico/ México, CDMX</option>
			</select>
		</div>
	)
}