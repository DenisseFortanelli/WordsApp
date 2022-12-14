

import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import Avatar from '../Avatar/Avatar';
import Tags from '../Tags/Tagsframe';
import styles from './CardTable.module.css'
import { CardTableProps } from './Interface';

const CardsTable = ({ checked,hasCheckBox, email, name, onClick, phone, country }:CardTableProps ) => {
	
	const [isChecked, setisChecked] = useState(checked)
	const handlerCheck=(e:ChangeEvent<HTMLInputElement>)=>{
		setisChecked(e.target.checked)
	}
	useEffect(() => {
	  setisChecked(checked)
	}, [checked])
	

	return (
		<div className={styles.cardsContainer} >
			<div className={styles.containerItems}>
				{hasCheckBox ? <input type="checkbox" checked={isChecked} onChange={handlerCheck} className={styles.checked} /> : null}

				<div className={styles.containerHeader}>
					<Avatar
						size="xl"
						numberOfCharacters={2}
						backgroundColor="var(--orange500)"
						text={name}
					/>
					<p className={styles.textName}>{name}</p>
					<Tags
						icon="EnvelopeSimple"
						size="md"
						text={email}
						backgroundColor="var(--neutral500)"
					/>
				</div>
				<div className={styles.line}></div>

				<div className={styles.footer}>
					<Tags
						icon="Phone"
						size="md"
						text={phone}
						backgroundColor="var(--neutral500)"
					/>
					<br />
					<Tags
						size="md"
						text={country}
						backgroundColor="var(--neutral500)"
					/>
				</div>
			</div>
		</div>
	)
}

export default CardsTable
CardsTable.defaultProps = {
	name: 'Juanito',
	email: 'juanito@gmail.com',
	phone: '4272443402',
	country: 'Mexico City (GTM-5)',
	hasCheckBox: true,
}