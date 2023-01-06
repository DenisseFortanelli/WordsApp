import styles from './InputNameCategory.module.css'
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { Backspace, CaretDown, Smiley } from 'phosphor-react';
import Picker  from '@emoji-mart/react';
import  data  from '@emoji-mart/data';
import { E, P } from '../../Iconography/Flags';
import { LoDashStatic } from 'lodash';

interface ItemsProps {
    text: string, checked: boolean
}

interface valueInput{
    emoji:string,value:string
}

export interface InputNameCategoryProps {
    defaultValue?: string,
    onChange?: (e: valueInput)=>void,
    name?: string,
    value?: string,
    eventHandler?: ChangeEventHandler<HTMLSelectElement>
}
export interface ItemSelectProps {
    text: string,
    checked?: boolean,
    handleCheck?: ChangeEventHandler<HTMLInputElement>
}

export const InputNameCategory = ({ defaultValue, onChange, name, value }: InputNameCategoryProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [valueInput, setValueInput] = useState<valueInput>({
        emoji:'',
        value:''
    })
    const [firstItem, setFirstItem] = useState<ItemsProps | undefined>()

   /*  const handleValue =(eventInput?:ChangeEvent<HTMLInputElement>|undefined ,eventPicker?:any)=>{
        console.log(eventPicker)
        eventInput && console.log(eventInput.target.value)
    } */

    useEffect(() => {
        onChange && onChange(valueInput)
    }, [valueInput])
    

    return (
        <div>
            <label className={styles.tittleHeader}>Name of Category</label>
            <div className={styles.multiSelect}>
                <div className={styles.containerSelect} onClick={() => setIsOpen(!isOpen)}>
                        { valueInput.emoji === '' ?
                            <Smiley size={20}/>:
                            <p>{valueInput.emoji}</p>}
                        <CaretDown size={20} />
                        <input type="text" className={styles.containerText} onChange={(e)=> setValueInput({...valueInput, value:e.target.value})}/>
                </div>
                {isOpen &&
                    <div className={styles.dropdown}>
                        <Picker data={data} theme='light' previewPosition='none' onEmojiSelect={(e:any)=> setValueInput({...valueInput, emoji:e.native})}/>
                    </div>
                }
            </div>
        </div>
    )
}

const ItemSelect = ({ text, checked, handleCheck }: ItemSelectProps) => {
    return (
        <div className={styles.containerItem}>
            <input type="checkbox" onChange={handleCheck} checked={checked} />
            <p>{text}</p>
        </div>
    )
}