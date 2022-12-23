import { ReactNode, Dispatch, SetStateAction } from 'react';

export interface ModalProps {
	children: ReactNode | JSX.Element[],
	isOpen: boolean,
	setIsOpen?: Dispatch<SetStateAction<boolean>>,
	callback?: (isOpen: boolean) => void
}