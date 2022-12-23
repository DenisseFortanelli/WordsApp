import React from 'react'
import styles from './CheckBox.module.css'
import { useContext, useEffect, useState } from 'react';
import { User } from '../Table/interface';
import { TableContext } from '../../pages/UsersPage';

interface CheckBoxProps {
	defaultChecked?: boolean,
	onChange: (e: React.ChangeEvent<HTMLInputElement> | undefined) => void
	user?: User
}


export const CheckBox = ({ defaultChecked, onChange, user }: CheckBoxProps) => {

	const { deleteUser } = useContext(TableContext)
	const [isCheked, setIsCheked] = useState(false)

	useEffect(() => {
		if (deleteUser?.id === user?.id) {
			setIsCheked(true)
		} else {
			setIsCheked(false)
		}

		console.log(defaultChecked);

	}, [deleteUser])

	return (

		<input checked={defaultChecked ? defaultChecked : isCheked} className={styles.input} type='checkbox'/*  defaultChecked={defaultChecked} */ onChange={onChange} />
	)
}