import React from 'react'
import styles from './InputSelectTime.module.css'
import { useState } from 'react';
import { Styles } from '../../../interface/index';

export interface InputsSelectTimeProps {
	textTitle: string,
	size: 'sm' | 'xl',
	defaultValue?: string,
	onChange?: any,
	name?: string,
	value?: string,
	eventHandler?: React.ChangeEventHandler<HTMLSelectElement>,
	placeholder?: string,
	onBlur?: React.FocusEventHandler<HTMLSelectElement> | undefined,
	errorMsg?: string,
	hasError?: boolean,
}

export interface TimezoneProps{
    value: InputsSelectTimeProps
}
export const InputSelectTime = ({ textTitle, size, defaultValue, onChange, name, value, placeholder, onBlur, hasError, errorMsg }: InputsSelectTimeProps) => {
	const [focus, setFocus] = useState()
	return (
		<div style={{height:'8.7rem'}}>
			<label htmlFor="timezone" className={`${styles.textTitle}`} 
			style={{ color: hasError ? 'red' : 'var(--neutral800)' }}>
				{textTitle}</label>
			<select className={`}
				${styles[size]} 
				${hasError && styles.emailError} 
				${hasError ? styles.errorCont : styles.contenido}
				${styles.borders} 
				${styles.contenidoOne}`} id='timezone' 
			value={value} 
			name={name} 
			defaultValue={defaultValue} 
			onChange={onChange}
			style={{ color: value === placeholder ? 'var(--gray400)' : value ? 'var(--gray800)' : 'var(--gray400)' }}
			onBlur={onBlur}>
				<option className={`${styles.contenidoTwo}`} value={placeholder}>{placeholder}</option>
				<option className={`${styles.contenido}`} value='(GTM+05:00) Ekaterinburg / Chicago, United States'>(GTM+05:00) Ekaterinburg / Chicago, United States</option>
				<option className={`${styles.contenido}`} value='(GTM-03:00) Greenland / México, CDMX'>(GTM-03:00) Greenland / México, CDMX</option>
				<option className={`${styles.contenido}`} value='(GTM-01:00) Cape Verde Islands / Ottawa, Canada'>(GTM-01:00) Cape Verde Islands / Ottawa, Canada</option>
				<option className={`${styles.contenido}`} value='(UTC-03:00) Montevideo / México, CDMX'>(UTC-03:00) Montevideo / México, CDMX</option>
				<option className={`${styles.contenido}`} value='(GMT-05:00) Mexico / México, CDMX'>(GMT-05:00) Mexico / México, CDMX</option>
			</select>
			<span>{errorMsg}</span>
		</div>
	)
}