# Proyecto 5: Dashboard de Licitaciones con React

Esta es una aplicación web front-end construida con React, diseñada para consumir y mostrar datos de la API pública de Mercado Público de Chile.

## Descripción del Proyecto

El objetivo principal de esta aplicación es conectarse al endpoint de licitaciones de la API de Mercado Público para obtener y visualizar los **10 últimos registros (licitaciones) publicados**.

La aplicación presenta esta lista en la página principal. Cada elemento de la lista es navegable, permitiendo al usuario hacer clic en una licitación específica para ser redirigido a una página de detalle. Esta segunda vista realiza una nueva llamada a la API para obtener y mostrar la información detallada de la licitación seleccionada (como el organismo comprador, el estado y la fecha de cierre).

## Características Principales

* **Consumo de API Externa:** Conexión directa a la API de Mercado Público para obtener datos en tiempo real.
* **Visualización de Datos:** Renderizado de la lista de las 10 licitaciones más recientes.
* **Ruteo del Lado del Cliente:** Implementación de `react-router-dom` para gestionar la navegación entre la vista de lista y la vista de detalle.
    * `/`: Página principal (listado de licitaciones).
    * `/licitacion/:codigo`: Página de detalle para una licitación específica.
* **Manejo de Estado con Hooks:** Uso de `useState` para manejar el estado de carga, errores y datos, y `useEffect` para controlar los efectos secundarios (llamadas a la API).
* **Manejo de Errores:** Implementación de un `ErrorBoundary` de React para capturar y manejar errores de renderizado en la UI.
* **Estilos:** Uso de `TailwindCSS` para un diseño de interfaz rápido y funcional.

## Tecnologías Utilizadas

* Vite (como empaquetador de desarrollo)
* React
* React Router DOM
* TailwindCSS

## Instalación y Ejecución Local

Para ejecutar este proyecto en un entorno local, siga los siguientes pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/UDDBootcamp/app-web-con-react](https://github.com/UDDBootcamp/app-web-con-react)
    ```

2.  **Acceder a la carpeta del proyecto:**
    ```bash
    cd p5-dashboard
    ```

3.  **Instalar las dependencias:**
    ```bash
    npm install
    ```

4.  **Configurar el Ticket de API (Requerido):**
    Esta aplicación requiere un "Ticket" (API Key) válido para conectarse a la API de Mercado Público. Debe editar los siguientes archivos y reemplazar el valor del *placeholder*:

    * `src/pages/HomePage.jsx`
    * `src/pages/DetailPage.jsx`

    Busque la siguiente línea en ambos archivos y reemplace el texto:
    ```javascript
    const MI_TICKET = 'AQUI_VA_TU_TICKET_DE_API';
    ```

5.  **Iniciar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```

La aplicación estará disponible en `http://localhost:5173`.
