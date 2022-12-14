import { MouseEventHandler, ReactElement, useEffect, useRef, useState } from "react";
import Body2 from "../../Typhography/Body2";
import styles from './ToggleButton.module.css'

interface ToggleButtonProps {
  onClick?: MouseEventHandler<HTMLDivElement>
  values: string[]
  onChange?: (selected:{isActive:boolean, value:String})=>void 
}

export const ToggleButton = ({values, onChange }: ToggleButtonProps) => {

  const [isActive, setIsActive] = useState<boolean>(true)
  useEffect(() => {
   onChange && onChange ({isActive : isActive, value: isActive ? values[0] : values[1]})
  }, [isActive])
  
  return (
    <div className={styles.container} onClick={()=> setIsActive(!isActive)}>
      <div className={styles.containerTwo}>
        <Body2
          variant='bold'
          color={isActive ? 'var(--neutral900)' :  'var(--neutral500)'}
          size={1.4}
          >
          {values[0]}
          
        </Body2>
      </div>

      <div className={styles.containerTwo}>
        <Body2
          variant='bold'
          color={!isActive ? 'var(--neutral900)' :  'var(--neutral500)' }
          size={1.4}>
          {values[1]}
        </Body2>
      </div>

      <div className={styles.containerThree} style={{transform:`translateX(${isActive ? 0 : 7.1}rem)`}}>
      </div>
    </div>
  )
}

export default ToggleButton
// ToggleButton.defaultProps = {
// 	values:[
//     'Admin','Editor'
//    ]
// }