import React, { ReactNode } from "react";
import { HomeCards } from "./interface";
import styles from "./HomeCards.module.css";
import Avatar from "../Avatar";
import { CircleIcon } from "../Button/CircleIconButton/CircleIconButton";

const HomeCard = ({ header, body }: HomeCards) => {
  return (
    <div className={styles.cardsContainer}>
      <div>
        <div className={styles.containerText}>
        <div className={styles.circleButtonHeaeder}>
            <CircleIcon iconName="DotsThree" />
          </div>
          <div className={styles.containerHeader}>
            <h5 className={styles.textHeader}>{header}</h5>
          </div>
          <p className={styles.textBody}>{body}</p>
        </div>
        

        <div className={styles.containerFooter}>
          <Avatar
            createBy="Create By"
            text="Martha"
            numberOfCharacters={2}
            backgroundColor="var(--orange500)"
            textName="Martha Rodriguez"
          />
          <CircleIcon iconName="ListBullets" />
          
          
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
