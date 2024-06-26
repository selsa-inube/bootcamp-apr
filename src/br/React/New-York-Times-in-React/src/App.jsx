import './App.css'
import React, { useEffect } from 'react';
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Main from './Components/Main'
import Section from './Components/Section'

function App() {
useEffect(() => {
    document.title = "New York Times"; // Cambia el título de la página
  }, []);

  return(
    <>
      <SideBar />
      <body>
        <Header /> 
        <Main />   
        <Section />    
      </body>
    </>
  )
}

export default App
