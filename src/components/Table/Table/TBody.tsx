import React, { ReactElement } from 'react'

const Tbody = ({children}:{children:ReactElement|ReactElement[]}) => {
    return (
        <tbody>{children}</tbody>
    )
}

export default Tbody