
import styles from "../assets/css/glossary.module.css";
import BannerGlossary from "../components/Images/BannerGlossary";

export const WordsPage = () => {
  return (
	<div style={{ backgroundColor: "#F8FAFC" }}>
    <div className={styles.containerGlossary}>
        <BannerGlossary/>
    </div>

  </div>
  )
}
