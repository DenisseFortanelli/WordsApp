import styles from './InputFile.module.css'


interface InputFileProps {
	name: string
	onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export const InputFile = ({ name, onChange }: InputFileProps) => {
	return (
		<div className={styles.container}>
			<button className={styles.inputFileBtn}>
				<label htmlFor={name} className={styles.textBtn}>
					Upload New Picture
				</label>
			</button>
			<input
				onChange={onChange}
				id={name}
				name={name}
				style={{display:'none'}}
				type="file"
			/>
		</div>
	)
}