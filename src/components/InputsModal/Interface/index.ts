export interface InputsModalsProps {
	textTitle: string,
	size: 'sm' | 'md' | 'lg' | 'xl',
	type: 'text' | 'number' | 'time' | 'date'
	text?: string,
	onChange?: any,
	name?: string,
	value?: string,
	eventHandler?: React.ChangeEventHandler<HTMLInputElement>
}