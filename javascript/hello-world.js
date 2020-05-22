class HelloWorldComponent extends HTMLElement {
  connectedCallback() {
    /* called when the element is connected to the page */
    this.innerHTML = 'Hello World';
  }
}
customElements.define('hello-world-component', HelloWorldComponent);
