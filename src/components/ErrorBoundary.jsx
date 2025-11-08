import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Actualiza el estado para que el siguiente renderizado muestre la interfaz de repuesto.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Aquí podrías registrar el error en un servicio de logs
    console.error("Error atrapado por Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Puedes renderizar cualquier interfaz de repuesto
      return (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">¡Ocurrió un error!</strong>
          <span className="block sm:inline"> Algo salió mal en esta parte de la app.</span>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;