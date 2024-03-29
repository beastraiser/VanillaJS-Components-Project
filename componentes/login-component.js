class LoginComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `

    <form id="formulario" method="post" target="_blank">
      <h2>Formulario de Registro</h2>
      <div class="form-group">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" />
        <div class="error-message" id="nameError"></div>
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" name="email" />
        <div class="error-message" id="emailError"></div>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input type="password" id="password" name="password" />
        <div class="error-message" id="passwordError"></div>
      </div>
      <button type="submit">Enviar</button>
    </form>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap"
      rel="stylesheet"
    />
    
    <style>
      :root {
        --main-background-color: #2880ec;
        --text-color: rgb(247, 223, 30);
        --link-color: rgb(0, 187, 255);
        --link-hover-color: #555;
        --navbar-color: #000000;
      }
      body {
        background-color: var(--navbar-color);
        height: 100vh;
        font-family: "DM Mono", monospace;
        display: grid;
        place-content: center;
      }
      #formulario {
        width: 40vw;
        margin: 0 auto;
        background-color: var(--text-color);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 15px 15px 6px rgb(247, 223, 30, 0.4);
      }

      .form-group {
        margin-bottom: 20px;
      }

      label {
        display: block;
        margin-bottom: 10px;
        font-weight: bold;
      }

      input[type="text"],
      input[type="email"],
      input[type="password"] {
        width: 95%;
        padding: 10px;
        border-radius: 5px;
        border: 1px solid #ddd;
        transition: border-color 0.3s ease;
      }

      input[type="text"]:focus,
      input[type="email"]:focus,
      input[type="password"]:focus {
        border-color: #4caf50;
      }

      button[type="submit"] {
        font-family: "DM Mono", monospace;
        font-weight: bolder;
        font-size: 20px;
        width: 100%;
        padding: 12px;
        background: rgb(176, 157, 13);
        color: black;
        border: 5px inset black;
        cursor: pointer;
        transition: 0.5s ease;
      }

      button[type="submit"]:hover {
        background: linear-gradient(
          -45deg,
          rgb(255, 102, 42),
          rgb(247, 223, 30),
          rgb(14, 139, 222)
        );
        scale: 1.02;
      }

      .error-message {
        color: red;
        font-size: 12px;
        margin-top: 5px;
      }
    </style>
      `;
    const validNames = ["Alexandru", "Julio", "Alba"];

    document.forms[0].addEventListener("submit", (e) => {
      e.preventDefault();

      //Validar campo nombre
      const entradaNombre = document.getElementById("name");
      const errorNombre = document.getElementById("nameError");
      let verificado = [];

      if (entradaNombre.value.trim() === "") {
        errorNombre.textContent = "Por favor, introduce tu nombre";
        errorNombre.classList.add("error-message");
        verificado.push(false);
      } else {
        errorNombre.textContent = "";
        errorNombre.classList.remove("error-message");
        verificado.push(true);
      }

      //Validar correo electronico
      const emailEntrada = document.getElementById("email");
      const emailError = document.getElementById("emailError");
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(emailEntrada.value)) {
        emailError.textContent =
          "Por favor, introduce un correo electronico valido";
        emailError.classList.add("error-message");
        verificado.push(false);
      } else {
        emailError.textContent = "";
        emailError.classList.remove("error-message");
        verificado.push(true);
      }

      //Validar contraseña
      const contrasenyaEntrada = document.getElementById("password");
      const contrasenyaError = document.getElementById("passwordError");
      const contrasenyaPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,100}$/;
      if (!contrasenyaPattern.test(contrasenyaEntrada.value)) {
        contrasenyaError.textContent =
          "Por favor, introduce una contraseña valida, debe tener entre 8 y 100 caracteres, al menos una letra mayúscula, una letra minúscula, un número y un caracter especial (@$!%*?&)";
        contrasenyaError.classList.add("error-message");
        verificado.push(false);
      } else {
        contrasenyaError.textContent = "";
        contrasenyaError.classList.remove("error-message");
        verificado.push(true);
      }

      //Si todos los campos son correctos, enviar el formulario
      if (verificado.includes(false) === false) {
        if (validNames.includes(entradaNombre.value)) {
          window.location.href = "./page.html";
        } else {
          alert("Usuario no autorizado");
        }
      }
    });
  }
}

window.customElements.define("login-comp", LoginComponent);
