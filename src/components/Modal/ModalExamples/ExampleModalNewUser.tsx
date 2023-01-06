import { User, X } from 'phosphor-react';
import React, { useContext } from 'react'
import styles from '../ModalNewUser/ModalNewUser.module.css';
import Avatar from '../../Avatar/Avatar';
import BasicBtn from '../../Button/BasicButton/BasicButton';
import ToggleButton from '../../Button/ToggleButton/ToggleButton';
import { ModalContext } from '../index';
import InputModal from '../../InputsModal/InputsModal';
import { InputSelectTime } from '../../InputsModal/InputSelectTime/InputSelectTime';
import { InputSelectIdiom } from '../../InputsModal/InputSelectIdioms/InputSelectIdioms';

interface ExampleModalNewUserProps {
	size: 'sm' | 'md' | 'xl',
	textHeader?: string,
	onClick?: React.MouseEventHandler<HTMLButtonElement>,
	onSubmit?: React.FormEventHandler<HTMLFormElement> | undefined
}

export const ExampleModalNewUser = ({ size, textHeader }: ExampleModalNewUserProps) => {

	const { setIsOpenModal } = useContext(ModalContext)

	return (
		<div
			className={`${styles[size]} ${styles.modalContainer}`}
		>
			<div className={styles.headerTitle}>
				<div className={styles.containerTitle}>
					<div className={styles.iconHeader}>
						<User size="1.6rem" color="#F97316" />
					</div>
					<p className={styles.textHeader}>{textHeader}</p>
				</div>
				<div className={styles.closeIcon}>
					<X size='2.8rem' onClick={() => setIsOpenModal(false)}
					/>
				</div>
			</div>
			<div className={styles.separationHeader}></div>
			<div className={styles.typeUser}>
				<div className={styles.textTypeUser}>
					What type of user do you want to create?
				</div>
				<ToggleButton values={['Admin', 'Editor']} />
			</div>

			<div className={styles.containerPersonalInformation}>
				<div className={styles.personalInfoText}>
					<p className={styles.title}>PERSONAL INFORMATION</p>
					<p className={styles.infoReq}>* Information required</p>
				</div>
				<p className={styles.profilePicture}>Profile Picture</p>
				<div className={styles.containerChangePicture}>
					<Avatar
						size="xl"
						imageSrc="https://xavierferras.com/wp-content/uploads/2019/02/266-Persona.jpg"
					/>
					<div className={styles.containerChangePictureBtn}>
						<BasicBtn
							size="lg"
							backgroundColor="white"
							fontWeight={700}
							borderColor="var(--neutral300)"
							colorText="var(--neutral900)"
							text="Upload New Picture"
						/>
					</div>
				</div>
				<InputModal
					name='name'
					size="lg"
					value='name'
					type="text"
					placeholder=""
					textTitle="Name*"
				/>
				<InputModal
					name='lastname'
					value='Lastname'
					size="lg"
					type="text"
					placeholder=""
					textTitle="Last Name*"
				/>
				<div className={styles.containerBirthdayPhone}>
					<InputModal
						name='birthday'
						value='birthday'
						size="md"
						type="date"
						subText=" (Optional)"
						placeholder="Ramirez"
						textTitle="Birthday"
					/>
					<InputModal
						name='phone'
						value='phone'
						size="md"
						type="text"
						placeholder="ej. (442) 212 2365"
						textTitle="Phone number*"
					/>
				</div>
			</div>
			<div className={styles.accountInformation}>
				<p className={styles.title}>ACCOUNT INFORMATION</p>
				<InputModal
					textId="email-Error"
					name='email'
					value="email"
					size="lg"
					type="text"
					placeholder="joss.ramirez@company.mx"
					textTitle="Email*"
				/>
				<InputSelectTime

					name='timezone'
					value=''
					size='xl'
					textTitle="TimeZone*"
					placeholder="Choose..."

				/>
				<InputSelectIdiom

					name='language'
					value='Language'
					textTitle='Language'
					size="sm"
					placeholder="Choose..."
				/>
			</div>
			<div className={styles.separationFooter}></div>
			<div className={styles.inputContainer}>
				<input type="checkbox" className={styles.input} />
				<p className={styles.textInput}>Create another User</p>
			</div>
			<div className={styles.buttonFooter}>
				<BasicBtn
					onClick={() => setIsOpenModal(false)}
					size="sm"
					backgroundColor="white"
					fontWeight={700}
					borderColor="var(--neutral300)"
					colorText="var(--neutral900)"
					text="Cancel"
				/>
				<BasicBtn
					size="sm"
					backgroundColor="var(--celeste700)"
					fontWeight={700}
					borderColor="var(--celeste700)"
					colorText="var(--white)"
					text="Save"
					type="submit"
				/>
			</div>
		</div>
	)
}
