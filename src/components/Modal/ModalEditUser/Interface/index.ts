import { MouseEvent, MouseEventHandler, ReactElement } from "react";
import { User } from "../../../Table/interface";

export interface ModalEditProps {
    size:'sm'|'md'|'xl',
    textHeader?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>
    user: User
}