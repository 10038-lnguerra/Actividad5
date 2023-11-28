
class MyHeader extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <header>
          <h1>¡Hola desde el Encabezado!</h1>
        </header>
      `;
    }
  }
  
  customElements.define('encabezado', MyHeader);
  