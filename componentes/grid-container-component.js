class GridContainerComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    
        <div class="grid-container">
          <sidebar-comp></sidebar-comp>
          <main-section-comp></main-section-comp>
          <footer-comp></footer-comp>
        </div>

        <style>
        
          .grid-container {
  top: 0;
  margin: 0;
  gap: 0.1rem;
  display: grid;
  height: 100vh;
  grid-template-columns: minmax(310px, auto) 2.5fr;
  grid-template-areas: "sidebar main" "footer footer";
}

@media (width <= 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-areas: "sidebar" "main" "footer";
  }
}
        </style>
      `;
  }
}

window.customElements.define("grid-container", GridContainerComponent);
