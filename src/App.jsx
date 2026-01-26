import { useState } from 'react'
import './styles/main.scss'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CurrentWeather from './components/CurentWeather'

function App() {

  return (
    <>
      <Header />
      <h1>How is the sky looking today?</h1>
      <SearchBar />

      <CurrentWeather />
      
    </>
  )
}

export default App
