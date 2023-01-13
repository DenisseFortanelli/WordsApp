import { MouseEventHandler, ReactElement, useContext, useEffect, useRef, useState } from "react";
import { TableContext } from "../../../context/TableContext";
import Body2 from "../../Typhography/Body2";
import styles from './ToggleButtonGlossary.module.css'

interface ToggleButtonGlossaryProps {
  onClick?: MouseEventHandler<HTMLDivElement>
  values: string[]
  onChange?: (selected:{isActive:boolean, value:String})=>void 
  active?: boolean
}

export const ToggleButtonGlossary = ({values, onChange , onClick, active}: ToggleButtonGlossaryProps) => {

  const [isActive, setIsActive] = useState<boolean>(active? active:true)
  const {setIsOpenModalNewCategory, setShowGlossary, state } = useContext(TableContext)
  const {isOpenModalNewCategory, isShowGlossary} = state

  useEffect(() => {
   onChange && onChange ({isActive : isActive, value: isActive ? values[0] : values[1]})
  }, [isActive])

  useEffect(() => {
    setShowGlossary(true)
  }, [])
  
  return (
    <div className={styles.container} onClick={()=> setIsActive(!isActive)}>
      <div className={styles.containerTwo} onClick= {() => setShowGlossary(!isShowGlossary)}>
        <Body2
          variant='bold'
          color={isActive ? 'var(--neutral500)' :  'var(--neutral900)'}
          size={1.4}
          >
          {values[0]}
          
        </Body2>
      </div>

      <div className={styles.containerTwo} onClick= {() => setShowGlossary(!isShowGlossary)}>
        <Body2
          variant='bold'
          color={!isActive ? 'var(--neutral500)' :  'var(--neutral900)' }
          size={1.4}>
          {values[1]}
        </Body2>
      </div>


      <div className={styles.containerThree} style={{transform:`translateX(${isActive ? 9.3: 0}rem)`}}>
      </div>
    </div>
  )
}

export default ToggleButtonGlossary
// ToggleButton.defaultProps = {
// 	values:[
//     'Admin','Editor'
//    ]
// }