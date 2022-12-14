import React, { ReactNode } from 'react'

interface H1Props {
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

const H1 = ({children, variant}:H1Props) => {
    return (
        <h1 style={{fontWeight:weights[variant]}}>{children}</h1>
    )
}

export default H1