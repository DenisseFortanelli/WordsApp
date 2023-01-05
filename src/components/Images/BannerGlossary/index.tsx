import { ReactElement, useEffect, useState } from "react";
import BasicBtn from "../../Button/BasicButton/BasicButton";
import ToggleButtonGlossary from "../../Button/ToggleButtonGlossary/ToggleButtonGlossary";
import { InputCategories } from "../../InputCategories/InputCategories";
import { InputSearch } from "../../InputSearchs/InputSearch";
import styles from "./BannerGlossary.module.css";

interface BannerGlossaryProps {
    search?: ReactElement,
    selectCategories?: ReactElement,
}

const BannerGlossary = ({  }: BannerGlossaryProps) => {
    const [show, setShow] = useState<boolean>(true);
    
    return (
        <>
            <div className={styles.containerHeader}>
                <div className={styles.containerTop}>
                    <p className={styles.glossary}>Glossary</p>
                    <ToggleButtonGlossary values={['Words', 'Categories']} onClick= {() => setShow(!show)}/>
                    <BasicBtn
                        size="md"
                        fontWeight={700}
                        backgroundColor="var(--celeste600)"
                        colorText="var(--white)"
                        text="New Category"
                    />
                </div>
                <div className={styles.space}></div>
                {show ?
                    (
                    <div className={styles.containerBodyGlossary }>
                        <div>
                        <div className={styles.tittle}>
                            <h2>Term sets simplify searching for definitions</h2>
                        </div>
                        <div className={styles.body}>
                            <p>With the term sets you can find definitions in a simple and easy way. You can associate multiple words within a Category.</p>
                        </div>
                        <div className={styles.elementsFooter}>
                        <InputSearch
                        size="lg"
                        type="text"
                        background="var(--white)"
                        text="Search Users by name or keyword..."
                        icon="MagnifyingGlass"
                        onChange={() => { }}
                        />
                        </div>
                        </div>

                        <img  className={styles.positionImg} src="https://res.cloudinary.com/deej0gb5b/image/upload/v1672684824/Group_45398_puoicf.png" alt="Categories" />
                    </div>
                    )
                    :
                   (
                    <div className={styles.containerBodyWords}>
                        <div>
                    <div className={styles.tittle}>
                        <h2>If you are looking for definitions of a term, find it here</h2>
                    </div>
                    <div className={styles.body}>
                        <p>If you need clarification on a word or just want to brush up on your team knowledge, our glossary is here for you.</p>
                    </div>
                    <div className={styles.elementsFooter}>
                        <InputSearch
                        size="sm"
                        type="text"
                        background="var(--white)"
                        text="Search Users by name or keyword..."
                        icon="MagnifyingGlass"
                        onChange={() => { }}
                        />
                        <InputCategories />
                        </div>


                </div>
                <img className={styles.positionImgWords}  src="https://res.cloudinary.com/deej0gb5b/image/upload/v1672687254/Group_45280_uxdafp.png" alt="Categories" />

                </div>
                   )
                }

            </div>

        </>
    )
}

export default BannerGlossary