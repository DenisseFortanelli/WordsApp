import { RouterApp } from './routes/RouterApp';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { ContextProvider } from './context/ContextProvider';
import { QueryClientProvider, QueryClient } from 'react-query'
import { Styles } from './interface';
import { useEffect, useState } from 'react';
import configStyles from './json/configStyles.json'

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;


export const App = () => {

  const [styleConfig, setStyleConfig] = useState({})

  const setStyles = (data:Styles) => {

    let {colors, fontSizes, fonts, spaces} = Object.assign(data)
    setStyleConfig({...colors, ...fontSizes, ...fonts, ...spaces})

  } 

  useEffect(() => {
    setStyles(configStyles)
  }, [])
  
  return (
    <Auth0Provider
      clientId={clientId}
      domain={domain}
      redirectUri={window.location.origin}
      useRefreshTokens={true}
      // TODO: recordar quitar el comentario 
      // audience="https://dev-znfmr804n76vwx88.us.auth0.com/api/v2/"
    >
      <ContextProvider>
        <BrowserRouter>
          <QueryClientProvider client={new QueryClient()}>
            <RouterApp />
          </QueryClientProvider>
        </BrowserRouter>
      </ContextProvider>
    </Auth0Provider>
  )
}
