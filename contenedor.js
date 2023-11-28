
class MyContainer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <div>
          <slot name="header"></slot>
          <slot name="list"></slot>
          <slot name="form"></slot>
        </div>
      `;
    }
  }

  customElements.define('contenedo', MyContainer);
  