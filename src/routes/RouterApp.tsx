import { useEffect, useState } from 'react';
import { Routes, Route, Navigate, } from 'react-router-dom'
import NavBar from '../components/NavBar';
import { Styles } from '../interface';
import { HomePage } from '../pages/HomePage'
import { LogsPage } from '../pages/LogsPage';
import { UsersPage } from '../pages/UsersPage';
import { WordsPage } from '../pages/WordsPage';
import configStyles from '../json/configStyles.json'
import globalStyles from '../App.module.css'


export const RouterApp = () => {

	const [styleConfig, setStyleConfig] = useState({})

    const setStyles = (data:Styles) => {

    let {colors, fontSizes, fonts, spaces} = Object.assign(data)
    setStyleConfig({...colors, ...fontSizes, ...fonts, ...spaces})

  } 

  useEffect(() => {
    setStyles(configStyles)
  }, [])

	return (
		<>
		<div style={styleConfig} className={globalStyles.appContainer}>
		<NavBar />
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/users' element={<UsersPage />} />
			<Route path='/words' element={<WordsPage />} />
			<Route path='/logs' element={<LogsPage />} />

			{/* Ruta definida por default */}
			{/* <Route path='/*' element={ <RegistrarUsPage /> }/> */}

			<Route path='*' element={ <Navigate replace to='/' />}/>
		</Routes>
		</div>
		</>
	)
}
