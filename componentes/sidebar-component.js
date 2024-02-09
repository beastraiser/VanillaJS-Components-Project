class SidebarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <aside class="sidebar-component">
        
        <div class="menu" data-submenu="file-menu">
          <div class="menu-item">
            <span class="menu-icon">📁</span>
            <span class="menu-text">File</span>
            <span class="arrow">▶️</span>
          </div>
          
          <div class="sub-menu" id="file-menu">
            <div class="sub-menu-item">Open</div>
            <div class="sub-menu-item">Save</div>
            <div class="sub-menu-item nested" data-submenu="nested-menu">
    
              
              <span class="menu-text">Nested Menu</span>
              <span class="arrow">▶️</span>
            </div>
            <div class="sub-menu" id="nested-menu">
              <div class="sub-menu-item">Item 1</div>
              <div class="sub-menu-item">Item 2</div>
            </div>
            <div class="sub-menu-item">Exit</div>
          </div>
        </div>
        <div class="menu" data-submenu="edit-menu">
          <div class="menu-item">
            <span class="menu-icon">✏️</span>
            <span class="menu-text">Edit</span>
            <span class="arrow">▶️</span>
          </div>
          <div class="sub-menu" id="edit-menu">
            <div class="sub-menu-item">Cut</div>
            <div class="sub-menu-item">Copy</div>
            <div class="sub-menu-item">Paste</div>
          </div>
        </div>
    
    
        <div class="menu" data-submenu="edit-menu">
          <div class="menu-item">
            <span class="menu-icon">&#x1F4C4;</span>
            <span class="menu-text">Docs</span>
            <span class="arrow">▶️</span>
          </div>
          <div class="sub-menu" id="edit-menu">
            <div class="sub-menu-item">Import</div>
            <div class="sub-menu-item">Export</div>
            <div class="sub-menu-item">Download</div>
          </div>
        </div>

        <div class="menu" data-submenu="edit-menu">
        <div class="menu-item">
          <span class="menu-icon">&#x1F4C4;</span>
          <span class="menu-text">Docs</span>
          <span class="arrow">▶️</span>
        </div>
        <div class="sub-menu" id="edit-menu">
          <div class="sub-menu-item">Import</div>
          <div class="sub-menu-item">Export</div>
          <div class="sub-menu-item">Download</div>
        </div>
      </div><div class="menu" data-submenu="edit-menu">
      <div class="menu-item">
        <span class="menu-icon">&#x1F4C4;</span>
        <span class="menu-text">Docs</span>
        <span class="arrow">▶️</span>
      </div>
      <div class="sub-menu" id="edit-menu">
        <div class="sub-menu-item">Import</div>
        <div class="sub-menu-item">Export</div>
        <div class="sub-menu-item">Download</div>
      </div>
    </div><div class="menu" data-submenu="edit-menu">
    <div class="menu-item">
      <span class="menu-icon">&#x1F4C4;</span>
      <span class="menu-text">Docs</span>
      <span class="arrow">▶️</span>
    </div>
    <div class="sub-menu" id="edit-menu">
      <div class="sub-menu-item">Import</div>
      <div class="sub-menu-item">Export</div>
      <div class="sub-menu-item">Download</div>
    </div>
  </div>
  <div class="menu" data-submenu="edit-menu">
          <div class="menu-item">
            <span class="menu-icon">&#x1F4C4;</span>
            <span class="menu-text">Docs</span>
            <span class="arrow">▶️</span>
          </div>
          <div class="sub-menu" id="edit-menu">
            <div class="sub-menu-item">Import</div>
            <div class="sub-menu-item">Export</div>
            <div class="sub-menu-item">Download</div>
          </div>
        </div><div class="menu" data-submenu="edit-menu">
        <div class="menu-item">
          <span class="menu-icon">&#x1F4C4;</span>
          <span class="menu-text">Docs</span>
          <span class="arrow">▶️</span>
        </div>
        <div class="sub-menu" id="edit-menu">
          <div class="sub-menu-item">Import</div>
          <div class="sub-menu-item">Export</div>
          <div class="sub-menu-item">Download</div>
        </div>
      </div><div class="menu" data-submenu="edit-menu">
      <div class="menu-item">
        <span class="menu-icon">&#x1F4C4;</span>
        <span class="menu-text">Docs</span>
        <span class="arrow">▶️</span>
      </div>
      <div class="sub-menu" id="edit-menu">
        <div class="sub-menu-item">Import</div>
        <div class="sub-menu-item">Export</div>
        <div class="sub-menu-item">Download</div>
      </div>
    </div><div class="menu" data-submenu="edit-menu">
    <div class="menu-item">
      <span class="menu-icon">&#x1F4C4;</span>
      <span class="menu-text">Docs</span>
      <span class="arrow">▶️</span>
    </div>
    <div class="sub-menu" id="edit-menu">
      <div class="sub-menu-item">Import</div>
      <div class="sub-menu-item">Export</div>
      <div class="sub-menu-item">Download</div>
    </div>
  </div><div class="menu" data-submenu="edit-menu">
  <div class="menu-item">
    <span class="menu-icon">&#x1F4C4;</span>
    <span class="menu-text">Docs</span>
    <span class="arrow">▶️</span>
  </div>
  <div class="sub-menu" id="edit-menu">
    <div class="sub-menu-item">Import</div>
    <div class="sub-menu-item">Export</div>
    <div class="sub-menu-item">Download</div>
  </div>
