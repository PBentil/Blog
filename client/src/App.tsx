// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//pages 
import Home from './pages/Home'
import About from './pages/About';
import Article from './pages/Article';
import ArticlesList from './pages/ArticlesList';
import NotFound from './pages/NotFound';
//components
import Navbar from './components/NavBar';

function App() {


  return (
      <Router>
        <Navbar />
        <div className='max-w-screen-md mx-auto pt-20'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/ArticlesList' element={<ArticlesList />} />
            <Route path='/Article/:name' element={<Article />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>
  )
}

export default App 
