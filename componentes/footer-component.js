class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer>
          <div class = "footer-txt">&copy; 2024 - Documentación de Programación Orientada a Componentes</div>
        </footer>

        <style> 
        :root {
  --main-background-color: #2880ec;
  --text-color: rgb(247, 223, 30);
  --link-color: rgb(0, 187, 255);
  --link-hover-color: #555;
  --navbar-color: #000000;
}
footer-comp {
  grid-area: footer;
  display: grid;
  place-content: center;
  background-color: var(--navbar-color);
  color: var(--text-color);
  min-height: 10vh;
}

.footer-txt {
  font-family: "Sixtyfour", sans-serif;
  font-size: 1rem;
  text-align: center;
}

        </style>

      `;
  }
}

window.customElements.define("footer-comp", FooterComponent);
