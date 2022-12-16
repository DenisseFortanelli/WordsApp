import { MouseEvent, MouseEventHandler } from "react";

export interface AvatarUsersProps{
    size:'sm'|'md'|'lg'|'xl',
    imageSrc?:string,
    isLoading?:boolean,
    backgroundColor?:string,
    text?:string,
    createBy?:string,
    emailUser?:string,
    onClick?:MouseEventHandler<HTMLDivElement>,
    numberOfCharacters?:1|2
}