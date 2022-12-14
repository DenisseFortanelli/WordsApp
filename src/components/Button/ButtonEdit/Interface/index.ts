import { MouseEvent, MouseEventHandler } from "react";

export interface ButtonEdit{
    size:'sm'|'md'|'lg'|'xl',
    backgroundColor?:string,
    text?:string,
    onClick?:MouseEventHandler<HTMLButtonElement>,
}