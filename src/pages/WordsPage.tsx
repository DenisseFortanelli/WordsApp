
import styles from "../assets/css/glossary.module.css";
import HomeCards from "../components/HomeCards/HomeCards";
import BannerGlossary from "../components/Images/BannerGlossary";

export const WordsPage = () => {
  return (
	<div style={{ backgroundColor: "#F8FAFC" }}>
    <div className={styles.containerGlossary}>
        <BannerGlossary/>
    
    <HomeCards
                header="📋  Quality"
                body="A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ..."
              ></HomeCards>
              <HomeCards
                header="🧮  Operation"
                body="A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ..."
              ></HomeCards>
              <HomeCards
                header="🗂️  Norm-ISO 27000"
                body="A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ..."
              ></HomeCards>
</div>
  </div>
  )
}
