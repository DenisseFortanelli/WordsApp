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
import ModalDelete from "../components/Modal/ModalDelete/ModalDelete";
import { BtnDeleteUser } from "../components/Button/BtnDeleteUser/BtnDeleteUser";

interface TableContextProps {
  currentUser: User | undefined;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  isOpenModalEditUser: boolean;
  setIsOpenModalEditUser: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUser: User | undefined;
  setDeleteUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

export const TableContext = createContext<TableContextProps>(
  {} as TableContextProps
);
const TableProvider = TableContext.Provider;

export const UsersPage = () => {
  const [isOpenModalEditUser, setIsOpenModalEditUser] = useState(false);
  const [deleteUser, setDeleteUser] = useState<User>();
  const [currentUser, setCurrentUser] = useState<User>();
  const [OpenModalDeleteUser, setOpenModalDeleteUser] = useState(false)
  const { data } = getUsersDataCards();
  const { isAuthenticated } = useAuth0();
  const { isReady } = useContext(Context);
  const [isOpenModalNewUser, setOpenModalNewUser] = useState(false);
  const [show, setShow] = useState(true);
  const [checkAll, setcheckAll] = useState(false);

  useEffect(() => {
    // if
    isAuthenticated;
  }, [isAuthenticated, isReady]);

  useEffect(() => {
    console.log(isOpenModalEditUser)
  }, [isOpenModalEditUser]);

  if (!isReady) {
    return <></>;
  }
  /* console.log(data) */

  return (
    <TableProvider
      value={{
        currentUser,
        setCurrentUser,
        isOpenModalEditUser,
        setIsOpenModalEditUser,
        deleteUser,
        setDeleteUser,
      }}
    >
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
              type="text"
              text="Search Users by name or keyword..."
              icon="MagnifyingGlass"
              onChange={() => {}}
            />
            <div className={styles.trashBtn}>
              {
                deleteUser && <BtnDeleteUser iconName="Trash" onClick={() => setOpenModalDeleteUser(true)} />
              }
            </div>
            <div className={styles.roundsButton}>
            
            {
            show
            ?
            null:
            <SelectAll isChecked={(checked)=>setcheckAll(checked)}/>
          }
            <RoundBtn iconName="ListBullets" onClick={() => setShow(true)} />
              <RoundBtn
                iconName="SquaresFour"
                onClick={(show) => setShow(!show)}
              />
            <div style={{ marginLeft: 24 }}>
              <RoundBtn iconName="DotsThree" />
            </div>
          </div>
          </div>

          {show ? (
            <div className={styles.containerTable}>
              <Table/>
            </div>
          ) : (
            <div className={styles.containerCard}>
              {data! &&
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
        <div className={styles.floatingBtn}>
          <CreateMessage />
        </div>
      </div>
      <Modal
        callback={(Open) => setOpenModalNewUser(Open)}
        isOpen={isOpenModalNewUser}
      >
        <ModalNewUser size="md" textHeader="New User" />
      </Modal>
      <Modal callback={(Open) => setOpenModalDeleteUser(Open)} isOpen={OpenModalDeleteUser}>
        <div className={styles.deleteModal}>
          <ModalDelete
            title='Delete Users'
            body='The users you selected will be permanently deleted, do you want to continue?'
          />
        </div>
      </Modal>
    </TableProvider>
  );
};
