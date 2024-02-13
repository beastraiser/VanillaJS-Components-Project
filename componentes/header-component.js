class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

    <header class="navbar">

    <a href="/page.html" class="logo-link">
        <img src="/assets/css3-logo.svg" alt="Logo JS" class="logo" >
        <img src="/assets/js-logo.svg" alt="Logo JS" class="logo" >
        <img src="/assets/html5-logo.svg" alt="Logo JS" class="logo" >
    </a>

    <ul class="nav-links">
        <li><a href="https://developer.mozilla.org/es/docs/Web/JavaScript" id="docLink" target="_blank" rel="noopener noreferrer">Documentación Oficial</a></li>
    </ul>

    <img src="/assets/login-logo.png" alt="login-logo" class="login">

    <style>
      :root {
  --main-background-color: #2880ec;
  --text-color: rgb(247, 223, 30);
  --link-color: rgb(0, 187, 255);
  --link-hover-color: #555;
  --navbar-color: #000000;
}

.navbar {
  font-family: "Sixtyfour", sans-serif;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  background-color: var(--navbar-color);
  color: var(--text-color);
  height: 10vh;
  position: sticky;
  top: 0;
}

  .logo {
    height: 10vh;
  }

.logo-link {
  text-decoration: none;
}

ul {
  list-style: none;
  align-items: center;
}

.nav-links {
  display: flex;
  padding: 0;
  margin: 0;
  padding: 0.8rem;
  border-radius: 20px;
}

.nav-links a {
  color: var(--text-color);
  font-size: 1.5rem;
  text-decoration: none;
}

.nav-links a img {
  height: 2rem;
}

.nav-links:hover {
  background: rgb(32, 32, 32, 0.5);
}

.login {
  display: none;
  cursor: pointer;
}

@media (width <= 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    position: absolute;
    left: 0;
    background-color: rgb(32, 32, 32, 0.8);
    width: 100%;
    padding: 20px 0;
  }

  .nav-links.active {
    display: flex;
    margin-top: 12.6rem;
    justify-content: center;
  }
  .login {
    display: block;
    justify-self: end;
    height: 6vh;
  }

  .logo {
  height: 6vh;
  }
}
    </style>
    `;
    //Mostrar el menú despegable en pantalla pequeña
    const login = document.querySelector(".login");
    const navLinks = document.querySelector(".nav-links");

    login.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
}

customElements.define("header-comp", HeaderComponent);
