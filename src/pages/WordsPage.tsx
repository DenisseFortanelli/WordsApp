import { RefObject, useContext, useEffect, useRef, useState } from "react";
import styles from "../assets/css/glossary.module.css";
import BoxCategory from "../components/BoxCategory/BoxCategory";
import { ABCButton } from "../components/Button/ABCButton/ABCButton";
import { AlphabetUpperCase } from "../components/Button/ABCButton/utils/Alphabet";
import CardsGlossary from "../components/CardsGlossary/CardsGlossary";
import BannerGlossary from "../components/Images/BannerGlossary";
import { TermsCard } from "../components/TermsCard/TermsCard";
import { TableContext } from "../context/TableContext";
import { getCategoryData } from "../hooks/useCategory";
import { Category } from "../interface/FetchAllCategory";

export interface ItemsProps {
  text: string,
  category: string,
  description: string,
  user: string
}

const items: ItemsProps[] = [
  {
    text: 'Absolute phrase',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Alejandra Aguilar Escobar'
  },
  {
    text: 'Adverbial',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Ana Alma Escobar'
  },
  {
    text: 'Alternate claim',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Rosa Alma Escobar'
  },
  {
    text: 'Argument',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Rosa Alma Escobar'
  },
  {
    text: 'Adages',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Rosa Alma Escobar'
  },
  {
    text: 'Adverbial',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Carlos Rodríguez López'
  },
  {
    text: 'Alternate claim',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Carla Mejía Lara'
  },
  {
    text: 'Argument',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Carla Mejía Lara'
  },
  {
    text: 'Adages',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Denisse Fortanelli Cantero'
  },
  {
    text: 'Absolute phrase',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Denisse Fortanelli Cantero'
  },
  {
    text: 'Adverbial',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Denisse Fortanelli Cantero'
  },
  {
    text: 'Alternate claim',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Denisse Fortanelli Cantero'
  },
  {
    text: 'Argument',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Denisse Fortanelli Cantero'
  },
  {
    text: 'Adages',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Mondragón García Juárez'
  },
  {
    text: 'Adverbial',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Verónica Arcos Soto'
  },
  {
    text: 'Alternate claim',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Verónica Arcos Soto'
  },
  {
    text: 'Argument',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Verónica Arcos Soto'
  },
  {
    text: 'Adages',
    category: 'Non-conformity',
    description: '(of an International Standard as a regional or national standard): publication of a national or regional normative document based on a relevant International Standard, or endorsement of an International Standard as having the same status as a national normative document, with any deviations from the International Standard identified (synonymous with "taking over": see ISO/IEC Guide 21-1:2005, definition 3.6, and ISO/IEC Guide 2: 2004, definition 10.1).',
    user: 'Orlando Gómez Correa'
  }
]

export const WordsPage = () => {
  /* const initialValue = {
    code: '',
    description: '',
    id: '',
    name: '',
    words: ''
  } */
  const { data, isFetching, isLoading } = getCategoryData()
  const [show, setShow] = useState<boolean>(false);
  const [category, setCategory] = useState<Category>()
  const { state } = useContext(TableContext)
  const { isShowGlossary } = state
  const [activeLetter, setactiveLetter] = useState('A')
  const termCardA = useRef(null)
  const termCardB = useRef(null)
  const termCardC = useRef(null)
  const termCardD = useRef(null)

  const handleClick = (item: Category) => {
    setShow(!show);
    setCategory(item)
  }
  useEffect(() => {
    console.log(activeLetter)
    console.log(termCardA)
    console.log(termCardB)
    console.log(termCardC)
    console.log(termCardD)
  }, [activeLetter])



  return (
    <div style={{ backgroundColor: "#F8FAFC" }}>
      <div className={styles.containerGlossary}>
        <BannerGlossary />
        {!isShowGlossary ?

          (
            <>
              <div className={styles.containerWords}>
                <div className={styles.abc}>
                  {AlphabetUpperCase.map(letter => <a href={`#${letter}`} key={letter}><ABCButton letter={letter} active={activeLetter === letter} onClick={() => setactiveLetter(letter)} /></a>)}
                </div>
              </div>
              <div className={styles.containerBody}>
                <div className={styles.containerMain}>
                  <TermsCard terms={items} header="A" active={activeLetter === "A"} ref={termCardA} />
                  <div className={styles.line}></div>
                  <TermsCard terms={items} header="B" active={activeLetter === "B"} ref={termCardB} />
                  <div className={styles.line}></div>
                  <TermsCard terms={items} header="C" active={activeLetter === "C"} ref={termCardC} />
                  <div className={styles.line}></div>
                  <TermsCard terms={items} header="D" active={activeLetter === "D"} ref={termCardD} />
                </div>
              </div>
            </>
          )
          :
          (
            <>
              {show &&
                <div style={{ marginTop: '2.4rem' }}>
                  <BoxCategory item={category} />
                </div>
              }

              <div className={styles.containerCategories}>

                <div className={styles.containerCard}>
                  {data &&
                    data.categories.map((item: Category) =>
                      <CardsGlossary
                        onClick={() => handleClick(item)}
                        key={item.name}
                        id={item.id}
                        header={item.name}
                        body={item.description}
                        number={item.words.length ? item.words.length : 0}
                        user={item.code}
                      ></CardsGlossary>)
                  }
                </div>
              </div>
              <br />
              <br />
              <br />
            </>)}
      </div>
    </div>
  )
}
