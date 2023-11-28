
class MyForm extends HTMLElement {
    constructor() {
      super();
      // Crear Shadow DOM
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <section>
          <form>
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required>
            <br>
            <label for="correo">Correo:</label>
            <input type="email" id="correo" name="correo" required>
            <br>
            <button type="submit">Enviar</button>
          </form>
        </section>
      `;
    }
  }
  customElements.define('form', MyForm);
  