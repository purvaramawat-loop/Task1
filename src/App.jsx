import { HashRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
import File from "./Components/File.jsx";


const App = () => {

  return (
      
    <HashRouter>
       <Routes>
            <Route path="/" element={<File/>} />

       </Routes>
    </HashRouter>
    
  )
}

export default App

