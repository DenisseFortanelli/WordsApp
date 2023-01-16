import { Info, PencilSimple, Trash, X } from 'phosphor-react'
import styles from './BoxCategory.module.css'



export interface BoxCategoryExampleProps {
	title: string
	word?: string
	description: string
	BodyDescription: string,
	definition: string,
}

export const BoxCategoryExample = ({ title, BodyDescription, description, word, definition }: BoxCategoryExampleProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<div className={styles.containerTitle}>
					<div className={styles.dropdown}>
						<h3 className={styles.title}>{title}</h3>
						<div className={styles.dropdownContent}>
							<h1 className={styles.styleDescription}>DESCRIPTION</h1>
							<p className={styles.styleBodyDesc}>{BodyDescription}</p>
							<div className={styles.styleContDef}>
								<p className={styles.styleDefBy}>Definition by</p>
								<p className={styles.creater}>{definition}</p>
							</div>
						</div>
					</div>

					<div className={styles.iconContainer}>
						<div className={styles.separationIcon}>
							<Info size='2.2rem' weight="light" />
						</div>
						<div className={styles.separationIcon}>
							<Trash size='2.2rem' weight="light" />
						</div>
						<div className={styles.separationIcon}>
							<PencilSimple size='2.2rem' weight="light" />
						</div>
						<div className={styles.closeIcon}>
							<X size='2rem' weight="light" />
						</div>
					</div>
				</div>
				<div className={styles.containerWord}>
					<div className={styles.wrapper}>
						<p>Adejtival</p>
                        <p>Filosophy</p>
                        <p>Collaborative conversations</p>
                        <p>Adejtival</p>
                        <p>Filosophy</p>
                        <p>Description</p>
                        <p>Determiner</p>
                        <p>Adejtival</p>
                        <p>Filosophy</p>
                        <p>Description</p>
                        <p>Determiner</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BoxCategoryExample
BoxCategoryExample.defaultProps = {
	title: '🗂️  Norm-ISO 27000',
	word: 'Absolute phrase',
	description: 'DESCRIPTION',
	BodyDescription: 'is a term that has been used in the ecology of plants for two different indices. The older usage of the term refers to Ellenbergs indicator values from 1974, which are based on a simple ordinal classification of plants according to the position of their realized ecological niche along an environmental gradient.',
	definition: 'Alejandra Aguilar Escobar',
}