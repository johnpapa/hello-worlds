import ko from "knockout";

class HelloWorldViewModel {
  constructor() {
    this.message = "Hello World";
  }
}

ko.components.register("hello-world", {
  viewModel: HelloWorldViewModel,
  template: `<div data-bind="text: message"></div>`
});

ko.applyBindings();
