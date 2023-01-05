import styles from './InputSelectIdiom.module.css'
import { ChangeEventHandler, useState } from 'react';

export interface InputsSelectIdiomProps {
	textTitle: string,
	size: 'sm' | 'xl',
	defaultValue?: string,
	onChange?: any,
	name?: string,
	value?: string,
	eventHandler?: ChangeEventHandler<HTMLSelectElement>,
	placeholder?: string,
	onBlur?: React.FocusEventHandler<HTMLSelectElement> | undefined,
	errorMsg?: string,
	hasError?: boolean,
}

export const InputSelectIdiom = ({ textTitle, size, defaultValue, onChange,
	name, value, placeholder, onBlur, hasError, errorMsg }: InputsSelectIdiomProps) => {
	return (
		<div>
			<label htmlFor="idiom"
				className={`${styles.textTitle}`}>{textTitle}</label>
			<select
				className={`
				${styles[size]} 
				${hasError && styles.emailError} 
				${hasError ? styles.errorCont : styles.contenido}
				${styles.borders} 
				${styles.contenidoOne}`}
				id='idiom'
				value={value}
				name={name}
				defaultValue={defaultValue}
				onChange={onChange}
				style={{
					color: value === placeholder ? 'var(--gray400)' : value ? 'var(--gray800)' : 'var(--gray400)'
				}}
				onBlur={onBlur} >

				<option className={`${styles.contenido}`} value={placeholder}> {placeholder} </option>
				<option className={`${styles.contenido}`} value='Spanish'>Spanish</option>
				<option className={`${styles.contenido}`} value='English'>English</option>
			</select>
			<span>{errorMsg}</span>
		</div>
	)




}