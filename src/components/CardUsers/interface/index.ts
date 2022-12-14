import { MouseEvent, MouseEventHandler } from "react";

export interface CardUsers{
    name?:string,
    email?:string,
    phone?:string,
    country?:string,
    onClick?:MouseEventHandler<HTMLDivElement>,
}