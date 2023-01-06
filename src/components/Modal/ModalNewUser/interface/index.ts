import { MouseEvent, MouseEventHandler } from "react";

export interface ModalNew{
    size:'sm'|'md'|'xl',
    textHeader?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>,
    onSuccess?: (success: boolean, message: string)=> void
    
}