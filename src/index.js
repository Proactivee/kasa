import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Error from './pages/Error'
import About from './pages/About'
import Logement from './pages/Logement'
import GlobalStyle from './utils/style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="/logement/:id" element={<Logement />}></Route>
        <Route path="*" element={<Error />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
