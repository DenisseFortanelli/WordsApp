import { CloudFog, TagSimple, User, X } from "phosphor-react";
import styles from "./ModalNewCategory.module.css";
import Avatar from "../../Avatar";
import { ModalContext } from '../index';
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { InputNameCategory } from "../../InputsModal/InputNameCategory/InputNamecategory";
import { InputDescriptionCategory } from "../../InputsModal/InputDescriptionCategory/InputDescriptionCategory";
import { InputCodeCategory } from "../../InputsModal/InputCodeCategory/InputCodeCategory";
import BasicBtn from "../../Button/BasicButton/BasicButton";

const ModalNewCategory = () => {
  
  const { setIsOpenModal } = useContext(ModalContext)
  
  return (
    <div >
      <div
        className={`${styles.modalContainer}`}
      >
        <div className={styles.containerCard}>
        <div className={styles.headerTitle}>
        <div className={styles.containerTitle}>
          <div className={styles.iconHeader}>
            <TagSimple size="1.6rem" color="#F97316" />
          </div>
          <p className={styles.textHeader}>New Category</p>
        </div>
        <div className={styles.closeIcon}>
          <X size='2.3rem' onClick={() => setIsOpenModal(false)} />
        </div>
      </div>
      <div className={styles.separationHeader}></div>
      <div className={styles.body}>
       <InputNameCategory onChange={(e)=> console.log(e)}/>
       <InputDescriptionCategory characterLimit={250}/>
       <InputCodeCategory/>
       </div>
       <div className={styles.separationFooter}></div>
       <div className={styles.inputContainer}>
       <div className={styles.checkStyle}>
          <input type="checkbox" className={styles.input} />
          <div className={styles.textFooter}>
          <p className={styles.textInput}>Create another Category</p>
          </div>
          </div>
          <div className={styles.buttonFooter}>
          <BasicBtn
            onClick={() => setIsOpenModal(false)}
            size="sm"
            type="reset"
            backgroundColor="white"
            fontWeight={700}
            borderColor="var(--neutral300)"
            colorText="var(--neutral900)"
            text="Cancel"
          />
          <div style={{marginLeft:'0.8rem'}}>
          <BasicBtn
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
        </div>
        
      </div>
      </div>
    </div>
     
  );
};

export default ModalNewCategory;

ModalNewCategory.defaultProps = {
  size: "md",
};