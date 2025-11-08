import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// --- ¡¡¡IMPORTANTE!!! ---
// Coloca tu Ticket (API Key) aquí OTRA VEZ
const MI_TICKET = '02D55B3A-A5DA-4E1D-AA44-0862D2A68AD0'; // <-- ¡PON TU TICKET ACÁ!

function DetailPage() {
  // useParams() es un hook que lee la URL.
  // Saca el ":codigo" que definimos en App.jsx
  const { codigo } = useParams();

  // --- ESTADOS ---
  const [licitacion, setLicitacion] = useState(null); // Un objeto, no un array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // URL de la API para *una* licitación específica
  const API_URL = `https://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?codigo=${codigo}&ticket=${MI_TICKET}`;

  // --- EFECTO ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Error ${response.status}: No se pudo cargar la licitación`);
        }
        const data = await response.json();

        // La API devuelve un "Listado" con un solo ítem.
        // Accedemos a él en la posición [0]
        setLicitacion(data.Listado[0]); 

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [codigo]); // Se re-ejecuta si el `codigo` de la URL cambia

  // --- RENDERIZADO CONDICIONAL ---
  if (loading) {
    return <p className="text-gray-500">Cargando detalle...</p>;
  }

  if (error) {
    return <p className="text-red-600 font-bold">Error: {error}</p>;
  }

  if (!licitacion) {
    return <p>No se encontró la licitación.</p>;
  }

  // 3. Si todo salió bien, mostramos los detalles
  return (
    <div className="bg-white border p-6 rounded-lg shadow-md">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        &larr; Volver al listado
      </Link>

      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {licitacion.Nombre}
      </h2>

      <p className="text-sm text-gray-500 mb-4">Código: {licitacion.CodigoExterno}</p>

      <div className="space-y-2">
        <p><strong>Comprador:</strong> {licitacion.Comprador?.NombreOrganismo}</p>
        <p><strong>Estado:</strong> {licitacion.Estado}</p>
        <p><strong>Fecha de Cierre:</strong> {new Date(licitacion.FechaCierre).toLocaleString('es-CL')}</p>
      </div>
    </div>
  );
}

export default DetailPage;