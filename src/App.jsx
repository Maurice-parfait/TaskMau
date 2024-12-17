import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/login" // page 
import Sinscrire from "./pages/sign-up" // page
import Acceuil from "./pages/accceuil" // page

export default function App() {

  return(
    <section className="">
      < BrowserRouter>
        <Routes>
          <Route path="/" element={ <Login/> } />
          <Route path="/sinscrire" element={ <Sinscrire/> } />
          <Route path="/Acceuil" element={ <Acceuil/> } />
        </Routes>
      </BrowserRouter>
    </section>
  )
}