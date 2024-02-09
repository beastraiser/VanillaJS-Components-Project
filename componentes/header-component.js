class HeaderComponent extends HTMLElement {

    constructor(){
        super();
    }
  connectedCallback() {
    this.innerHTML = `

    <header class="navbar">

    <a href="/index.html">
        <img src="/assets/logotipo.webp" alt="Logo de la empresa" class="logo" >
    </a>

    <ul class="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contacto</a></li>
    </ul>

<img src="/assets/menu-up.svg" alt="menu-hamburguesa" class="hamburger">  <!-- SE PUEDEN DESCARGAR DE BOOSTRAP LOS ÍCONOS EN FORMATO .SVG Y SON PERSONALIZABLES --> 

      <style>


      :root {
        --main-background-color: #2880ec;
        --text-color: white;
        --link-color: rgb(0, 187, 255);
        --link-hover-color: #555;
        --navbar-color: #333;
    }
        
          .navbar {
            display: flex;
            justify-content:space-between;
            align-items: center;
            padding: 2rem;
            background-color: var(--navbar-color);
            color: var(--text-color);
            height: 5vh;
            width: auto;
            position: sticky;
            top: 0;
            z-index: 1000; /* Establece un valor alto para asegurarte de que esté por encima */
                    
        }
        
        .logo {
            max-height: 100px;
            max-width: auto;
           height: 10vh;
        
            border-radius:50% ;
        }
        
        ul {
            list-style: none;
            align-items: center;
        }
        
        
        .nav-links {
            display: flex;
            gap: 3rem;
        }
        
        .nav-links a {
            color: white;
            text-decoration: none;
            transition: text-decoration 0.3s ease;
        }
        
        .nav-links a:focus {
            background-color: #555;
            color: #fff;
        }
        
        .nav-links a:hover {
            color: rgb(0, 187, 255);
            text-decoration: underline;
        
        }
        
        .hamburger{
            display: none;
            cursor: pointer;
        }
        
        
        .content {
            padding: 20px;
        }
        
        @media (width <= 768px) {
           
        
            .nav-links {
                display: none;
                flex-direction: column;
                gap: 2rem;
                text-align: center;
                position: absolute;
                left: 0;
                background-color: #333;
                width: 100%;
                padding: 20px 0;
            }
        
           
            .nav-links.active {
                
                display: flex;
                margin-top: 18rem;
                gap: 20px;
                justify-content: center;

            }
            .hamburger {
                display: block;
                justify-self: end;
                
            }
        }
        
      </style>
    `;

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
}

customElements.define("header-component", HeaderComponent);
