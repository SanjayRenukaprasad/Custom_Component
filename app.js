class MyGreeting extends HTMLElement {
  static get observedAttributes() {
    return ['name', 'message'];
  }

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(attr, oldValue, newValue) {
    if (oldValue !== newValue) this.render();
  }

  render() {
    const name = this.getAttribute('name') || 'World';
    const msg  = this.getAttribute('message') || 'Hello';

    this.shadowRoot.innerHTML = `
      <style>
        :host { display: block; }
        .card {
          font-family: 'Georgia', serif;
          padding: 0.9rem 1.25rem;
          border-radius: 10px;
          border: 1px solid #d0cfc8;
          background: #fafaf8;
          color: #2c2c2a;
          font-size: 1.05rem;
        }
        .card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        .msg  { color: #185fa5; }
        .name { color: #0f6e56; font-style: italic; }
      </style>
      <div class="card">
        <span class="msg">${msg}</span>, <span class="name">${name}</span>!
      </div>
    `;
  }
}

customElements.define('my-greeting', MyGreeting);
