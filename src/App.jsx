import { BrowserRouter, Routes, Route} from "react-router-dom"
import React from "react"
import CountryDetails from "./pages/CountryDetails"
import CountryList from "./pages/CountryList"
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={ <CountryList />}   />
        <Route path="/country/:name"  element={ <CountryDetails />}   />


      </Routes>
    </BrowserRouter>

  )
}

export default App
