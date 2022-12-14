import { createContext } from 'react'

interface Props {
	isReady: boolean;
}

const Context = createContext({} as Props)

export default Context;