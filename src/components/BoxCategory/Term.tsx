import { ReactElement, ReactNode, useState } from "react"
import styles from './BoxCategory.module.css'
import { BoxCategoryProps } from "./BoxCategory"
import { PopOver } from "./PopOver"
import { Category } from "../../interface/FetchAllCategory"


export interface TermProperties{
    name:string,
    description: string,
}

export const Term = ({name, description}: { name: string, description: string}) => {
    const [openPopOver, setOpenPopOver] = useState<boolean>(false)
  return (
    <div className={styles.containerTerm} onMouseUp={()=>setOpenPopOver(true)} onMouseLeave={()=>setOpenPopOver(false)}>
    <p>{name}</p>
    {
        openPopOver&&
        <div className={styles.containerPopOver}>
        <PopOver name={name} description={description}/>
        </div>
    }
    </div>


  )
}