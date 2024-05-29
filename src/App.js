import React from 'react'
import './scss/app.scss';
import Home from './pages/Home';
import Work from './pages/Work';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter basename="/PortfolioReact">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutme' element={<AboutMe/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<NoPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App