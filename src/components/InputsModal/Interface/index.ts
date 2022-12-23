import { InputHTMLAttributes } from "react"

export interface InputsModalsProps {
	textTitle: string,
	size: 'sm' | 'md' | 'lg' | 'xl',
	type: 'text' | 'number' | 'time' | 'date'
	placeholder?: string,
	text?: string,
	defaultValue?: string,
	onChange?: any,
	name?: string,
	value?: string,
	eventHandler?: React.ChangeEventHandler<HTMLInputElement>
}