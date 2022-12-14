import React, { ReactNode } from 'react'

interface Body2Props {
    children: ReactNode, 
    variant: 'light'|'regular'|'medium'|'bold'|'black',
    color: string,
    size: 1.4
}

const weights = {
    light:300,
    regular:400,
    medium:500,
    bold:700,
    black:900
}

// const sizes = {
//     first: 14,
//     second: 16
// }

const Body2 = ({children, variant, color, size}:Body2Props) => {
    return (
        <p style={{fontWeight: weights[variant], color: color, fontSize: `${size}rem`}}>{children} </p>
    )
}

export default Body2