import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home.jsx'
import { ThemeProvider } from "./Components/theme-provider"
import Footer from './Components/Footer.js'
import './App.css'

export default function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar></Navbar>
        <Home></Home>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}
