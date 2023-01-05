import { MouseEventHandler, ReactElement, useEffect, useRef, useState } from "react";
import Body2 from "../../Typhography/Body2";
import styles from './ToggleButtonGlossary.module.css'

interface ToggleButtonGlossaryProps {
  onClick?: MouseEventHandler<HTMLDivElement>
  values: string[]
  onChange?: (selected:{isActive:boolean, value:String})=>void 
}

export const ToggleButtonGlossary = ({values, onChange , onClick}: ToggleButtonGlossaryProps) => {

  const [isActive, setIsActive] = useState<boolean>(true)

  useEffect(() => {
   onChange && onChange ({isActive : isActive, value: isActive ? values[0] : values[1]})
  }, [isActive])
  
  return (
    <div className={styles.container} onClick={()=> setIsActive(!isActive)}>
      <div className={styles.containerTwo} onClick={onClick}>
        <Body2
          variant='bold'
          color={isActive ? 'var(--neutral500)' :  'var(--neutral900)'}
          size={1.4}
          >
          {values[0]}
          
        </Body2>
      </div>

      <div className={styles.containerTwo} onClick={onClick}>
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