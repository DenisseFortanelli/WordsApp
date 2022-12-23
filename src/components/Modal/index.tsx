import React from 'react'
import styles from './Modal.module.css'
import { useState, useEffect, createContext } from 'react';
import { ModalProps } from './Interface';

interface ModalContextProps {
	setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalContext = createContext({} as ModalContextProps)
const { Provider } = ModalContext

export const Modal = ({ children, isOpen, callback, setIsOpen }: ModalProps) => {

	const [isOpenModal, setIsOpenModal] = useState<boolean>(false)

	const handleClick = (e: MouseEvent) => {
		const { id } = e.target as HTMLDivElement
		if (setIsOpen && id === 'overlayModal') return setIsOpen(false)
	}

	useEffect(() => {
		setIsOpenModal(isOpen)
	}, [isOpen])

	useEffect(() => {
		callback && callback(isOpenModal)
	}, [isOpenModal])

	useEffect(() => {
		document.addEventListener('click', handleClick)
		return () => document.removeEventListener('click', handleClick)
	}, [])

	return (
		<Provider value={{ setIsOpenModal }}>
			<div
				style={{ display: isOpenModal ? 'block' : 'none' }}
				className={styles.modalContainer}
			>
				<div id='overlayModal' className={styles.containerCard}>
					{children}
				</div>
			</div>
		</Provider>
	)
}

export default Modal