</div><div class="menu" data-submenu="edit-menu">
<div class="menu-item">
  <span class="menu-icon">&#x1F4C4;</span>
  <span class="menu-text">Docs</span>
  <span class="arrow">▶️</span>
</div>
<div class="sub-menu" id="edit-menu">
  <div class="sub-menu-item">Import</div>
  <div class="sub-menu-item">Export</div>
  <div class="sub-menu-item">Download</div>
</div>
</div><div class="menu" data-submenu="edit-menu">
<div class="menu-item">
  <span class="menu-icon">&#x1F4C4;</span>
  <span class="menu-text">Docs</span>
  <span class="arrow">▶️</span>
</div>
<div class="sub-menu" id="edit-menu">
  <div class="sub-menu-item">Import</div>
  <div class="sub-menu-item">Export</div>
  <div class="sub-menu-item">Download</div>
</div>
</div><div class="menu" data-submenu="edit-menu">
<div class="menu-item">
  <span class="menu-icon">&#x1F4C4;</span>
  <span class="menu-text">Docs</span>
  <span class="arrow">▶️</span>
</div>
<div class="sub-menu" id="edit-menu">
  <div class="sub-menu-item">Import</div>
  <div class="sub-menu-item">Export</div>
  <div class="sub-menu-item">Download</div>
</div>
</div><div class="menu" data-submenu="edit-menu">
<div class="menu-item">
  <span class="menu-icon">&#x1F4C4;</span>
  <span class="menu-text">Docs</span>
  <span class="arrow">▶️</span>
</div>
<div class="sub-menu" id="edit-menu">
  <div class="sub-menu-item">Import</div>
  <div class="sub-menu-item">Export</div>
  <div class="sub-menu-item">Download</div>
</div>
</div><div class="menu" data-submenu="edit-menu">
          <div class="menu-item">
            <span class="menu-icon">&#x1F4C4;</span>
            <span class="menu-text">Docs</span>
            <span class="arrow">▶️</span>
          </div>
          <div class="sub-menu" id="edit-menu">
            <div class="sub-menu-item">Import</div>
            <div class="sub-menu-item">Export</div>
            <div class="sub-menu-item">Download</div>
          </div>
        </div>

    
        <div class="menu">
          <div class="menu-item">
            <span class="menu-icon">⚙️</span>
            <span class="menu-text">Settings</span>
          </div>
        </div>

        </aside>

        <style>
        .sidebar-component {
          width: 100%;
          height: 100vh;
          background-color: #2c3e50;
          color: white;
          overflow-y: auto  ; /* Agregar barra de desplazamiento vertical */
          z-index: 999; /* Asegúrate de que sea inferior al header pero lo suficientemente alto para estar por delante de otros elementos si es necesario */    
        }
        
      
        .menu {
          padding: 10px;
          cursor: pointer;
        }
        
        .menu-item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }
        
        .menu-icon {
          margin-right: 10px;
        }
        .sub-menu {
          display: none; 
          flex-direction: column; /* Muestra los submenús en columnas */
          background-color: #34495e; /* Fondo del submenú */
          position: relative; /* Posición relativa para no superponer los submenús */
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Sombra para resaltar el submenú */
          padding-left: 20px;
        }
        
        .sub-menu-item {
          display: flex;
          margin-bottom: 5px;
          cursor: pointer;
          padding: 8px; /* Añade un espacio interno al submenú item */
        }
        
        .sub-menu.show {
          display: flex;
        }
        
        .rotate-arrow {
          transform: rotate(90deg);
        }
        .arrow{
          margin-left: auto;
          transition: transform 0.3s ease;
        }
        
        .sub-menu-item:hover {
          background-color: #2c3e50; /* Cambia el color de fondo al pasar el ratón */
        }
        
        </style>
      `;

    // Obtén una NodeList de todos los elementos con la clase "arrow"
    const arrows = document.querySelectorAll('.arrow');
    console.log(arrows);
    // Itera sobre cada flecha y agrega un evento de clic
    arrows.forEach(arrow => {
      arrow.addEventListener('click', function () {
        const subMenu = this.parentElement.nextElementSibling; // El submenú asociado a la flecha
        subMenu.classList.toggle('show');
        this.classList.toggle('rotate-arrow');


      });
    });


  }
}

window.customElements.define("sidebar-component", SidebarComponent);
