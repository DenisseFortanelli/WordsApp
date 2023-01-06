import React from 'react'
import BasicBtn from '../../Button/BasicButton/BasicButton';
import Avatar from '../../Avatar';
import ToggleButton from '../../Button/ToggleButton/ToggleButton';
import styles from "../ModalEditUser/ModalEditUser.module.css";
import { User, X } from 'phosphor-react';
import InputModal from '../../InputsModal/InputsModal';
import { InputSelectTime } from '../../InputsModal/InputSelectTime/InputSelectTime';
import { InputSelectIdiom } from '../../InputsModal/InputSelectIdioms/InputSelectIdioms';

interface ExampleEditUserProps {
	size: 'sm' | 'md' | 'xl',
	textHeader?: string,
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ExampleModalEditUser = ({ size, textHeader }: ExampleEditUserProps) => {
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
					<X size='2.8rem' />
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
						<BasicBtn
							size="sm"
							backgroundColor="var(--red400)"
							fontWeight={700}
							borderColor="var(--red400)"
							colorText="var(--white)"
							text="Delete"
						/>
					</div>
				</div>

				<InputModal
					value='name'
					name='name'
					// value={user.first_name}
					size="lg"
					type="text"
					placeholder='Jose'
					textTitle="Name*"
				/>
				<InputModal
					value='lasname'
					name='lastname'
					// value={user.last_name}
					size="lg"
					type="text"
					placeholder='Ramirez'
					textTitle="Last Name*"
				/>

				<div className={styles.containerBirthdayPhone}>
					<InputModal
						value='birthday'
						name='birthday'
						// value={user.date_of_birth}
						size="md"
						type="date"
						subText=" (Optional)"
						placeholder='22 Nov 1990'
						textTitle="Birthday"
					/>
					<InputModal
						value='Phone'
						name='phone'
						// value={user.telephone}
						size="md"
						type="text"
						placeholder='(442) 212 2365'
						textTitle="Phone number*"
					/>
				</div>
			</div>

			<div className={styles.accountInformation}>
				<p className={styles.title}>ACCOUNT INFORMATION</p>
				<InputModal
					value='email'
					name='email'
					disabled
					size="lg"
					type="text"
					placeholder='joss.reamirez@company.mx'
					textTitle="Email*"
				/>
				<InputSelectTime
					name='timezone'
					value='tiemzone'
					// value={user.time_zone}
					placeholder='Choose...'
					size='xl'
					textTitle="TimeZone"
				/>

				<InputSelectIdiom
					name='language'
					value='language'
					// value={user.language}
					textTitle='Language'
					placeholder="Choose..."
					size="sm"
				/>

			</div>

			<div className={styles.separationFooter}></div>

			<div className={styles.buttonFooter}>
				<BasicBtn
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
				/>
			</div>
		</div>
	)
}
