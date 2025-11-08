import { Link } from 'react-router-dom';

function DetailPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Detalle de Licitación</h2>
      <p>Aquí irá la información detallada de la licitación...</p>
      <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">
        &larr; Volver al inicio
      </Link>
    </div>
  )
}

export default DetailPage;