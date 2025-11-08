import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    // Damos formato con Tailwind: centrado y con espacio
    <div className="container mx-auto p-4 max-w-4xl"> 
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Dashboard de Compras Públicas
      </h1>

      <Routes> {/* Aquí se define el mapa */}
        <Route path="/" element={<HomePage />} />
        <Route path="/licitacion/:codigo" element={<DetailPage />} /> 
        {/* :codigo es el ID que cambia */}
      </Routes>
    </div>
  )
}

export default App