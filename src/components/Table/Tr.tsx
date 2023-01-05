import React, { ReactElement } from 'react'

export const Tr = ({children, className}:{children:ReactElement|ReactElement[], className:string}) => {
    return (
        <tr className={className}>{children}</tr>
    )
}