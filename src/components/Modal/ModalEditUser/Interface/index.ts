import { MouseEvent, MouseEventHandler, ReactElement } from "react";

export interface ModalEditProps {
    size:'sm'|'md'|'xl',
    textHeader?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>
    
}