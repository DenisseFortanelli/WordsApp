import { PencilSimple, User } from "phosphor-react";
import styles from "./ModalEditUser.module.css";
import Avatar from "../../Avatar";
import BasicBtn from "../../Button/BasicButton/BasicButton";
import { useContext } from 'react';
import { ModalContext } from '../index';
import { ModalEditProps } from "./Interface";
import InputModal from "../../InputsModal/InputsModal";
import ToggleButton from "../../Button/ToggleButton/ToggleButton";

const ModalEditUser = ({ size, textHeader }: ModalEditProps) => {

  const { setIsOpenModal } = useContext(ModalContext)

  return (

    <div
      className={`${styles[size]} ${styles.modalContainer}`}
    >
      
        <div className={styles.containerTitle}>
          <div className={styles.iconHeader}>
            <User size="1.6rem" color="#F97316" />
          </div>
          <p className={styles.textHeader}>{textHeader}</p>
        </div>
      <div className={styles.separationHeader}></div>
      <div className={styles.typeUser}>
        <div className={styles.textTypeUser }>
          What type of user do you want to create?
        </div>
        <ToggleButton values={['Admin','Editor']}/>
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

        <InputModal size="lg" type="text" text="Jose" textTitle="Name*" />
        <InputModal
          size="lg"
          type="text"
          text="Ramirez"
          textTitle="Last Name*"
        />

        <div className={styles.containerBirthdayPhone}>
          <InputModal
            size="md"
            type="date"
            text="Ramirez"
            textTitle="Birthday"
          />
          <InputModal
            size="md"
            type="text"
            text="(442) 212 2365"
            textTitle="Phone number*"
          />
        </div>
      </div>

      <div className={styles.accountInformation}>
        <p className={styles.title}>ACCOUNT INFORMATION</p>
        <InputModal
          size="lg"
          type="text"
          text="joss.ramirez@company.mx"
          textTitle="Email*"
        />
        <InputModal
          size="lg"
          type="text"
          text="Mexico City (GMT-5)"
          textTitle="Timezone"
        />
        <InputModal
          size="md"
          type="text"
          text="Mexico City (GMT-5)"
          textTitle="Spanish"
        />
      </div>
      <div className={styles.separationFooter}></div>

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
        />
      </div>
    </div>
  );
};

export default ModalEditUser;

ModalEditUser.defaultProps = {
  size: "md",
};