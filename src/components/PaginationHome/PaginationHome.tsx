import * as icons from "phosphor-react";
import styles from "./PaginationHome.module.css";

export const PaginationHome = () => {
  return (
    <div className={styles.containerMain}>
        <p className={styles.textStyle}>VIEW ALL</p>
    <div className={styles.containerArrows}>
    <div style={{ width: 36, height: 36 }} className={styles.containerButton}>
      <icons.CaretRight size="1.6rem" className={styles.propsIcon}/>
    </div>
    <div style={{ width: 36, height: 36 }} className={styles.containerButton}>
    <icons.CaretLeft size="1.6rem"  className={styles.propsIcon}/>
    </div>
  </div>
  </div>
  );
};

export default PaginationHome;
