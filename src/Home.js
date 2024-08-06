
import HeroSection from './components/HeroSection'
import Intro from './components/Intro'
import styled from 'styled-components'
import './App.css'

import React, { useEffect,useState } from 'react'

const Home = () => {

  useEffect(() => {
    document.body.style.backgroundColor = "#fff"
}, [])

  return (
    <div>
      <div className="App">
      <Intro/>
      </div>
      <HeroSection/>
      
    </div>
  )
}

export default Home
