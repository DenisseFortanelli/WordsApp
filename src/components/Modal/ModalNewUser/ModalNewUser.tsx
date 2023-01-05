import { CloudFog, User, X } from "phosphor-react";
import styles from "./ModalNewUser.module.css";
import Avatar from "../../Avatar";
import { ModalContext } from '../index';
import BasicBtn from "../../Button/BasicButton/BasicButton";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ModalNew } from "./interface";
import InputModal from "../../InputsModal/InputsModal";
import ToggleButton from "../../Button/ToggleButton/ToggleButton";
import { createUserData } from "../../../hooks/useUsers";
import { IUser } from "../../../interface/FetchAllUserResponse";
import { InputSelectTime } from "../../InputsModal/InputSelectTime/InputSelectTime";
import { InputSelectIdiom } from "../../InputsModal/InputSelectIdioms/InputSelectIdioms";
import { useFormik } from "formik";
import { date, object, string } from "yup";

const ModalNewUser = ({ size, textHeader }: ModalNew) => {
  const initialValues = {
    birthday: '',
    email: '',
    name: '',
    id: '',
    lastname: '',
    middlename: '',
    second_lastname:'',
    phone: '',
    timezone: '',
    language: '',
    image:'',
    is_admin:true
  }
  const [user, setUser] = useState<IUser>(initialValues)
  const { setIsOpenModal } = useContext(ModalContext)
  const { mutate } = createUserData()
  

  const validationSchema = object({
    birthday: date().default(new Date('2004-12-31')).max('2004-12-31','La fecha no puede ser mayor a 2004').required('El año de nacimiento es obligatorio'),
    email: string().email('El email no tiene formato válido').required('El email es obligatorio'),
    name: string().required('El nombre es requerido').min(1, 'El nombre tiene que tener almenos un caracter').max(10, 'El nombre no puede superar los 10 caracteres'),
    language: string().required('Debes seleccionar un lenguaje'),
    lastname: string().required('El apellido es requerido').min(1, 'El apellido tiene que tener almenos un caracter').max(20, 'El apellido no puede esuperar los 20 caracteres'),
    phone: string().min(10, 'Mínimo 10 caracteres').required('El teléfono es requerido').max(10, 'El teléfono no debe superar los 10 caracteres'),
    timezone: string().required('Debes seleccionar una zona horaria'),
  })
  
  const formik = useFormik<IUser>({
    initialValues,
    validationSchema,
    onSubmit: useFormik => {
      mutate({...useFormik, is_admin: user.is_admin})
      setUser(initialValues)
      setIsOpenModal(false)
    }
  })
  
  function handleTypeUserChange({isActive}:{isActive: boolean}){
    console.log('handleType',isActive);
    setUser({...user, is_admin: isActive})
    
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div
        className={`${styles[size]} ${styles.modalContainer}`}
      >
       {/*  <div className={styles.containerTitle}>
          <div className={styles.iconHeader}>
            <User size="1.6rem" color="#F97316" />
          </div>
          <p className={styles.textHeader}>{textHeader}</p>
        </div> */}
        <div className={styles.headerTitle}>
        <div className={styles.containerTitle}>
          <div className={styles.iconHeader}>
            <User size="1.6rem" color="#F97316" />
          </div>
          <p className={styles.textHeader}>{textHeader}</p>
        </div>
            <div className={styles.closeIcon}>
            <X size='2.3rem' onClick={() => setIsOpenModal(false)} />
            </div>
        </div>
        <div className={styles.separationHeader}></div>
        <div className={styles.typeUser}>
          <div className={styles.textTypeUser}>
            What type of user do you want to create?
          </div>
          <ToggleButton values={['Admin', 'Editor']} onChange={handleTypeUserChange}/>
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
              imageSrc={user.image}
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
            onChange={formik.handleChange}
            name='name'
            size="lg"
            value={formik.values.name}
            type="text"
            placeholder=""
            textTitle="Name*" 
            errorMsg={formik.errors.name}
            hasError={formik.errors.name ? true : false}
/>
          <InputModal
            onChange={formik.handleChange}
            name='lastname'
            value={formik.values.lastname}
            size="lg"
            type="text"
            placeholder=""
            textTitle="Last Name*"
            errorMsg={formik.errors.lastname}
            hasError={formik.errors.lastname ? true : false}
          />

          <div className={styles.containerBirthdayPhone}>
            <InputModal
              onChange={formik.handleChange}
              name='birthday'
              value={formik.values.birthday}
              size="md"
              type="date"
              textTitle="Birthday"
              subText=" (Optional)"
              errorMsg={formik.errors.birthday}
            hasError={formik.errors.birthday ? true : false}
            />
            <InputModal
              onChange={formik.handleChange}
              name='phone'
              value={formik.values.phone}
              size="md"
              type="text"
              placeholder="ej. (442) 212 2365"
              textTitle="Phone number*"
              errorMsg={formik.errors.phone}
            hasError={formik.errors.phone ? true : false}
            />

          </div>
        </div>
        <div className={styles.accountInformation}>
          <p className={styles.title}>ACCOUNT INFORMATION</p>
          <InputModal
            onChange={formik.handleChange}
            name='email'
            value={formik.values.email}
            size="lg"
            type="text"
            placeholder="ej. nombre@correo.com"
            textTitle="Email*"
            errorMsg={formik.errors.email}
            hasError={formik.errors.email ? true : false}
          />
          <InputSelectTime
          onChange={formik.handleChange}
          name='timezone'
          placeholder="Choose..."
          value={formik.values.timezone}
          size="xl"
          textTitle="Timezone*"
          errorMsg={formik.errors.timezone}
            hasError={formik.errors.timezone ? true : false}

          />
          <InputSelectIdiom
          onChange={formik.handleChange}
          name='language'
          placeholder="Choose..."
          value={formik.values.language}
          size="sm"
          textTitle="Language*"
          errorMsg={formik.errors.language}
            hasError={formik.errors.language ? true : false}
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
           /*  onClick={handleSubmit} */
           type = 'submit'
            size="sm"
            backgroundColor="var(--celeste700)"
            fontWeight={700}
            borderColor="var(--celeste700)"
            colorText="var(--white)"
            text="Save"
          />
        </div>
      </div>
    </form>
     
  );
};

export default ModalNewUser;

ModalNewUser.defaultProps = {
  size: "md",
};