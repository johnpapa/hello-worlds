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
            p {
                color: var(--red);
            }
        `;

    return style;
  }

  render() {
    let name = this.attributes.name ? this.attributes.name.value : 'World';

    let template = document.createElement('div');

    let content = document.createElement('p');

    content.innerHTML = `Hello ${name}`;

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