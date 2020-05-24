import { LitElement, html } from "lit-element";

export class HelloWorld extends LitElement {
  static get properties() {
    return {
      value: { type: String },
    };
  }

  constructor() {
    super();

    this.value = "World";
  }

  render() {
    return html` <div>Hello ${this.value}</div> `;
  }
}
