import { ReactNode } from 'react';

export interface ModalProps {
	children: ReactNode | JSX.Element[],
	isOpen: boolean,
	callback?: (isOpen: boolean) => void
}