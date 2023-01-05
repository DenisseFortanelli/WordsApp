import { PencilSimple, User, X } from "phosphor-react";
import styles from "./ModalEditUser.module.css";
import Avatar from "../../Avatar";
import BasicBtn from "../../Button/BasicButton/BasicButton";
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ModalContext } from '../index';
import { ModalEditProps } from "./Interface";
import InputModal from "../../InputsModal/InputsModal";
import ToggleButton from "../../Button/ToggleButton/ToggleButton";
import { updateUserData } from "../../../hooks/useUsers";
import { useAuth0 } from "@auth0/auth0-react";
import { IUser } from "../../../interface/FetchAllUserResponse";
import { InputSelectTime } from "../../InputsModal/InputSelectTime/InputSelectTime";
import { InputSelectIdiom } from "../../InputsModal/InputSelectIdioms/InputSelectIdioms";
import { TableContext } from "../../../context/TableContext";


const ModalEditUser = ({ size, textHeader, user: originalUser }: ModalEditProps) => {

  const initialValue = {
    auth0_id: '',
    birthday: '',
    email: '',
    id: '',
    image: '',
    is_admin: true,
    language: '',
    lastname: '',
    middlename: '',
    name: '',
    phone: '',
    timezone: '',
  }

  const [user, setUser] = useState<IUser>(originalUser ?? initialValue)
  const { setIsOpenModalEditUser } = useContext(TableContext)
  const { mutate } = updateUserData()

  useEffect(() => setUser(_ => originalUser), [originalUser])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setUser(
      { ...user, [e.target.name]: e.target.value }
    )
  }

  function handleSubmit() {
    mutate({...user, is_admin: user.is_admin})
    setUser(initialValue)
    setIsOpenModalEditUser(false)
  }

  function handleTypeUserChange({isActive}:{isActive: boolean}){
    console.log('handleType',isActive);
    setUser({...user, is_admin: isActive})
    
  }

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
          <X size='2.3rem' onClick={() => setIsOpenModalEditUser(false)} />
        </div>
      </div>
      <div className={styles.separationHeader}></div>
      <div className={styles.typeUser}>
        <div className={styles.textTypeUser}>
          What type of user do you want to create?
        </div>
        <ToggleButton values={['Admin', 'Editor']} onChange={handleTypeUserChange} />
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
          value={user.name}
          onChange={handleChange}
          name='name'
          size="lg"
          type="text"
          placeholder='Jose'
          textTitle="Name*"
        />
        <InputModal
          value={user.lastname}
          onChange={handleChange}
          name='lastname'
          size="lg"
          type="text"
          placeholder='Ramirez'
          textTitle="Last Name*"
        />
        {/* <InputModal
          value={user.second_last_name}
          onChange={handleChange}
          name='second_last_name'
          // value={user.second_last_name}
          size="lg"
          type="text"
          placeholder='Second last name'
          textTitle="Second Name*"
        /> */}

        <div className={styles.containerBirthdayPhone}>
          <InputModal
            value={user.birthday}
            onChange={handleChange}
            name='birthday'
            // value={user.birthday}
            size="md"
            type="date"
            placeholder='22 Nov 1990'
            textTitle="Birthday"
            subText=" (Optional)"
          />
          <InputModal
            value={user.phone}
            onChange={handleChange}
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
          onChange={handleChange}
          value={user.email}
          name='email'
          // value={user.email}
          size="lg"
          type="text"
          placeholder='joss.reamirez@company.mx'
          textTitle="Email*"
          disabled={true}
        />
        <InputSelectTime
          onChange={handleChange}
          name='timezone'
          value={user.timezone}
          size="xl"
          textTitle="Timezone*"
        />
        <InputSelectIdiom
          onChange={handleChange}
          name='language'
          value={user.language}
          size="sm"
          textTitle="Language*"
        />

      </div>

      <div className={styles.separationFooter}></div>

      <div className={styles.buttonFooter}>
        <BasicBtn
          onClick={() => setIsOpenModalEditUser(false)}
          size="sm"
          backgroundColor="white"
          fontWeight={700}
          borderColor="var(--neutral300)"
          colorText="var(--neutral900)"
          text="Cancel"
        />
        <BasicBtn
          onClick={handleSubmit}
          size="sm"
          backgroundColor="var(--celeste700)"
          fontWeight={700}
          borderColor="var(--celeste700)"
          colorText="var(--white)"
          text="Save"
        />
      </div>
    </div>
  );
};

export default ModalEditUser;

ModalEditUser.defaultProps = {
  size: "md",
};