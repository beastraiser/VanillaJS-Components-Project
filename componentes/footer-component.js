class FooterComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <footer>
          <p>&copy; 2024 - Documentación de Programación Orientada a Componentes</p>
        </footer>

        <style> 
        footer-component {
          grid-area: footer;
          background-color: #cccccc;
        }     

        p {
          /* Estilos del texto para el encabezado */
          font-size: 2.5vw; /* Tamaño de fuente relativo al ancho de la ventana */
          max-width: 100%; /* Asegura que el texto no exceda el ancho del contenedor */
        }

        </style>

      `;
    }
  }
  
  window.customElements.define("footer-component", FooterComponent);
  