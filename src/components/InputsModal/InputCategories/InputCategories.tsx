import styles from './InputCategories.module.css'
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { Backspace, CaretDown } from 'phosphor-react';

interface ItemsProps {
	text: string, checked: boolean
}
export interface InputCategoriesProps {
	defaultValue?: string,
	onChange?: any,
	name?: string,
	value?: string,
	eventHandler?: ChangeEventHandler<HTMLSelectElement>
}
export interface ItemSelectProps {
	text: string,
	checked?: boolean,
	handleCheck?: ChangeEventHandler<HTMLInputElement>
}
const items: ItemsProps[] = [
	{
		text: '📋  Quality',
		checked: false
	},
	{
		text: '🧮  Operation',
		checked: false
	},
	{
		text: '🗂️  Norm-ISO 27000',
		checked: false
	},
	{
		text: '🗂️  Norm-ISO 17025',
		checked: false
	}
]

export const InputCategories = ({ defaultValue, onChange, name, value }: InputCategoriesProps) => {
	const [selectedItems, setSelectedItems] = useState<ItemsProps[]>(items)
	const [lengthItems, setLengthItems] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
	const [firstItem, setFirstItem] = useState<ItemsProps | undefined>()

	const ItemHandleCheck = (e: ChangeEvent<HTMLInputElement>, i: number) => {
		let updateItems = selectedItems.map(
			(item, index) => index === i ?
				{ ...item, checked: e.target.checked } : item
		)
		setSelectedItems(updateItems)
	}

	useEffect(() => {
		let _lengthItems = selectedItems.filter(item => item.checked === true)
		setLengthItems(_lengthItems.length)
		setFirstItem(_lengthItems[0])

	}, [selectedItems])


	return (
		<div className={styles.multiSelect}>
			<div className={styles.containerSelect} onClick={() => setIsOpen(!isOpen)}>
				{lengthItems > 1 &&
					<> <div className={styles.badge}><p>{lengthItems}</p></div>
						<p>Sets selected</p>
						<Backspace size={20} />
					</>
				}
				{lengthItems <= 1 &&
					<>{lengthItems === 0 && <p style={{marginRight:8}}>Categories</p>}
						{lengthItems === 1 && firstItem && <p className={styles.firstSelectedItem}>{firstItem?.text}</p>}
						<CaretDown size={20} /></>}

			</div>
			{isOpen &&
				<div className={styles.dropdown}>
					{selectedItems.map((item, i) => <ItemSelect key={item.text} text={item.text} checked={item.checked} handleCheck={(e) => ItemHandleCheck(e, i)} />)}
				</div>
			}
		</div>
	)
}

const ItemSelect = ({ text, checked, handleCheck }: ItemSelectProps) => {
	return (
		<div className={styles.containerItem}>
			<input type="checkbox" onChange={handleCheck} checked={checked} />
			<p>{text}</p>
		</div>
	)
}
