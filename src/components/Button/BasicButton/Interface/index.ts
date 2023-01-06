import { MouseEvent, MouseEventHandler } from "react";

export interface BasicButton{
    size:'sm'|'md'|'lg'|'xl',
    backgroundColor?:string,
    borderColor?:string,
    fontWeight?:number,
    colorText?:string,
    text?:string,
    type?:'submit'|'reset',
    onClick?: ((isOpenModal: boolean) => boolean | void | undefined) | undefined |any,
}