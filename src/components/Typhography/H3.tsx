import React, { ReactNode } from 'react'

interface H3Props {
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

const H3 = ({children, variant}:H3Props) => {
    return (
        <h3 style={{fontWeight:weights[variant]}}>{children}</h3>
    )
}

export default H3