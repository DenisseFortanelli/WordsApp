import React, { ReactNode } from 'react'

interface H2Props {
    children:ReactNode, 
    variant:'light'|'regular'|'medium'|'bold'|'black'
}

const weights = {
    light:300,
    regular:400,
    medium:500,
    bold:700,
    black:900
}

const H2 = ({children, variant}:H2Props) => {
    return (
        <h2 style={{fontWeight:weights[variant]}}>{children}</h2>
    )
}

export default H2