import React, { ReactElement } from 'react'

export const Tr = ({children}:{children:ReactElement|ReactElement[]}) => {
    return (
        <tr>{children}</tr>
    )
}