import { MouseEvent, MouseEventHandler } from "react";

export interface CardsGlossaryProps{
    id?:string,
    header?:string,
    body?:string,
    number?:number,
    user?:string,
    onClick?:MouseEventHandler<HTMLDivElement>,
}