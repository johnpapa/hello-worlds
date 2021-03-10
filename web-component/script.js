class HelloWorld extends HTMLElement {
  constructor() {
    super();

    console.log('constructor()');

    const shadowRoot = this.attachShadow({ mode: 'open' }).appendChild(this.render());
  }

  static is() {
    return 'hello-world';
  }

  static get observedAttributes() {
    return [
      'name'
    ];
  }

  style() {
    let style = document.createElement('style');

    style.innerHTML = `
        div {
          border: 2px solid var(--red);
          padding: 5px;
        }

        p {
            color: var(--red);
        }

        span.my-green {
          color: var(--my-green);
        }
    `;

    return style;
  }

  render() {
    let name = this.attributes.name ? this.attributes.name.value : 'World';

    let template = document.createElement('div');

    let content = document.createElement('p');

    content.innerHTML = `Hello <span class="my-green">${name}</span>`;

    template.appendChild(this.style());

    template.appendChild(content);

    this.shadowRoot.innerHTML = '';

    return template;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(arguments);

    if (name === 'name') {
      this.shadowRoot.appendChild(this.render());
    }
  }

  connectedCallback() {
    console.log('connectedCallback()');
  }

  disconnectedCallback() {
    console.log('disconnectedCallback()');
  }
}

window.customElements.define(HelloWorld.is(), HelloWorld);