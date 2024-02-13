class MainSectionComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <section class = "main-section-component">
          <iframe id = "iframe" src= "">Cargando...</iframe>
        </section>
        
        <style>
          :root {
  --main-background-color: #2880ec;
  --text-color: rgb(247, 223, 30);
  --link-color: rgb(0, 187, 255);
  --link-hover-color: #555;
  --navbar-color: #000000;
}
.main-section-component {
  height: 100vh;
  grid-area: main;
  display: grid;
  place-content: center;
  overflow-y: auto;
  background: linear-gradient(
    135deg,
    rgb(14, 139, 222) 50%,
    rgb(255, 102, 42) 50%
  );
}
iframe {
  width: 50vw;
  height: 80vh;
  background-color: rgba(255, 255, 255, 0.8);
  border: #000000 1rem inset;
  padding: 0.5rem;
}

@media (width <= 768px) {
  iframe {
    width: 80vw;
  }
}
        </style>

      `;

    const subMenuItems = document.querySelectorAll(".sub-menu-item");

    subMenuItems.forEach((item) => {
      item.addEventListener("click", () => {
        const iframe = document.getElementById("iframe");
        const newSrc = item.getAttribute("data-src");
        iframe.src = newSrc;
      });
    });
  }
}

window.customElements.define("main-section-comp", MainSectionComponent);
