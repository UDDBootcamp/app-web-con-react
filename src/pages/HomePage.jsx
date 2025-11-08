import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// --- ¡¡¡IMPORTANTE!!! ---
// Coloca tu Ticket (API Key) aquí
const MI_TICKET = '02D55B3A-A5DA-4E1D-AA44-0862D2A68AD0'; // <-- ¡PON TU TICKET ACÁ!

// URL de la API (ejemplo: busca las 10 últimas licitaciones)
const API_URL = `https://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json?cantidad=10&ticket=${MI_TICKET}`;

function HomePage() {
  // --- ESTADOS ---
  // 1. Para guardar las licitaciones (un array vacío al inicio)
  const [licitaciones, setLicitaciones] = useState([]);
  // 2. Para saber si está "cargando..."
  const [loading, setLoading] = useState(true);
  // 3. Para guardar cualquier error
  const [error, setError] = useState(null);

  // --- EFECTO ---
  // Esto se ejecuta UNA SOLA VEZ cuando el componente se carga
  useEffect(() => {

    // Definimos la función asíncrona para traer los datos
    const fetchData = async () => {
      try {
        // Hacemos la petición (fetch) a la URL de la API
        const response = await fetch(API_URL);

        // Si la respuesta no fue exitosa (ej: error 404, 500)
        if (!response.ok) {
          throw new Error(`Error ${response.status}: No se pudo conectar a la API`);
        }

        // Convertimos la respuesta a JSON
        const data = await response.json();

        // Guardamos la lista de licitaciones en nuestro estado
        // (Según la demo, los resultados están en `data.Listado`)
        setLicitaciones(data.Listado || []); 

      } catch (err) {
        // Si algo falla, guardamos el error
        setError(err.message);
      } finally {
        // Haya éxito o error, dejamos de cargar
        setLoading(false);
      }
    };

    // Ejecutamos la función que acabamos de definir
    fetchData();

  }, []); // El array vacío `[]` significa "ejecútate solo una vez"

  // --- RENDERIZADO CONDICIONAL ---

  // 1. Si está cargando, mostramos un mensaje
  if (loading) {
    return <p className="text-gray-500">Cargando licitaciones...</p>;
  }

  // 2. Si hubo un error, mostramos el error
  if (error) {
    return <p className="text-red-600 font-bold">Error: {error}</p>;
  }

  // 3. Si todo salió bien, mostramos la lista
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Últimas Licitaciones</h2>

      {/* Usamos un `ul` (lista desordenada) para mostrar los datos */}
      <ul className="space-y-3">
        {licitaciones.map((item) => (
          <li key={item.CodigoExterno} className="border p-4 rounded-md shadow-sm hover:shadow-md bg-white">

            {/* El Link nos lleva a la página de detalle. 
              Usamos `item.CodigoExterno` como el ID único.
            */}
            <Link 
              to={`/licitacion/${item.CodigoExterno}`} 
              className="text-lg font-semibold text-blue-700 hover:underline"
            >
              {item.Nombre}
            </Link>

            <p className="text-gray-600 mt-1">Código: {item.CodigoExterno}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;