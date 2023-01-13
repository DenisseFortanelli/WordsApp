import React, { ReactNode, useState } from "react";
import styles from "./CardsGlossary.module.css";
import Avatar from "../Avatar";
import { CircleIcon } from "../Button/CircleIconButton/CircleIconButton";
import { CardsGlossaryProps } from "./interface";
import CountWords from "../Button/CountWords/CountWords";
import { OptionsCard } from "./OptionsCard";

const CardsGlossary = ({ header, body, number, user,id, onClick }: CardsGlossaryProps) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <div className={styles.cardsContainer} onClick={onClick}>
        <div>
          <div className={styles.containerText}>
            <div className={styles.containerHeader}>
              <h5 className={styles.textHeader}>{header}</h5>
              <div onMouseUp={() => setOpen(true)} onMouseLeave={() => setOpen(false)} >
                <CircleIcon iconName="DotsThree" />
                {
                  open &&
                  <div className={styles.containerPopOver}>
                    <OptionsCard id={id} />
                  </div>
                }
              </div>
            </div>
            <p className={styles.textBody}>{body}</p>
          </div>
          <div className={styles.containerFooter}>
            <Avatar
              createBy="Create By"
              text={user}
              numberOfCharacters={2}
              backgroundColor="var(--orange500)"
              textName={user}
            />
            <CountWords number={number} />


          </div>

        </div>
      </div>

    </>
  );
};

export default CardsGlossary;
