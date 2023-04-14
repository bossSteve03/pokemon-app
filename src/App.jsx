import './App.css'
import { HomePage } from './src/pages'
import { Nav } from './layouts'
import { Routes, Route } from 'react-router-dom'
import * as Context from "./contexts";

function App() {

  return (
    <Context.__Provider>
      <Routes>
        <Route path='/' element={<Nav />} >
          <Route index element={<HomePage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Context.__Provider>
  )
}

export default App
