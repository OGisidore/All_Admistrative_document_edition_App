import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import { Home } from './pages/Home'
import EditionPage from './pages/EditionPage/EditionPage'



const App: React.FC = () => {
  return (
    <BrowserRouter>
       <div className=" w-full  flex flex-col items-center ">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<EditionPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
