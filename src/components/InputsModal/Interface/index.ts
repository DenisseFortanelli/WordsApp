export interface InputsModals {
	textTitle: string,
	size: 'sm' | 'md' | 'lg' | 'xl',
	type: 'text' | 'number' | 'time' | 'date'
	text?: string,
	onChange?: any,
	eventHandler?: React.ChangeEventHandler<HTMLInputElement>
}