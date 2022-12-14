import React, { ReactElement } from 'react'

export const Tr = ({children}:{children:ReactElement|ReactElement[]}) => {
    return (
        <tr style={{margin:0, padding:0,border:'none'}}>{children}</tr>
    )
}
