class GridContainerComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
        <div class="grid-container">
          <sidebar-component></sidebar-component>
          <main-section-component></main-section-component>
          <footer-component></footer-component>
        </div>
      `;

      /// Agregar estilos con JavaScript
    const gridContainer = this.querySelector('.grid-container');
    gridContainer.style.top = 0;  
    gridContainer.style.gap = '.1rem';
    gridContainer.style.display = 'grid';
    gridContainer.style.height = '100%';
    gridContainer.style.width = 'auto';
    gridContainer.style.margin = '0';
    gridContainer.style.gridTemplateAreas =
      '"sidebar main" "footer footer "';
    // ...otros estilos

    // Media query con JavaScript
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    function handleMediaQuery(event) {
      if (event.matches) {
        gridContainer.style.gridTemplateColumns = '1fr';
       /*  gridContainer.style.gridTemplateRows = '.4fr 1fr .4r'; */
        gridContainer.style.gridTemplateAreas =
          ' "sidebar" "main" "footer"';
      } else {
        gridContainer.style.gridTemplateColumns = 'minmax(0,1fr) minmax(0,2.5fr) ';
       /*  gridContainer.style.gridTemplateRows = '2fr .5fr'; */
        gridContainer.style.gridTemplateAreas =
          ' "sidebar main" "footer footer "';
      }
    }
    mediaQuery.addEventListener('change', handleMediaQuery);
    handleMediaQuery(mediaQuery); // Llamar a la función inicialmente para aplicar los estilos según la media query
  }
}

window.customElements.define('grid-container', GridContainerComponent);