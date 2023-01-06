import { useEffect, useContext, useState, createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Context from "../context/Context";
import styles from "../assets/css/users.module.css";
import H2 from "../components/Typhography/H2";
import BasicBtn from "../components/Button/BasicButton/BasicButton";
import { InputSearch } from "../components/InputSearchs/InputSearch";
import Modal from "../components/Modal";
import ModalNewUser from "../components/Modal/ModalNewUser/ModalNewUser";
import CardsTable from "../components/CardsUserTable/CardsUserTable";
import { SelectAll } from "../components/Button/SelectAll/SelectAll";
import { CreateMessage } from "../components/MessageNewUser";
import { getUsersDataCards } from "../hooks/useUsers";
import { RoundBtn } from "../components/Button/RoundButton/RoundButton";
import Table from "../components/Table";
import { User } from "../components/Table/interface";
import { BtnDeleteUser } from "../components/Button/BtnDeleteUser/BtnDeleteUser";
import ModalDelete from "../components/Modal/ModalDelete/ModalDelete";
import { TableContext } from "../context/TableContext";
import { MessageNewUser } from "../components/MessageNewUser/MessageNewUser";


export const UsersPage = () => {
  const { state } = useContext(TableContext)
  const { deleteUser } = state
  const [isOpenModalNewUser, setOpenModalNewUser] = useState<boolean>(false);
  const [Message, setMessage] = useState(false)
  const [OpenModalDeleteUser, setIsOpenModalDeleteUser] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(true);
  const [checkAll, setcheckAll] = useState<boolean>(false);
  const { isReady } = useContext(Context);
  const { isAuthenticated } = useAuth0();
  const { data, refetch } = getUsersDataCards();
  const [successModal, setsuccessModal] = useState<{success: boolean, message: string}>()
  
  const handleSuccessModal = (success: boolean, message: string)=> {
    setsuccessModal({success, message})
  }

 /*  const initialValue = {
    name: ''
  }
  const [user, setUser] = useState({name:'denisse'})
  const { data, refetch, isLoading, isFetching } = searchUsersData(user);
  

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
     setUser(
      { ...user, [e.target.name]: e.target.value }
    ) 
    setUser(initialValue)
    console.log(user)
  } */

  useEffect(() => {
      !isOpenModalNewUser
                ?
                null
                :
      setMessage(true)

    
  }, [ isOpenModalNewUser])
  
  

  useEffect(() => {
  }, [show]);


  if (!isReady) {
    return <></>;
  }

  return (
    <>
      <div style={{ backgroundColor: "#F8FAFC" }}>
        <div className={styles.containerUser}>
          <div className={styles.containerHeaderUsers}>
            <div className={styles.titleUsers}>
              <H2 variant="bold">Users</H2>
              <BasicBtn
                size="md"
                fontWeight={700}
                backgroundColor="var(--celeste700)"
                colorText="var(--white)"
                text="New User"
                onClick={() => {
                  setOpenModalNewUser(true);
                }}
              />
            </div>
            <div className={styles.spaceText}></div>
          </div>
          <div className={styles.containerSearch}>
            <InputSearch
              size="md"
              background="var(--slate100)"
              type="text"
              text="Search Users by name or keyword..."
              icon="MagnifyingGlass"
              onChange={() => { }}
            />
            <div className={styles.roundsButton}>
              {
                deleteUser && <BtnDeleteUser iconName="Trash" onClick={() => setIsOpenModalDeleteUser(true)} />

              }
              {
                show
                  ?
                  null :
                  <SelectAll isChecked={(checked) => setcheckAll(checked)} />
              }
              <RoundBtn
                iconName="ListDashes"
                onClick={() => setShow(true)}
                weight="regular"
                height={2}
                width={2}
                padding={0.6}
              />
              <RoundBtn
                iconName="SquaresFour"
                onClick={(show) => setShow(!show)}
                weight="regular"
                height={2}
                width={2}
                padding={0.6}
              />
              <div style={{ marginLeft: 24 }}>
                <RoundBtn
                  iconName="DotsThree"
                  weight="bold"
                  height={2.5}
                  width={2.5}
                  padding={0.3}
                />
              </div>

            </div>
          </div>

          {show ? (
            <div className={styles.containerTable}>
              <Table />
            </div>
          ) : (
            <div className={styles.containerCard}>
              {data &&
                data.users.map((item: User) => (
                  <CardsTable
                    key={item.id}
                    checked={checkAll}
                    name={`${item.name} ${item.lastname} `}
                    email={item.email}
                    phone={item.phone}
                    country={item.timezone}
                  />
                ))}
            </div>
          )}
        </div>
       
      </div>
      <Modal
        callback={(Open) => setOpenModalNewUser(Open)}
        isOpen={isOpenModalNewUser}
      >
        <ModalNewUser size="md" textHeader="New User" onSuccess={handleSuccessModal} />
      </Modal>
      {
        successModal?.success &&
        <MessageNewUser 
        message={successModal.message}
        onClick={()=>{setsuccessModal({success: false, message:''})}}/> //resetear el estado
      }
      <Modal callback={(Open) => setIsOpenModalDeleteUser(Open)} isOpen={OpenModalDeleteUser}>
        <div className={styles.deleteModal}>
          <ModalDelete
            title='Delete Users'
            body='The users you selected will be permanently deleted, do you want to continue?'
            user={deleteUser}
          />
        </div>
      </Modal>


    </>
  );
};
