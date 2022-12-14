import { ChangeEvent, MouseEventHandler, ReactElement, ReactNode } from "react"

export type Params = {
    [key: string]: any
}

export interface ColumnsProps{
    field:string,
    headerName:string,
    width:string | number,
    renderCell?: (params:Params, action:(e?:ChangeEvent<HTMLInputElement>)=>void)=>ReactNode | ReactElement
    actionsItem?: (params:Params, action:()=>void)=>ReactNode | ReactElement
}

export interface User {
    auth0_id: null;
    birthday: string;
    email:    string;
    id:       string;
    image:    Image;
    is_admin: boolean;
    language: string;
    lastname: string;
    name:     string;
    phone:    string;
    time:string;
    zone:string;
}

export interface TableFooterProps <Data> { 
    callBack:(number:number)=>void, 
    range:number[], 
    setPage:any, 
    page:number, 
    slice:Data[],
    data:Data[]
}

export interface UserTable {
    data: User;
}

export interface Image {
    file_name:  string;
    updated_at: string;
}
