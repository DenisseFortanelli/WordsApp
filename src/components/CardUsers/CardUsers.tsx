import React, { ReactNode } from "react";
import Avatar from "../Avatar";
import Infoframe from "../Tags";
import styles from "./CardUsers.module.css";
import { CardUsers } from "./interface";

const CardUser = ({ name,email,phone,country }: CardUsers) => {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.containerItems}>
        <div className={styles.containerHeader}>
      <Avatar
            size="xl"
            numberOfCharacters={2}
            backgroundColor="var(--orange500)"
            text={name}
          />
          <p className={styles.textName}>{name}</p>
          <Infoframe
          icon="EnvelopeSimple"
          size="md"
          text={email}
          backgroundColor="var(--neutral500)"
        />
        </div>
        <div className={styles.line}></div>

        <div className={styles.footer}> 
        <Infoframe
          icon="Phone"
          size="md"
          text={phone}
          backgroundColor="var(--neutral500)"
        />
        <br />
        <Infoframe
          size="md"
          text={country}
          backgroundColor="var(--neutral500)"
        />   
      </div>
      </div>
    </div>
  );
};

export default CardUser;