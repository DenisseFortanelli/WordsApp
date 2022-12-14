import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react'
import { AddAccessTokenInterceptor } from '../helpers/InterceptorsToken';
import Context from './Context';


interface Props {
	children: JSX.Element | JSX.Element[]
}

export const ContextProvider = ({ children }: Props) => {
	const [isReady, setIsReady] = useState(false)

	const { getAccessTokenSilently } = useAuth0()

	useEffect(() => {
		AddAccessTokenInterceptor(getAccessTokenSilently)
		setIsReady(true)
	}, [])

	return (
		<Context.Provider value={{ isReady }}>
			{children}
		</Context.Provider>
	)
}
