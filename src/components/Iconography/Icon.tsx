import * as icons from 'phosphor-react'
import { ReactElement } from 'react';

interface IconsProps {
	iconName?: string | ReactElement,
	size: string | number,
	color: string,
	customIcon?: ReactElement | ReactElement[] | string,
}

export const Icon = ({ iconName, size, color, customIcon }: IconsProps) => {

	let PhosphorIcon: any = icons[iconName as keyof typeof icons]

	return (
		<div style={{ width: size, height: size }}>
			{ customIcon ? customIcon : <PhosphorIcon size='100%' color={color} /> }
		</div>
	)
}