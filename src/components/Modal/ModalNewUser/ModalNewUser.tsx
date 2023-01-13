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
import { Formik, useFormik } from "formik";
import { date, object, string } from "yup";
import { createUsers } from "../../../api/MicroServiceOne";

const ModalNewUser = ({ size, textHeader, onSuccess }: ModalNew) => {
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
  const [isMultiple, setisMultiple] = useState(false)
  const { setIsOpenModal } = useContext(ModalContext)
  /* const { mutate } = createUserData() */
  

  const validationSchema = object({
    birthday: date().default(new Date('2004-12-31')).max('2004-12-31','The date cannot be older than 2004'),
    email: string().email('The email does not have a valid format').required('The email is required'),
    name: string().required('You need to define a name').min(1, 'You need to define a name'),
    language: string().required('Please select the language of your preference'),
    lastname: string().required('You need to define a last name').min(1, 'You need to define a last name'),
    phone: string().min(10, 'Minimum 10 characters').required('The phone number is required').max(10, 'The phone must not exceed 10 characters'),
    timezone: string().required('Please select the timezone of your country'),
  })
  
 
  
  function handleTypeUserChange({isActive}:{isActive: boolean}){
    console.log('handleType',isActive);
    setUser({...user, is_admin: isActive})
  }

  return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={ (e, {resetForm}) => {
      createUsers({ ...e, is_admin: user.is_admin }).then(()=> {
        resetForm()
        !isMultiple && setIsOpenModal(false)
      })
      setUser(initialValues)
      onSuccess && onSuccess(true, `Great! You've created new user`)
    }}
    >
      {({ handleBlur, values, handleSubmit, handleChange, resetForm, errors }) => (
      <form onSubmit={handleSubmit}>
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
            <X size='2.3rem' onClick={() => {setIsOpenModal(false); resetForm()}} />
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
          </div>
          <p className={styles.profilePicture}>Profile Picture</p>
          <div className={styles.containerChangePicture}>
            <Avatar
              size="xl"
              text={values.name}
              backgroundColor="var(--gray200)"
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
            onBlur={handleBlur}
            onChange={handleChange}
            name='name'
            size="lg"
            value={values.name}
            type="text"
            placeholder=""
            textTitle="Name*" 
            errorMsg={errors.name}
            hasError={errors.name ? true : false}
/>
          <InputModal
            onBlur={handleBlur}
            onChange={handleChange}
            name='lastname'
            value={values.lastname}
            size="lg"
            type="text"
            placeholder=""
            textTitle="Last Name*"
            errorMsg={errors.lastname}
            hasError={errors.lastname ? true : false}
          />

          <div className={styles.containerBirthdayPhone}>
            <InputModal
              onBlur={handleBlur}
              onChange={handleChange}
              name='birthday'
              value={values.birthday}
              size="md"
              type="date"
              textTitle="Birthday"
              subText=" (Optional)"
              errorMsg={errors.birthday}
            hasError={errors.birthday ? true : false}
            />
            <InputModal
              onBlur={handleBlur}
              onChange={handleChange}
              name='phone'
              value={values.phone}
              size="md"
              type="text"
              placeholder="ej. (442) 212 2365"
              textTitle="Phone number*"
              errorMsg={errors.phone}
            hasError={errors.phone ? true : false}
            />

          </div>
        </div>
        <div className={styles.accountInformation}>
          <p className={styles.title}>ACCOUNT INFORMATION</p>
          <InputModal
            onBlur={handleBlur}
            onChange={handleChange}
            name='email'
            value={values.email}
            size="lg"
            type="text"
            placeholder="ej. nombre@correo.com"
            textTitle="Email*"
            errorMsg={errors.email}
            hasError={errors.email ? true : false}
          />
          <InputSelectTime
          onBlur={handleBlur}
          onChange={handleChange}
          name='timezone'
          placeholder="Choose..."
          value={values.timezone}
          size="xl"
          textTitle="Timezone*"
          errorMsg={errors.timezone}
            hasError={errors.timezone ? true : false}

          />
          <InputSelectIdiom
          onBlur={handleBlur}
          onChange={handleChange}
          name='language'
          placeholder="Choose..."
          value={values.language}
          size="sm"
          textTitle="Language*"
          errorMsg={errors.language}
          hasError={errors.language ? true : false}
          />
        </div>
        <div className={styles.separationFooter}></div>
        <div className={styles.inputContainer}>
        <input type="checkbox" className={styles.input} 
                onChange={(e)=>setisMultiple(e.target.checked) } checked={isMultiple} />
          <p className={styles.textInput}>Create another User</p>
        </div>
        <div className={styles.buttonFooter}>
          <BasicBtn
             onClick={() => {setIsOpenModal(false); resetForm()}}
            size="sm"
            backgroundColor="white"
            fontWeight={700}
            borderColor="var(--neutral300)"
            colorText="var(--neutral900)"
            text="Cancel"
            type="reset"
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
      )}
    </Formik>
     
  );
};

export default ModalNewUser;

ModalNewUser.defaultProps = {
  size: "md",
};