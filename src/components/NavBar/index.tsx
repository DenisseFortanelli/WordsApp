import LanguageButton from "../Button/LanguageButton";
import styles from "./NavBar.module.css";
import Image from "../Images/LogoNav";
import Links from "../Links";
import LoginButton from "../Button/LoginButton";
import { EN } from "../Iconography/Flags";

const NavBar = () => {
  return (
    <div className={styles.containerNavBar}>
      <Image />
      <div className={styles.linksContainer}>
        <Links />
      </div>
      <div className={styles.positionLanguageButton}>
      <LanguageButton 
      flag={<EN/>}
      />
      </div>
      <div className={styles.shadow}>
						</div>
      <LoginButton />
    </div>
  );
};

export default NavBar;
