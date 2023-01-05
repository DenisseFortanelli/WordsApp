import { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import RectangleImg from "../components/Images/RectangleImg";
import styles from "../assets/css/home.module.css";
import ButtonEdit from "../components/Button/ButtonEdit/ButtonEdit";
import HomeCards from "../components/HomeCards/HomeCards";
import H2 from "../components/Typhography/H2";
import H3 from "../components/Typhography/H3";
import CardUser from "../components/CardUsers/CardUsers";
import PaginationHome from "../components/PaginationHome/PaginationHome";
import Modal from "../components/Modal";
import ModalEditUser from '../components/Modal/ModalEditUser/ModalEditUser';
import Tags from '../components/Tags';
import OptionsHome from '../components/PaginationHome/OptionHome';


export const HomePage = () => {

  const { isLoading } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    console.log('isLoading')
  }, [isLoading])

  useEffect(() => {
    console.log(isOpenModal)
  }, [isOpenModal])

  if (isLoading) return <h1>Loading...</h1>;

  return (

    <>
      <div style={{ backgroundColor: "#F8FAFC" }}>
        <div className={styles.container}>
          <div className={styles.containerHeader}>
            <RectangleImg />
          </div>
          <div className={styles.containerBody}>
            <div className={styles.containerNameButtton}>
              <H2 variant="bold">Denisse Fortanelli</H2>
              <ButtonEdit
                /* onClick={() => { setIsOpenModal(true) }} */
                size="md"
                text="Edit User"
                backgroundColor="var(--celeste600)"
              />
            </div>
          </div>
          <div className={styles.containerBody}>
            <div className={styles.containerTags}>
              <Tags
                icon="EnvelopeSimple"
                size="md"
                text="denissefortanelli1402@gmail.com"
                backgroundColor="var(--neutral500)"
              />
              <Tags
                icon="Phone"
                size="md"
                text="442 234 4567"
                backgroundColor="var(--neutral500)"
              />
              <Tags
                size="md"
                text="Mexico City (GMT-5)"
                backgroundColor="var(--neutral500)"
              />
            </div>
          </div>

          <div className={styles.spaceText}></div>
          {/* <hr /> */}


          <div className={styles.containerNewWords}>
            <div className={styles.titleHome}>
              <H3 variant="bold">New Words</H3>
              <PaginationHome />
            </div>
            <div className={styles.containerCards}>
              <HomeCards
                header="Adjectival"
                body="A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ..."
              ></HomeCards>
              <HomeCards
                header="Collaborative conversations"
                body="A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ..."
              ></HomeCards>
              <HomeCards
                header="Dependent clause"
                body="A business unit is an independent entity within an organization, such as companies or locations. BUscan establish their own workspace and buy ..."
              ></HomeCards>
            </div>
          </div>

          <div className={styles.containerCategories}>
            <div className={styles.titleHome}>
              <H3 variant="bold">Categories</H3>
              <PaginationHome />
            </div>
            <div className={styles.containerCards}>
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

          <div className={styles.containerCategories}>
            <div className={styles.titleHome}>
              <H3 variant="bold">Users</H3>
              <PaginationHome />
            </div>
            <div className={styles.containerCards}>
              <CardUser
                name='Isaura Romero'
                email='isa.romero@company.mx'
                phone='+52 442 172 3740'
                country='Mexico City (GMT-5)'
              />
              <CardUser
                name='Jose Ramirez'
                email='joss.ramirez@company.mx'
                phone='+52 442 172 3740'
                country='Mexico City (GMT-5)'
              />
              <CardUser
                name='Roberto Mendoza'
                email='roberto@company.mx'
                phone='+52 442 172 3740'
                country='Mexico City (GMT-5)'
              />
              <CardUser
                name='Erika Lopez'
                email='erika.lopez@company.mx'
                phone='+52 442 172 3740'
                country='Mexico City (GMT-5)'
              />
            </div>
            <div className={styles.containerActions}>
              <div className={styles.titleHome}>
                <H3 variant="bold">Last Actions Registered</H3>
                <OptionsHome />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal callback={(Open) => setIsOpenModal(Open)} isOpen={isOpenModal}>
        <ModalEditUser
          size='md'
          textHeader='Edit User'
        />
      </Modal> */}
    </>
  );
};