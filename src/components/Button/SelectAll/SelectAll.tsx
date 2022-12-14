import React, { useEffect } from 'react'
import styles from './SelectAll.module.css'
import { MouseEventHandler, useState, ChangeEvent } from 'react';

interface SelectAllProps {
	onClick?: MouseEventHandler<HTMLDivElement>
	isChecked: (checked:boolean)=>void
}

export const SelectAll = ({onClick, isChecked}:SelectAllProps) => {
	
	const [checkAll, setCheckAll] = useState(false)
	useEffect(() => {
	  isChecked (checkAll)
	}, [checkAll])
	

	return (
		<div className={styles.container} onClick={onClick}>
			<input  className={styles.input} type="checkbox" onChange={(e)=>setCheckAll(e.target.checked)} />
			<p className={styles.text}>Select all</p>
			
		</div>
	)
}