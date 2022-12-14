import { MouseEvent, MouseEventHandler } from "react";

export interface HomeCards{
    header?:string,
    body?:string,
    onClick?:MouseEventHandler<HTMLDivElement>,
}