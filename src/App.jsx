import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router';
import './App.css'


const App = () => {

  return (
    <BrowserRouter>
      <Routes> 
        <Route element={<Layout/>}> 
          <Route path='/'/>
        </Route>
      </Routes>      
    </BrowserRouter>
  )
}

export default App
