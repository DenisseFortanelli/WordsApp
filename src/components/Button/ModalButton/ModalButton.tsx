import { MouseEvent, MouseEventHandler, ReactElement, useContext, useEffect, useState } from "react";
import * as icons from 'phosphor-react'
import styles from './ModalButton.module.css'
import Modal from "../../Modal";
import ModalEditUser from "../../Modal/ModalEditUser/ModalEditUser";
import { User } from "../../Table/interface";
import { TableContext } from '../../../context/TableContext';

interface ModalButtonProps {
    iconName?: string | ReactElement,
    onClick?: (user: User, isOpenModal: boolean) => void,
    user: User
}

export const ModalButton = ({ iconName, onClick, user }: ModalButtonProps) => {
    const { setCurrentUser, setIsOpenModalEditUser, state } = useContext(TableContext)
    const { isOpenModalEditUser } = state
    let PhosphorIcon: any = icons[iconName as keyof typeof icons]
    return (
        <div style={{ width: 27, height: 27 }} className={styles.containerButton} onClick={() => { setIsOpenModalEditUser(!isOpenModalEditUser); setCurrentUser(user) }}>
            <PhosphorIcon size='100%'  weight='light' className={styles.propsIcon} />
        </div>

    )
}