import { CloudFog, User, X } from "phosphor-react";
import styles from "./ModalNewCategory.module.css";
import Avatar from "../../Avatar";
import { ModalContext } from '../index';
import { ChangeEvent, useContext, useEffect, useState } from "react";

const ModalNewCategory = () => {
  
  const { setIsOpenModal } = useContext(ModalContext)
  
  return (
    <>
      <div
        className={`${styles.modalContainer}`}
      >
        <div className={styles.headerTitle}>
        <div className={styles.containerTitle}>
          <div className={styles.iconHeader}>
            <User size="1.6rem" color="#F97316" />
          </div>
          <p className={styles.textHeader}>New Category</p>
        </div>
        <div className={styles.closeIcon}>
          <X size='2.3rem' onClick={() => setIsOpenModal(false)} />
        </div>
      </div>
      <div className={styles.separationHeader}></div>
       
      </div>
    </>
     
  );
};

export default ModalNewCategory;

ModalNewCategory.defaultProps = {
  size: "md",
};