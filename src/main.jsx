import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './componentes/Home/Home.jsx'
import Nosotros from './componentes/Nosotros/Nosotros.jsx'
import Contacto from './componentes/Contacto/Contacto.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Home /> }/> 
        <Route path='/nosotros' element={<Nosotros /> }/> 
        <Route path='/contacto' element={<Contacto /> }/> 
      </Routes>
    </Router>
  </StrictMode>

)
