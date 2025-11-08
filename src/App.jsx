import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import ErrorBoundary from './components/ErrorBoundary' // <-- 1. IMPORTA

function App() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Dashboard de Compras Públicas
      </h1>

      <ErrorBoundary> {/* <-- 2. ENVUELVE TUS RUTAS */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/licitacion/:codigo" element={<DetailPage />} />
        </Routes>
      </ErrorBoundary> {/* <-- 3. CIERRA ACÁ */}

    </div>
  )
}

export default App