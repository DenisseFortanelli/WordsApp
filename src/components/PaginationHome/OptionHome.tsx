import * as icons from "phosphor-react";
import styles from "./PaginationHome.module.css";

export const OptionsHome = () => {
  return (
    <div className={styles.containerMain}>
      <p className={styles.textStyle}>VIEW ALL</p>
      <div className={styles.containerArrows}>
        <div style={{ width: 36, height: 36 }} className={styles.containerButton}>
          <icons.MagnifyingGlass size="1.6rem" className={styles.propsIcon} />
        </div>
        <div style={{ width: 36, height: 36 }} className={styles.containerButton}>
          <icons.FileArrowDown size="1.6rem" className={styles.propsIcon} />
        </div>
      </div>
    </div>
  );
};

export default OptionsHome;