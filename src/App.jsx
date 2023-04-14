import React from 'react'
// import './App.css'
import { HomePage, NotFoundPage, PokemonPage } from './pages'
import { Nav } from './layout'
import { Routes, Route } from 'react-router-dom'
// import * as Context from "./contexts";

function App() {

  return (
      <Routes>
        <Route path='/' element={<Nav />} >
          <Route index element={<HomePage />} />
          <Route path='/pokemon' element={<PokemonPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
  )
}

export default App
