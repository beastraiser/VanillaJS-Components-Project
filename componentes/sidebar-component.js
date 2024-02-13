class SidebarComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <aside class="sidebar-comp">
        
        <div class="menu" data-submenu="file-menu">
          <div class="menu-item">
            <img src = "../assets/file.png" alt = ".js logo" class = "menu-icon" />
            <span class="menu-text">BOM</span>
          </div>
          
          <div class="sub-menu" id="file-menu">
            <div class="sub-menu-item" data-src = "../BOM/bom-introduccion.html">Intoducción</div>
            <div class="sub-menu-item" data-src = "../BOM/bom-objeto-window.html">Objeto window</div>
            <div class="sub-menu-item" data-src = "../BOM/bom-objeto-navigator.html">Objeto navigator</div>
            <div class="sub-menu-item" data-src = "../BOM/bom-objeto-screen.html">Objeto screen</div>
            <div class="sub-menu-item" data-src = "../BOM/bom-objeto-location.html">Objeto location</div>
            <div class="sub-menu-item" data-src = "../BOM/bom-objeto-history.html">Objeto history</div>
            <div class="sub-menu-item nested" data-submenu="nested-menu" data-src = "">
              <span class="menu-text">Ejemplos</span>
            </div>
            <div class="sub-menu">
              <div class="sub-menu-item" data-src = "../BOM/windows-methods/index.html">Windows methods</div>
              <div class="sub-menu-item" data-src = "../BOM/camara/index.html">Cámara</div>
              <div class="sub-menu-item" data-src = "../BOM/temporizadores/index.html">Temporizadores</div>
            </div>
          </div>

          <div class="menu-item">
            <img src = "../assets/file.png" alt = ".js logo" class = "menu-icon" />
            <span class="menu-text">DOM</span>
          </div>
          
          <div class="sub-menu" id="file-menu">
            <div class="sub-menu-item" data-src = "../DOM/dom-intro.html">Intoducción</div>
            <div class="sub-menu-item nested" data-submenu="nested-menu"  data-src = "">
              <span class="menu-text">Proyectos</span>
            </div>
            <div class="sub-menu">
              <div class="sub-menu-item" data-src = "../DOM/gid-scroll-resizable-side-bar-clase/index.html">Grid scroll resizable side bar</div>
              <div class="sub-menu-item" data-src = "../DOM/form/index.html">Validación de formularios</div>
              <div class="sub-menu-item" data-src = "../DOM/base-juego-adivinanza-clase/index.html">Adivia el número</div>
            </div>
          </div>
        </div>
        
        <div id="resize-handle" class="resize-handle"></div>

        </aside>

        <style>
        
        :root {
  --main-background-color: #2880ec;
  --text-color: rgb(247, 223, 30);
  --link-color: rgb(0, 187, 255);
  --link-hover-color: #555;
  --navbar-color: #000000;
}
.sidebar-comp {
  display: flex;
  flex-direction: row;
  width: 100%;
  font-family: "Sixtyfour", sans-serif;
  font-weight: 600;
  height: 100vh;
  background-color: var(--text-color);
  color: var(--navbar-color);
  overflow-y: auto;
}

.menu {
  width: 100%;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.menu-item {
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  padding: 1.5rem;
  background-color: rgb(201, 179, 15);
  border: 0.5rem inset #000000;
  transition: 0.2s ease-in-out;
}

.menu-item:hover,
.sub-menu-item:hover {
  cursor: pointer;
  scale: 1.05;
  background: linear-gradient(
    -45deg,
    rgb(255, 102, 42),
    rgb(247, 223, 30),
    rgb(14, 139, 222)
  );
  opacity: 0.9;
}

.menu-icon {
  height: 2.2rem;
}
.sub-menu {
  display: none;
  font-size: 1rem;
  flex-direction: column;
  gap: 0.7rem;
}

.sub-menu-item {
  display: flex;
  padding: 0.7rem;
  justify-content: center;
  text-align: center;
  background-color: rgb(201, 179, 15);
  border: 0.5rem inset #000000;
  transition: 0.4s ease-in-out;
}

.sub-menu.show {
  display: flex;
}

@media (width <= 1024px) and (width >= 768px) {
  .sidebar-comp {
    font-size: 1.5rem;
  }
  .sub-menu {
    display: none;
    font-size: 0.8rem;
    flex-direction: column;
    gap: 0.7rem;
  }
  .menu-icon {
    height: 1.5rem;
  }
}

.resize-handle {
  width: 10px;
  height: 100%;
  background: rgb(201, 179, 15);
  cursor: col-resize;
}

.resize-handle:hover {
  background: linear-gradient(
    to bottom,
    rgb(255, 102, 42) 30%,
    rgb(14, 139, 222)
  );
}
        
        </style>
      `;

    //Nested menus
    const menuItem = document.querySelectorAll(".menu-item");

    menuItem.forEach((item) => {
      item.addEventListener("click", function () {
        const subMenu = item.nextElementSibling;
        subMenu.classList.toggle("show");
      });
    });

    const nestedMenu = document.querySelectorAll(".nested");

    nestedMenu.forEach((txt) => {
      txt.addEventListener("click", function () {
        const subMenu = txt.nextElementSibling;
        subMenu.classList.toggle("show");
      });
    });

    //Resize handle

    //Capturo los elementos HTML
    const sidebar = document.querySelector(".sidebar-comp");
    const resizeHandle = document.getElementById("resize-handle");

    let isResizing = false;

    //Guardamos esa propiedad en una variable
    let initialSidebarWidth = sidebar.offsetWidth;

    //Definimos el ancho maximo del sidebar (70% de la anchura de la ventana)
    const maxSidebarWidth = 450;
    const minSidebarWidth = 310;

    if (window.innerWidth <= 768) {
      resizeHandle.style.display = "none";
    } else {
      resizeHandle.addEventListener("mousedown", (e) => {
        isResizing = true;

        e.preventDefault(); //evitar el comportamiento por defecto del navegador(en este caso deja de seleccionar el texto mientras se deja pulsado el ratón)

        const startX = e.clientX; //posición inicial del ratón

        //Aplicamos un evento al documento que se dispara cuando se mueve el ratón
        document.addEventListener("mousemove", (e) => {
          if (!isResizing) return;

          //Si el ratón se mueve, calculamos la distancia entre el punto inicial (startX) y el nuevo punto (e.clientX)
          const deltaX = e.clientX - startX;

          let newSidebarWidth = initialSidebarWidth + deltaX;

          if (newSidebarWidth > maxSidebarWidth) {
            newSidebarWidth = maxSidebarWidth;
          } else if (newSidebarWidth < minSidebarWidth) {
            newSidebarWidth = minSidebarWidth;
          }

          sidebar.style.width = `${newSidebarWidth}px`;
        });

        document.addEventListener("mouseup", () => {
          isResizing = false;

          //Si el ratón se suelta, volvemos a la anchura inicial, que se actualiza con la nueva anchura(sidebar.offsetWidth)
          initialSidebarWidth = sidebar.offsetWidth;
        });
      });
    }
    //pasamos por parámetro el propio objeto del evento, que contiene varias propiedades
  }
}

window.customElements.define("sidebar-comp", SidebarComponent);
