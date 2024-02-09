class MainSectionComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <section class = "main-section-component">
          <article id="intro">
            <h2>Introducción</h2>
            <p>La programación orientada a componentes es un paradigma que...</p>
            <!-- Contenido explicativo -->
          </article>
          <article id="concepts">
            <h2>Conceptos Básicos</h2>
            <p>Algunos conceptos clave de la programación orientada a componentes son...
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Nostrum voluptate deserunt perferendis dignissimos dicta quos aliquid
             consequuntur tempore! Fugit praesentium eligendi at labore deserunt quasi 
             saepe vel facere quisquam fuga?Lorem ipsum, dolor sit amet consectetur adipisicing 
             elit. Nostrum voluptate deserunt perferendis dignissimos dicta quos aliquid consequuntur 
             tempore! Fugit praesentium eligendi at labore deserunt quasi saepe vel facere quisquam 
             fuga?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptate deserunt 
             perferendis dignissimos dicta quos aliquid consequuntur tempore! Fugit praesentium eligendi 
             at labore deserunt quasi saepe vel facere quisquam fuga?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptate deserunt perferendis dignissimos dicta quos aliquid consequuntur tempore! Fugit praesentium eligendi at labore deserunt quasi saepe vel facere quisquam fuga?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum voluptate deserunt perferendis dignissimos dicta quos aliquid consequuntur tempore! Fugit praesentium eligendi at labore deserunt quasi saepe vel facere quisquam fuga?
            
            
            </p>
            <!-- Contenido explicativo -->
          </article>
          <!-- ... Otros artículos de la documentación -->
        </section>
        
        <style>
        .main-section-component {
          grid-area: main;
          width: 100%;
          height: 100vh;
          background-color: #2c3e50;
          overflow-y: auto  ; /* Agregar barra de desplazamiento vertical */
        }
        </style>

      `;
    }
  }
  
  window.customElements.define("main-section-component", MainSectionComponent);
  