import { Component, h } from "@stencil/core";

@Component({
  tag: "app-root",
  shadow: true,
})
export class AppRoot {
  name = "World";

  render() {
    return <div>Hello {this.name}</div>;
  }
}
