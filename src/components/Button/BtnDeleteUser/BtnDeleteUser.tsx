import { MouseEventHandler, ReactElement } from "react";
import * as icons from 'phosphor-react'
import styles from './BtnDeleteUser.module.css'

interface BtnDeleteUserProps {
	iconName?: string | ReactElement,
	onClick?: MouseEventHandler<HTMLDivElement>,
}

export const BtnDeleteUser = ({ iconName, onClick }: BtnDeleteUserProps) => {
	let PhosphorIcon: any = icons[iconName as keyof typeof icons]

	return (
		<div style={{ width: 32, height: 32 }} onClick={onClick} >
			<PhosphorIcon size='100%' weight='duotone' className={styles.styleIcon} />
		</div>
	)


}