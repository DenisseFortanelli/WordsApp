import { MouseEvent, MouseEventHandler } from "react";

export interface TimeZoneProps{
    size:'sm'|'md'|'lg'|'xl',
    time:string,
    zone:string,
}